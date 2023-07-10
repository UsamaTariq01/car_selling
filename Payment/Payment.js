import React, {Component} from 'react';
import './Payment.css';

class Payment extends Component {

    setUserDetail = (car) => {
        
        const myPath = () => {
            return this.props.onRouteCarDetail('card');
        }

        let buyer_name = document.getElementById('buyer_name').value
        let buyer_email = document.getElementById('buyer_email').value
        let buyer_phone_number = document.getElementById('buyer_phone_number').value

        let name_on_card = document.getElementById('name_on_card').value
        let credit_card_number = document.getElementById('credit_card_number').value
        
        let expiration_date = document.getElementById('expiration_date').value
        let cvv = document.getElementById('cvv').value
        let billing_zip_code = document.getElementById('billing_zip_code').value

        if (isEmpty(buyer_name, "Please Enter Your Name")) return
        else if (isEmpty(buyer_email, "Please  Enter Your Email")) return
        else if (isEmpty(buyer_phone_number, "Please Enter Your Phone Number")) return
        
        else if (isEmpty(name_on_card, "Please Enter Your Name on Card")) return
        else if (isEmpty(credit_card_number, "Please Enter Your Credit Card Number")) return
        else if (isEmpty(expiration_date, "Please Enter Your Credit Card Expiration Date")) return
        else if (isEmpty(cvv, "Please Enter Your CVV")) return
        else if (isEmpty(billing_zip_code, "Please Enter Your Billing Zip Code")) return

        function isEmpty(obj, error) {
            if (obj.trim().length === 0) {
                alert(error)
                return true
            }
            return false
        }

        let user_detail = {user_id: this.state.user.id}
        
        let buyer = {CARID: car.CARID, BUYERNAME: buyer_name, BUYEREMAIL: buyer_email, PHONENUMBER: buyer_phone_number, NAMEONCARD: name_on_card, CREDITCARD_NUMBER: credit_card_number, BILLINGZIPCODE: billing_zip_code, CVV: cvv, EXPIRATIONDATE: expiration_date}
        
        let buyer_detail = {"user_detail": user_detail, "buyer_detail": buyer}
        
        buyCar()

        function buyCar() {
            let header = {'Accept': 'application/json, text/plain */*', 'Content-Type': 'application/json'}
            let post_obj = {method: 'POST', body: JSON.stringify(buyer_detail), headers: header}

            fetch('http://localhost:3001/buycar', post_obj)
            .then(res => {
                if (!res.ok) {
                    throw res.json()
                }
                return res.json()

            }).then(data => {
                console.log("data.message: ", data.message)
                alert(data.message)
                myPath();
            }).catch(err => alert(err))
        }
    }

    render(){

        const car = this.props.car;

        return (
          <div className="payment-main-container">
                <div>
                    <div className="payment-split_left">
                        <div>
                            <div>
                                <p onClick={() => this.props.onPaymentChange('home')} className="payment-back">BACK</p>
                                <br/>
                            </div>

                            <h3 className="payment-heading-word">Enter Account Details</h3>
                            <div className="payment-split_left-div">
                                
                                <div className="payment-split_left-div-child">
                                    <p className="payment-para">Name</p>
                                    <input id="buyer_name" value={this.props.username} className="payment-input" type="text"/>
                                </div>
                                    
                                <div className="payment-split_left-div-child">
                                    <p className="payment-para">Email</p>
                                    <input value={this.props.email} id="buyer_email" className="payment-input" type="text"/>
                                </div>

                                <div className="payment-split_left-div-child">
                                    <p className="payment-para">Phone Number</p>
                                    <input id="buyer_phone_number" className="payment-input" type="text"/>
                                </div>
                            </div> 

                            <hr className="payment-line"/>
                            <br/>
                            <h3 className="payment-heading-word">Payment</h3>

                            <div className="payment-split_left-main-div-bottom">
                                <div className="payment-split_left-div-bottom">
                                    <div className="payment-split_left-div-child">
                                        <p className="payment-para">Name on Card</p>
                                        <input id="name_on_card" className="payment-input-down" type="text"/>
                                    </div>

                                    <div className="payment-split_left-div-child">
                                        <p className="payment-para">Credit Card Number</p>
                                        <input id="credit_card_number" className="payment-input-down" type="text"/>
                                    </div>                                    
                                </div>
                            </div>

                            <div className="payment-split_left-main-div-bottom">
                                <div className="payment-split_left-div-bottom">
                                    <div className="payment-split_left-div-child">
                                        <p className="payment-para">Expiration Date</p>
                                        <input id="expiration_date" className="payment-input-bottom" type="text"/>
                                    </div>

                                    <div className="payment-split_left-div-child">
                                        <p className="payment-para">CVV</p>
                                        <input id="cvv" className="payment-input-bottom" type="text"/>
                                    </div>

                                    <div className="payment-split_left-div-child">
                                        <p className="payment-para">Billing Zip Code</p>
                                        <input id="billing_zip_code" className="payment-input-bottom" type="text"/>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="payment-split_right">
                        <div className="payment-split_right-image-div">
                            <img className="payment-split_right-image" src={car.CARIMAGELINK} alt=""/>
                        </div>

                        <div className="payment-split_right-car-make-div">
                            <p className="payment-split_right-car-make">Your {car.CARMODEL}</p>
                        </div>

                        <h3 className="payment-split_right-car-summary">Summary</h3>
                        <hr className="payment-line"/>
                        <br/>

                        <div className="payment-split_right-car-detail">
                            <p>${car.PRICE}</p>
                            <p>{car.CARNAME} Performance {car.ENGINE}</p>
                            <p>{car.COLOR} Paint</p>
                            <p>{car.INTERIOR} Interior</p>
                            <p>{car.SEATS} Seat Interior</p>
                        </div>

                        <div>
                            <button 
                                onClick={() => this.setUserDetail(car)}
                                className="payment-buy-button">BUY
                            </button>
                        </div>
                    </div>
                </div>
          </div>  
        );
    }
}

export default Payment;