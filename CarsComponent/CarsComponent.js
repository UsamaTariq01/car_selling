import React, {Component} from 'react';
import './CarsComponent.css';

class CarsComponent extends Component {
    render() {

        var divStyle = {
            'backgroundImage': `${this.props.color}`
        };

        return(
            <div>
                <div className="split_left">
                        <div className="side-left">
                            <div>
                                <p onClick={() => this.props.onCarDataChange('home')} className="back">BACK</p>
                            </div>
                            <br/>
                            <div onClick={() => this.props.onCarModelDataChange('model')} style={divStyle} className="more-cars">
                                <p className="more-car-text">DISCOVER MODEL
                                <br/>
                                    <li className="more-car-text-arrow"><span className="arrow arrow-bottom"></span></li> 
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="logo-image" alt="lamborghini" src={require(`../Image/${this.props.logo}`)} />
                            </div>
    
                            <div className="car-name">
                                <h1 className="car-name-heading">{this.props.name}</h1>
                            </div>
                        </div>
                        <div>
                            <img className="car-image" alt="lamborghini" src={require(`../Image/${this.props.image}`)} />
                        </div>
                </div>
    
                <div style={divStyle} className="split_right">
                    <div className="centered-car-desc">
                        <b className="para-car-desc">The Lamborghini Huracán is a sports car manufactured by Italian automotive manufacturer Lamborghini replacing the previous V10 offering, the Gallardo. The Huracán made its worldwide debut at the 2014 Geneva Auto Show, and was released in the market in the second quarter of 2014.</b>  
                    </div>
                </div>
            </div>
        );
    }
}

export default CarsComponent;