import React, {Component} from 'react';
import CarData from './CarData';
import PaymentDetail from './PaymentDetail';

class CarDetail extends Component {
    constructor() {
        super();
        this.state = {
          routeCarDetail: 'card'
        }
      }

      onRouteCarDetail = (routeCarDetail) => {
        this.setState({routeCarDetail: routeCarDetail});
    }

    render(){
        return(
            <div>
                {
                    this.state.routeCarDetail === 'card'
                    ?
                    <div>
                        <CarData
                            onPathSignInChange={this.props.onPathSignInChange}
                            onRouteCarDetail={this.onRouteCarDetail}
                        />
                    </div>
                    :
                    <div>
                        <PaymentDetail onRouteCarDetail={this.onRouteCarDetail}/>
                    </div>
                }
            </div>
        );
    }
}

export default CarDetail;