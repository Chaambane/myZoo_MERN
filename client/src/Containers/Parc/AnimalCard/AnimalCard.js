import React from 'react'

const animalCard = (props) => (
    <div className="card text-center">
        <h5 className="card-header">{props.animal}</h5>
        <div className="card-body">
            <h5 className="card-title">{props.description}</h5>
            <p className="card-text">{props.family}</p>
            <div>
                <img src={props.image} alt={props.animal}/>
            </div>
            <p className="card-text">{props.family_description}</p>
            <button className="btn btn-primary">{props.continent}</button>
        </div>
    </div>
);

export default animalCard;