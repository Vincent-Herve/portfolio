import React from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Icon = () => (
    <IoIosArrowDropdownCircle color="white" size="2.5rem"/>
);

const Home = () => {
    const handleClickLink = () => {
        window.scrollTo({
            top: document.querySelector('.about').offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <div className="home">
            <div className="presentation">
                <h1>Vincent HERVE</h1>
                <h2>Développeur web Full-Stack</h2>
            </div>
            <div className="arrow"><a href="#about" onClick={handleClickLink}><Icon /></a></div>
        </div>
    );
};

export default Home;