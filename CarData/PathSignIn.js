import React, {Component} from 'react';
import CarDetail from './CarDetail';
import SignIn, { GettingSignedInUser } from '../SignIn/SignIn';
import Register from '../Register/Register';
import SellCar from '../SellCar/SellCar';

class PathSignIn extends Component {
    constructor(){
        super();
        this.state = {
            route: 'home'
        }
    }

    onPathSignInChange = (route) => {
        this.setState({
            route: route
        })
    }

    render(){

        let obj = GettingSignedInUser();

        return(
            <div>
                {
                    this.state.route === 'home'
                    ?
                    <div>                 
                        <CarDetail
                            onPathSignInChange={this.onPathSignInChange}
                        />
                    </div>
                    :
                    <div>
                        {
                        this.state.route === 'sell'
                        ?
                        <div>
                            {
                                //typeof(obj) !== "undefined" ? obj.USERNAME : "Signin"
                                typeof(obj) !== "undefined" 
                                ?
                                <div>
                                    <SellCar
                                        userid={typeof(obj) !== "undefined" ? obj.ID : ""}
                                        username={typeof(obj) !== "undefined" ? obj.USERNAME : ""}
                                        email={typeof(obj) !== "undefined" ? obj.EMAIL : ""}
                                        onPathSignInChange={this.onPathSignInChange}    
                                    />
                                </div>
                                :
                                <div>
                                    <SignIn
                                        onPathSignInChange={this.onPathSignInChange}    
                                    />
                                </div>
                            }
                        </div>
                        :
                        <div>
                            {
                            this.state.route === 'signin' ? 
                            <SignIn
                                onPathSignInChange={this.onPathSignInChange}    
                            />
                            :
                            <Register 
                                onPathSignInChange={this.onPathSignInChange}
                            />
                            }
                        </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default PathSignIn;