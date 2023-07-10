import React, {Component} from 'react';
import './Model.css';
import CardList from '../CardList/CardList';

class Model extends Component {
    render() {
        return(
            <div>
                <div>
                    <div className="model-logo-image-div">
                        <img className="model-logo-image" src={require('../Image/lamborghini_logo.png')} alt=""/>
                    </div>

                    <div className="model-x-div">
                        <p onClick={() => this.props.onCarModelDataChange('home')} className="model-x">X</p>
                    </div>
                    <p className="model-p-choose">CHOOSE YOUR LAMBORGHINI</p>
                </div>

                <div className="model-card-main-container">
                    <CardList 
                        onRouteCarDetail={this.props.onRouteCarDetail}
                    />
                </div>
            </div>
        );
    }
}

export default Model;