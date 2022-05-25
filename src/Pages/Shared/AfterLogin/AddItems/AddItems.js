import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './AddItems.css';

const AddItems = () => {

    const handleAddNewItem = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const supplierName = e.target.supplierName.value;
        const image = e.target.image.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const category = e.target.category.value;

        const newItem = { name, supplierName, image, price, description, category };

        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                e.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <Container>
            <h2 style={{ color:'rgb(250, 117, 48)'}} className='text-center mt-3 text-decoration-underline'>Add a new Item</h2>
            <div className='addItemContainer'>
                <Form onSubmit={handleAddNewItem}>
                    <Row>
                        <Col>
                            <Form.Control name="name" placeholder="Name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name="supplierName" placeholder="Supplier Name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name="image" placeholder="Image Url" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name="price" placeholder="Price" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <textarea className='inputTextArea' name="description" placeholder="Description" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name="category" placeholder="Category" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button className='addItemButton'>Add Item</button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
};

export default AddItems;