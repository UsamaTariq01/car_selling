import React, {Component} from 'react';
import SingleCarData from '../CarsComponent/SingleCarData/SingleCarData';
import Payment from '../Payment/Payment';
import { GettingCar } from '../CarsComponent/Card';
import { GettingSignedInUser } from '../SignIn/SignIn';


class PaymentDetail extends Component {
    constructor() {
        super();
        this.state = {
            payment: 'home'
        }
    }

    onPaymentChange = (payment) => {
        this.setState({payment: payment})
    }
    
    render() {

        let car = GettingCar();
        let obj = GettingSignedInUser();

        return(
            <div>
                {
                    this.state.payment === 'home' 
                    ?
                    <div>
                        <SingleCarData
                            car={car}
                            onRouteCarDetail={this.props.onRouteCarDetail}
                            onPaymentChange={this.onPaymentChange}
                        />
                    </div>
                    :
                    <div>
                        {
                            <Payment 
                                car={car}
                                userid={typeof(obj) !== "undefined" ? obj.ID : ""}
                                username={typeof(obj) !== "undefined" ? obj.USERNAME : ""}
                                email={typeof(obj) !== "undefined" ? obj.EMAIL : ""}
                                onRouteCarDetail={this.props.onRouteCarDetail}
                                onPaymentChange={this.onPaymentChange}
                            />
                        }
                    </div> 
                }
            </div>
        );
    }
}

export default PaymentDetail;