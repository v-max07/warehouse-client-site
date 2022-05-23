import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
        
    },[])
    return (
        <div>
            <div>
                <h1 style={{ color: 'rgb(250, 117, 48)' }} className='text-center fw-bold text-decoration-underline'>Inventory Items</h1>
            </div>
            <Container>
                <div className='itemsContainer'>
                    {
                        items.map(item => <InventoryItem
                            key={item._id} item={item}
                        ></InventoryItem>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Inventory;