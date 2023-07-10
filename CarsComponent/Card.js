import React from 'react';
import './Card.css';

let getCar;

const Card = ({car, onRouteCarDetail}) => {
    
    function getDate() {
        getCar = car;
        console.log(car)
        onRouteCarDetail('notcard')
    }

    const carData = () => {
        return (
            getCar
        )
    }

    getCar = carData();

    return (
        <div className="card-container-main">
            {/* <div onClick={() => onRouteCarDetail('notcard')} className="card-container"> */}
            <div onClick={() => getDate()} className="card-container">
                <img className="card-image" src={car.CARIMAGELINK} alt=""/>
                <div className="card-car-info">
                    <p className="card-make">{car.CARMAKE}</p>
                    <p className="card-name">{car.CARNAME}</p>
                    <p className="card-price">${car.PRICE}</p>
                </div>
            </div>
        </div>
    )
}

export const GettingCar = () => {
    return (
        getCar
    )
}

export default Card;