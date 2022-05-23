import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadItems from '../../../hooks/LoadItems';
import ManageItem from './ManageItem/ManageItem';
import './ManageItems.css';

const ManageItems = () => {
    const [items, setItems] = LoadItems();

    //for delete a single item
    const handleItemDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete!")
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
            
        }
    }
    return (
        <div>
            <div></div>
            <Container className='my-5 ms-auto'>
                <Link to='/addItems'><button className='addItemBtn'>Add Items <span>+</span></button></Link>
            </Container>
            <Container>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <ManageItem
                                key={item._id}
                                item={item}
                                handleItemDelete={handleItemDelete}
                            ></ManageItem>)
                        }
                    </tbody>
                </table>
            </Container>
        </div>
    );
};

export default ManageItems;