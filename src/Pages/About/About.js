import React from 'react';
import './About.css';
import Image from '../../images/me.jpg';

const About = () => {
    return (
        <div className='p-5 vh-100'>
            <img width={150} src={Image} alt="" />
            <h2>S.M. Vusan Debnath</h2>
            <h3>My Goal</h3>
            <p>My goal is to become a full-stack web developer within the next three months so I am willing to work hard and I will.</p>
        </div>
    );
};

export default About;