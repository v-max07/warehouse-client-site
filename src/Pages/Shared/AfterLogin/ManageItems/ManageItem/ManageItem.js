import React from 'react';

const ManageItem = ({ item }) => {
    const { name, _id, price, quantity, description, supplierName, image } = item;

    const handleItemDelete = id =>{
        console.log(id);
    }
    return (
        <tr>
            <td> <img width={40} src={image} alt="" /> </td>
            <td> {name} </td>
            <td> {price} </td>
            <td> {quantity} </td>
            <td> {supplierName} </td>
            <td onClick={()=>handleItemDelete(_id)}>
                <img src='https://i.ibb.co/d22XH2y/icons8-recycle-bin-34.png' alt="" />
            </td>
        </tr>
    );
};

export default ManageItem;