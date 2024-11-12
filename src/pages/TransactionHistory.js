import React, { useState } from 'react';

// Sample Inventory and Transaction Data
const initialInventory = [
  { id: 1, name: 'Rice', category: 'Grains', quantity: 50, unitPrice: 1, totalValue: 50, supplier: 'Supplier A', purchaseDate: '2024-10-01', expirationDate: '2025-10-01', reorderLevel: 20, status: 'In Stock' },
  { id: 2, name: 'Potatoes', category: 'Vegetables', quantity: 30, unitPrice: 0.5, totalValue: 15, supplier: 'Supplier B', purchaseDate: '2024-10-05', expirationDate: '2024-12-01', reorderLevel: 10, status: 'In Stock' },
];

const initialTransactions = [
  { id: 1, date: '2024-10-01', itemName: 'Rice', transactionType: 'Purchase', quantity: 50, totalAmount: 50, supplier: 'Supplier A', notes: '' },
  { id: 2, date: '2024-10-05', itemName: 'Potatoes', transactionType: 'Purchase', quantity: 30, totalAmount: 15, supplier: 'Supplier B', notes: '' },
];

const MessManagementDashboard = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [newItem, setNewItem] = useState({ name: '', category: '', quantity: '', unitPrice: '', supplier: '', purchaseDate: '', expirationDate: '', reorderLevel: '' });
  const [selectedItem, setSelectedItem] = useState(null);
  const [newTransaction, setNewTransaction] = useState({ itemName: '', transactionType: 'Purchase', quantity: '', totalAmount: '', supplier: '', notes: '' });

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const totalValue = newItem.quantity * newItem.unitPrice;
    setInventory((prev) => [
      ...prev,
      { id: inventory.length + 1, totalValue, status: 'In Stock', ...newItem },
    ]);
    setNewItem({ name: '', category: '', quantity: '', unitPrice: '', supplier: '', purchaseDate: '', expirationDate: '', reorderLevel: '' });
  };

  const handleUpdateItemChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    setInventory((prev) => prev.map(item => (item.id === selectedItem.id ? selectedItem : item)));
    setSelectedItem(null);
  };

  const handleNewTransactionChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const item = inventory.find(item => item.name === newTransaction.itemName);
    const totalAmount = item.unitPrice * newTransaction.quantity;
    setTransactions((prev) => [
      ...prev,
      { id: transactions.length + 1, date: new Date().toISOString().split('T')[0], totalAmount, ...newTransaction },
    ]);
    // Update inventory quantity
    setInventory((prev) =>
      prev.map(item => {
        if (item.name === newTransaction.itemName) {
          const updatedQuantity = item.quantity - newTransaction.quantity;
          return { ...item, quantity: updatedQuantity, totalValue: updatedQuantity * item.unitPrice, status: updatedQuantity <= item.reorderLevel ? 'Low Stock' : 'In Stock' };
        }
        return item;
      })
    );
    setNewTransaction({ itemName: '', transactionType: 'Purchase', quantity: '', totalAmount: '', supplier: '', notes: '' });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mess Management Dashboard</h1>

      {/* Inventory Section */}
      <h2 className="text-xl font-semibold mb-2">Inventory</h2>
      <table className="w-full mb-4 border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Item Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Unit Price</th>
            <th className="border p-2">Total Value</th>
            <th className="border p-2">Supplier</th>
            <th className="border p-2">Purchase Date</th>
            <th className="border p-2">Expiration Date</th>
            <th className="border p-2">Reorder Level</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.category}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">${item.unitPrice}</td>
              <td className="border p-2">${item.totalValue}</td>
              <td className="border p-2">{item.supplier}</td>
              <td className="border p-2">{item.purchaseDate}</td>
              <td className="border p-2">{item.expirationDate}</td>
              <td className="border p-2">{item.reorderLevel}</td>
              <td className="border p-2">{item.status}</td>
              <td className="border p-2">
                <button className="text-blue-500" onClick={() => handleSelectItem(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* New Item Form */}
      <h2 className="text-xl font-semibold mb-2">Add New Item</h2>
      <form onSubmit={handleAddItem} className="mb-4">
        <input name="name" value={newItem.name} onChange={handleNewItemChange} placeholder="Item Name" required />
        <input name="category" value={newItem.category} onChange={handleNewItemChange} placeholder="Category" required />
        <input name="quantity" type="number" value={newItem.quantity} onChange={handleNewItemChange} placeholder="Quantity" required />
        <input name="unitPrice" type="number" step="0.01" value={newItem.unitPrice} onChange={handleNewItemChange} placeholder="Unit Price" required />
        <input name="supplier" value={newItem.supplier} onChange={handleNewItemChange} placeholder="Supplier" required />
        <input name="purchaseDate" type="date" value={newItem.purchaseDate} onChange={handleNewItemChange} required />
        <input name="expirationDate" type="date" value={newItem.expirationDate} onChange={handleNewItemChange} required />
        <input name="reorderLevel" type="number" value={newItem.reorderLevel} onChange={handleNewItemChange} placeholder="Reorder Level" required />
        <button type="submit" className="bg-green-500 text-white p-2">Add Item</button>
      </form>

      {/* Update Item Form */}
      {selectedItem && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Update Item</h2>
          <form onSubmit={handleUpdateItem} className="mb-4">
            <input name="name" value={selectedItem.name} onChange={handleUpdateItemChange} placeholder="Item Name" required />
            <input name="category" value={selectedItem.category} onChange={handleUpdateItemChange} placeholder="Category" required />
            <input name="quantity" type="number" value={selectedItem.quantity} onChange={handleUpdateItemChange} placeholder="Quantity" required />
            //<input name="unitPrice" type="number" step="0.01" value={selectedItem.unitPrice} onChange={handleUpdateItemChange} placeholder="Unit Price" required />
            <input name="supplier" value={selectedItem.supplier} onChange={handleUpdateItemChange} placeholder="Supplier" required />
            <input name="purchaseDate" type="date" value={selectedItem.purchaseDate} onChange={handleUpdateItemChange} required />
            <input name="expirationDate" type="date" value={selectedItem.expirationDate} onChange={handleUpdateItemChange} required />
            <input name="reorderLevel" type="number" value={selectedItem.reorderLevel} onChange={handleUpdateItemChange} placeholder="Reorder Level" required />
            <button type="submit" className="bg-blue-500 text-white p-2">Update Item</button>
            <button type="button" className="bg-red-500 text-white p-2 ml-2" onClick={() => setSelectedItem(null)}>Cancel</button>
          </form>
        </div>
      )}

      {/* Transactions Section */}
      <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
      <table className="w-full mb-4 border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Item Name</th>
            <th className="border p-2">Transaction Type</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Total Amount</th>
            <th className="border p-2">Supplier</th>
            <th className="border p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="border p-2">{transaction.date}</td>
              <td className="border p-2">{transaction.itemName}</td>
              <td className="border p-2">{transaction.transactionType}</td>
              <td className="border p-2">{transaction.quantity}</td>
              <td className="border p-2">${transaction.totalAmount}</td>
              <td className="border p-2">{transaction.supplier}</td>
              <td className="border p-2">{transaction.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* New Transaction Form */}
      <h2 className="text-xl font-semibold mb-2">Add New Transaction</h2>
      <form onSubmit={handleAddTransaction}>
        <input name="itemName" value={newTransaction.itemName} onChange={handleNewTransactionChange} placeholder="Item Name" required />
        <select name="transactionType" value={newTransaction.transactionType} onChange={handleNewTransactionChange} required>
          <option value="Purchase">Purchase</option>
          <option value="Sale">Sale</option>
        </select>
        <input name="quantity" type="number" value={newTransaction.quantity} onChange={handleNewTransactionChange} placeholder="Quantity" required />
        <input name="totalAmount" type="number" step="0.01" value={newTransaction.totalAmount} onChange={handleNewTransactionChange} placeholder="Total Amount" required />
        <input name="supplier" value={newTransaction.supplier} onChange={handleNewTransactionChange} placeholder="Supplier" />
        <textarea name="notes" value={newTransaction.notes} onChange={handleNewTransactionChange} placeholder="Notes" />
        <button type="submit" className="bg-green-500 text-white p-2">Add Transaction</button>
      </form>
    </div>
  );
};

export default MessManagementDashboard;