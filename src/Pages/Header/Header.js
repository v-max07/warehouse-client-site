import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <div className='bannerDiv d-flex p-5'>
                <div className="left-div">
                    <img src='https://i.ibb.co/MhtWfX9/banner.webp' alt="" />
                </div>
                <div className="right-div">
                    <div className='vitamealsDiv p-5 ms-5'>
                        <h1> <span style={{ color: 'rgb(30, 162, 76)' }}>VITA</span><span style={{ color: 'rgb(250, 117, 48)' }}>MEALS</span></h1>
                        <p>
                            Fruit and vegetables should be an important part of your daily diet. They are naturally good and contain vitamins and minerals that can help to keep you healthy. They can also help protect against some diseases.
                        </p>
                        <p>
                            Most Australians will benefit from eating more fruit and vegetables as part of a well-balanced, regular diet and a healthy, active lifestyle. There are many varieties of fruit and vegetables available and many ways to prepare, cook and serve them.
                        </p>
                        <button className='px-5 py-2 bannerBtn'>
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Header;