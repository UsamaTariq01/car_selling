import React, {Component} from 'react';
import './SellCar.css';

class SellCar extends Component {


    setCarDetail = () => {

        const myHomePagePath = () => {
            return this.props.onPathSignInChange('home')
        }

        const myUserID = () => {
            return this.props.userid
        }

        let phone_number = document.getElementById('phone_number').value 

        let car_name = document.getElementById('car_name').value
        let car_make = document.getElementById('car_make').value
        let car_model = document.getElementById('car_model').value
        let car_price = document.getElementById('car_price').value
        let car_image_link = document.getElementById('car_image_link').value

        let car_year = document.getElementById('car_year').value
        let car_color = document.getElementById('car_color').value
        let car_interior_color = document.getElementById('car_interior_color').value
        let car_seats = document.getElementById('car_seats').value
        let car_stock = document.getElementById('car_stock').value
        

        let car_top_speed = document.getElementById('car_top_speed').value
        let car_engine = document.getElementById('car_engine').value
        let car_transmission = document.getElementById('car_transmission').value
        let car_horse_power = document.getElementById('car_horse_power').value


        if (isEmpty(phone_number, 'Please Enter Your Phone Number')) return
        else if (!(Number.isInteger(Number(phone_number))) || phone_number.length !== 12) {
            alert('Invalid Phone Number')
            return
        }

        else if (isEmpty(car_name, 'Please Enter Car Name')) return
        else if (isEmpty(car_make, 'Please Enter Car Make')) return
        else if (isEmpty(car_model, 'Please Enter Car Model')) return
        else if (isEmpty(car_price, 'Please Enter Car Price')) return
        else if (isEmpty(car_image_link, 'Please Enter Car Image Link')) return

        else if (isEmpty(car_year, 'Please Enter Car Year')) return
        else if (isEmpty(car_color, 'Please Enter Car Color')) return
        else if (isEmpty(car_interior_color, 'Please Enter Car Interior Color')) return
        else if (isEmpty(car_seats, 'Please Enter Car Seats')) return
        else if (isEmpty(car_stock, 'Please Enter Car Stock')) return 
        else if (isEmpty(car_top_speed, 'Please Enter Car Top Speed')) return
        else if (isEmpty(car_engine, 'Please Enter Car Engine')) return
        else if (isEmpty(car_transmission, 'Please Car Transmission')) return
        else if (isEmpty(car_horse_power, 'Please Enter Car Horse Power')) return

        let id = myUserID()
        console.log("The ID is: ", id)
        let user_detail = {user_id: id, phone_number: phone_number}
        let car = {CARNAME: car_name, CARMAKE: car_make, CARMODEL: car_model, PRICE: car_price, CARIMAGELINK: car_image_link,
            YEAR: car_year, COLOR: car_color, INTERIOR: car_interior_color, SEATS: car_seats, TOPSPEED: car_top_speed, 
            ENGINE: car_engine, TRANSMISSION: car_transmission, HORSEPOWER: car_horse_power, STOCK: car_stock
        }

        let seller_car = {user_detail: user_detail, car_detail: car}

        addCarToServer(seller_car)

        function isEmpty(obj, error) {
            if (obj.trim().length === 0) {
                alert(error)
                return true
            }
            return false
        }

        // function validateEmail(email) {
        //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(String(email).toLowerCase());
        // }

        function addCarToServer(car) {
            let header = {'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' }
            let post_obj = {method:'POST', body: JSON.stringify(car), headers: header}

            fetch('http://localhost:3001/addsellercar', post_obj)
            .then(res => {
                if (!res.ok) {
                    let err = 'car is not added'
                    throw err
                }

                return res.json()
            }).then(data => {
                alert(data.message)
                myHomePagePath();
            }).catch(err => alert(err))
        }
    }

    render() {
        return (
            <div>
                <div className="sellCar-split_left">
                        <div>
                            <div>
                                <p onClick={() => this.props.onPathSignInChange('home')} className="sellCar-back">BACK</p>
                                <br/>
                            </div>

                            <h3 className="sellCar-heading-word">Enter Account Details</h3>
                            <div className="sellCar-split_left-div">
                            
                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Name</p>
                                <input className="sellCar-input" value={this.props.username} id="last_name" type="text" readOnly/>
                            </div>
                                
                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Email</p>
                                <input className="sellCar-input" value={this.props.email} id="user_email" type="email" readOnly/>
                            </div>

                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Phone Number</p>
                                <input className="sellCar-input" id="phone_number" type="text"/>
                            </div>
                        </div>

                        {/* CAR DETAIL  */}
                        <hr className="sellCar-line"/>
                        <br/>

                        <h3 className="sellCar-heading-word">Car Detail</h3>

                        <div className="sellCar-split_left-div">
                                
                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Name</p>
                                <input className="sellCar-input" id="car_name" type="text"/>
                            </div>
                            
                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Make</p>
                                <input className="sellCar-input" id="car_make" type="text"/>
                            </div>
                                
                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Model</p>
                                <input className="sellCar-input" id="car_model"type="text"/>
                            </div>

                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Price</p>
                                <input className="sellCar-input" id="car_price" type="text"/>
                            </div>
                        </div>

                        <div className="sellCar-split_left-main-div-bottom">
                            <div className="sellCar-split_left-div-bottom">
                                <div className="sellCar-split_left-div-child">
                                    <p className="sellCar-para">Car Image Link</p>
                                    <input className="sellCar-input-down" id="car_image_link" type="text"/>
                                </div>                                  
                            </div>
                        </div>

                        <div className="sellCar-split_left-div">
                                
                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Year</p>
                                <input className="sellCar-input" id="car_year" type="text"/>
                            </div>

                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Color</p>
                                <input className="sellCar-input" id="car_color" type="text"/>
                            </div>

                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Interior Color</p>
                                <input className="sellCar-input" id="car_interior_color" type="text"/>
                            </div>
                            
                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Seats</p>
                                <input className="sellCar-input" id="car_seats" type="text"/>
                            </div>

                            <div className="sellCar-split_left-div-child">
                                <p className="sellCar-para">Stock</p>
                                <input className="sellCar-input" id="car_stock" type="text"/>
                            </div>

                        </div>

                        <div className="sellCar-split_left-main-div-bottom">
                            <div className="sellCar-split_left-div-bottom">
                                <div className="sellCar-split_left-div-child">
                                    <p className="sellCar-para">Top Speed</p>
                                    <input className="sellCar-input-bottom" id="car_top_speed" type="text"/>
                                </div>

                                <div className="sellCar-split_left-div-child">
                                    <p className="sellCar-para">Engine</p>
                                    <input className="sellCar-input-bottom" id="car_engine" type="text"/>
                                </div>

                                <div className="sellCar-split_left-div-child">
                                    <p className="sellCar-para">Transimisson</p>
                                    <input className="sellCar-input-bottom" id="car_transmission" type="text"/>
                                </div>

                                <div className="sellCar-split_left-div-child">
                                    <p className="sellCar-para">Horse Power</p>
                                    <input className="sellCar-input-bottom" id="car_horse_power" type="text"/>
                                </div>

                                <div className="sellCar-split_left-div-child">
                                    <button onClick={() => this.setCarDetail()} className="sellCar-para">Submit</button>
                                </div>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SellCar;