import React, { useState } from 'react'; // Import useState
import './Menu.css';

function Menu({ addToCart }) {
  const [selectedItems, setSelectedItems] = useState([]); // Example of using useState
  
  const items = [
    { category: 'Bread Items', items: [
      { name: 'Baguette', price: '₹4.5' },
      { name: 'Sourdough Bread', price: '₹5.25' },
      { name: 'Mixed Grain', price: '₹4.5' },
      { name: 'Milk Bread', price: '₹3.55' },
      { name: 'Brown Bread', price: '₹2.45' },
      { name: 'Cinnabon', price: '₹1.5' },
      { name: 'Croissant', price: '₹1.5' },
      { name: 'Brownie Cake', price: '₹3.5' }
    ]},
    { category: 'Sweets', items: [
      { name: 'Khava', price: '₹2.0' },
      { name: 'Mysore Pak', price: '₹2.5' },
      { name: 'Jalebi', price: '₹2.0' }
    ]},
    { category: 'Cool Drinks', items: [
      { name: 'Lemon Juice', price: '₹1.5' },
      { name: 'Orange Juice', price: '₹1.8' }
    ]},
    { category: 'Ice Creams', items: [
      { name: 'Vanilla', price: '₹2.5' },
      { name: 'Chocolate', price: '₹2.7' }
    ]},
    { category: 'Mixtures', items: [
      { name: 'Namkeen', price: '₹3.0' },
      { name: 'Samosa', price: '₹2.0' }
    ]}
  ];

  return (
    <div className="menu-container" data-aos="fade-up">
      {items.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <div className="menu-items">
            {category.items.map((item) => (
              <div key={item.name} className="menu-item">
                <img src="https://via.placeholder.com/150" alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => {
                    setSelectedItems([...selectedItems, item]); // Example of using useState
                    addToCart(item);
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
