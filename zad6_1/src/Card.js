import React from 'react';

function Card(props) {
    const { name, imageUrl, lifespan, occupation, country } = props;

    return (
        <div className="Card">
            <h2>{name}</h2>
            <img src={imageUrl} alt={name} />
            <p>{lifespan}</p>
            <p>{occupation}</p>
            <p>{country}</p>
        </div>
    );
}

export default Card;
