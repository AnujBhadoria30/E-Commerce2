/* eslint-disable no-unused-vars */
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Main() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/items')  // Backend API se data fetch karo
        .then((response) => {
          console.log("hit the api", response);
          
          setItems(response.data);  // Data ko state me store karo
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
      }, []);
  
    return (
      <div>
        <h1>Items List</h1>
        {items.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.name} style={{ width: '200px', height: '150px' }} />
          </div>
        ))}
      </div>
    );
  };

export default Main
