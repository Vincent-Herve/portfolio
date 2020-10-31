import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { pokedex, kanban, m8s } from './img';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="overlay">
            <a className="overlay-link" href="https://radiant-thicket-87615.herokuapp.com/">Démo</a>
            <a className="overlay-link" href="https://github.com/Vincent-Herve/pokedex-firstGen">Code</a>
          </div>
          {pokedex()}
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="overlay">
            <a className="overlay-link" href="https://floating-headland-02810.herokuapp.com/">Démo</a>
            <a className="overlay-link" href="https://github.com/Vincent-Herve/kanban">Code</a>
          </div>
          {kanban()}
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="overlay">
            <a className="overlay-link" href="https://glacial-cliffs-92308.herokuapp.com/">Démo</a>
            <a className="overlay-link" href="https://github.com/Vincent-Herve/m8s-app-backend">Code</a>
          </div>
          {m8s()}
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default ControlledCarousel;