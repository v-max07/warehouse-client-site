import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({ item }) => {
    const { name, _id, price, quantity, description, supplierName, image } = item;
    
    const navigate = useNavigate()
    const handleUpdateItem = id => {
        navigate(`/updateItem/${id}`)
    }
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
                
                <button onClick={()=>handleUpdateItem(_id)} className='updateBtn'>
                    Update Inventory
                </button>
            </div>
        </div>
    );
};

export default InventoryItem;