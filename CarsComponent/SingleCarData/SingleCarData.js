import React, {Component} from 'react';
import './SingleCarData.css';

class SingleCarData extends Component {
    render() {

        const car = this.props.car;

        return(
            <div>
                <div className="single-car-data-img-div">
                    <button onClick={() => this.props.onRouteCarDetail('card')} className="single-car-data-back">BACK</button>
                    <img className="single-car-data-img" src={car.CARIMAGELINK} alt=""/>
                </div> 
                
                <div className="single-car-data-details">
                    <button onClick={() => this.props.onPaymentChange('buynow')} className="single-car-data-buycar">BUY NOW</button>
                    <div className="single-car-data-details-innerDiv">
                        <p className="single-car-data-details-name">{car.CARNAME}</p>
                        <p className="single-car-data-details-price">${car.PRICE}</p>
                        <br/>
                        <p className="single-car-data-details-year"><span className="single-car-details-span">Year:</span> {car.YEAR}</p>
                        <p className="single-car-data-details-make"><span className="single-car-details-span">Make:</span> {car.CARMAKE}</p>
                        <p className="single-car-data-details-model"><span className="single-car-details-span">Model:</span> {car.CARMODEL}</p>
                        <p className="single-car-data-details-color"><span className="single-car-details-span">Color:</span> {car.COLOR}</p>
                        <p className="single-car-data-details-seart"><span className="single-car-details-span">Seats</span> {car.SEATS}</p>
                        <br/>
                        <p className="single-car-data-details-topSpeed"><span className="single-car-details-span">Top speed:</span> {car.TOPSPEED}</p>
                        <p className="single-car-data-details-engine"><span className="single-car-details-span">Engine:</span> {car.ENGINE}</p>
                        <p className="single-car-data-details-transmisson"><span className="single-car-details-span">Transmisson:</span> {car.TRANSMISSION}</p>
                        <p className="single-car-data-details-horsePower"><span className="single-car-details-span">Horse Power:</span> {car.HORSEPOWER}</p>  
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCarData;