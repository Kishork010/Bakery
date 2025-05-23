import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart({ cartItems = [] }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Initialize cart with quantity 1 for each item
    const initialItems = cartItems.map((item) => ({
      ...item,
      quantity: 1
    }));
    setItems(initialItems);
  }, [cartItems]);

  const cleanPrice = (price) => {
    return parseFloat(price.toString().replace(/[^\d.]/g, '')) || 0;
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = Math.max(1, parseInt(newQuantity) || 1);
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const getItemTotal = (item) => {
    return cleanPrice(item.price) * item.quantity;
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + getItemTotal(item), 0).toFixed(2);
  };

  const payNow = () => {
  items.forEach((item) => {
    const formData = new FormData();
    formData.append('entry.1111111111', item.name); // Product Name
    formData.append('entry.2222222222', cleanPrice(item.price).toFixed(2)); // Price
    formData.append('entry.3333333333', item.quantity); // Quantity
    formData.append('entry.4444444444', getItemTotal(item).toFixed(2)); // Total Price

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSeXYZ123456/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });
  });

  alert("Order submitted via Google Form!");
};


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item, index) => (
              <div key={index} className="cart-item-card">
                <div className="item-info">
                  <strong>{item.name}</strong>
                  <span>Price: ₹{cleanPrice(item.price).toFixed(2)}</span>
                </div>
                <div className="item-actions">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, e.target.value)}
                  />
                  <span>= ₹{getItemTotal(item).toFixed(2)}</span>
                  <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total Amount: ₹{getCartTotal()}</h3>
            <button className="pay-now-btn" onClick={payNow}>Pay Now</button>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
