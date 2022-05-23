import React from 'react';
import './ManageItem.css';

const ManageItem = ({ item, handleItemDelete }) => {
    const { name, _id, price, quantity, supplierName, image } = item;

    return (
        <tr>
            <td> <img width={40} src={image} alt="" /> </td>
            <td> {name} </td>
            <td> {price} </td>
            <td> {quantity} </td>
            <td> {supplierName} </td>
            <td onClick={()=>handleItemDelete(_id)} className="deleteBtn">
                <img src='https://i.ibb.co/d22XH2y/icons8-recycle-bin-34.png' alt="" />
            </td>
        </tr>
    );
};

export default ManageItem;