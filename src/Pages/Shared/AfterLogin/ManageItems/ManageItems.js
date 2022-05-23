import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadItems from '../../../hooks/LoadItems';
import ManageItem from './ManageItem/ManageItem';
import './ManageItems.css';

const ManageItems = () => {
    const [items, setItems] = LoadItems();
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
                            ></ManageItem>)
                        }
                    </tbody>
                </table>
            </Container>
        </div>
    );
};

export default ManageItems;