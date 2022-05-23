import React from 'react';
import './InventoryItem.css';

const InventoryItem = ({ item }) => {
    const { name, _id, price, quantity, description, supplierName, image} = item;
    return (
        <div className='itmeDiv'>
            <div className='w-100'>
                <img height={400} className='w-100' src={image} alt="" />
            </div>
            <div>
                <h4>Name: {name} </h4>
                <p className='fw-normal'> Description: {description} </p>
                <p className='fw-bold'> Quantity: {quantity} </p>
                <p className='fw-bold'> Supplier Name: {supplierName} </p>
                <p className='fw-bold'> Price: {price} </p>
                <button className='updateBtn'>
                    Update Inventory
                </button>
            </div>
        </div>
    );
};

export default InventoryItem;