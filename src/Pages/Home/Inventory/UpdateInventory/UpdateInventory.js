import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateInventory.css';

const UpdateInventory = () => {
    const [item, setItems] = useState();
    const { item_id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${item_id}`)
            .then(res => res.json())
            .then(data => setItems(data))
    
    }, [item_id]);
    if (item) {
        console.log(item.name)
    }
    return (
        <div>
            {
                item && <Container>
                    <div className='updateDivContainer'>
                        <div className='imageDivUpdate'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='infoDivUpdate'>
                            <div>
                                <h2 style={{ color: '#1EA24C'}}>{item.name} </h2>
                                <p className='fw-normal'>{item.description} </p>
                                <p className='fw-bold'> Quantity: {item.quantity} </p>
                                <p className='fw-bold'> Supplier Name: {item.supplierName} </p>
                                <p className='fw-bold'> Price: {item.price} </p>
                                <button className='deliveredBtn'>Delivered</button>
                            </div>
                            <div className='inputUpdateDiv mt-5'>
                                <input className='d-block w-100 p-3' placeholder='Add new quantity' type="text" name="quantity" id="" />
                                <button className='w-100 mt-3 p-2 restockBtn'>Restock Inventory</button>
                            </div>
                        </div>
                    </div>
                </Container>
            }
        </div>
    );
};

export default UpdateInventory;