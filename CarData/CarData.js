import React, {Component} from 'react';
import Car from '../Car/Car';
import CarModelData from './CarModelData';

class CarData extends Component {
    constructor() {
        super();
        this.state = {
          cardataview: 'home'
        }
      }
      
      onCarDataChange = (cardataview) => {
        this.setState({cardataview: cardataview});
      }

    render() {
        return(
            <div>
                {
                    this.state.cardataview === 'home'
                    ?
                    <div>
                        <Car
                            onPathSignInChange={this.props.onPathSignInChange}
                            onCarDataChange={this.onCarDataChange}
                            onRouteCarDetail={this.props.onRouteCarDetail}
                        />
                    </div>
                    :
                    <div>
                        {/* <CarsComponent onCarDataChange={this.onCarDataChange}/> */}
                        <CarModelData
                            name={this.props.c_name}
                            onRouteCarDetail={this.props.onRouteCarDetail} 
                            onCarDataChange={this.onCarDataChange}/>
                    </div>
                }
            </div>
        );
    }
}

export default CarData;