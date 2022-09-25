import React from 'react';
import './Card.css';

export const Card = ({image, heading, details}) => {
  return (
    <div className="card">
        <img src={image} alt='' />
        <span>{heading}</span>
        <span>{details}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}
