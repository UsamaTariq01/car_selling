import React from 'react';
import './SignIn.css';

let getUser;

const SignIn = ({onPathSignInChange}) => {

    function signinTapped() {
        
        let email = document.getElementById("email_sign_in").value
        let password = document.getElementById("password_sign_in").value
        let url = `http://localhost:3001/signin?email=${email}&password=${password}`
        
        fetch(url).then(res => {
            if(res.status === 401) {
                let err = 'Invalid email or password' 
                throw err
            }
            return res.json()
        }).then(user => {

            getUser = user;
            console.log(getUser)
            onPathSignInChange('home')

        }).catch(error => {
            alert(error)    
        })
    }

    const userData = () => {
        return (
            getUser
        )
    }

    getUser = userData();

    return(
        <div>
            <div>
                <br/>
                <p onClick={() => onPathSignInChange('home')} className="payment-back">BACK</p>
            </div>

            <div className="signin-main-container">
                <div className="signin-form">
                    <h1 className="signin-heading">Sign In</h1>
                    <div className="signin-input-data">
                        <label>email</label>
                        <input className="signin-input-tag-email" id="email_sign_in" type="email" name="email"/>
                        <br/>
                        <label>Password</label>
                        <input className="signin-input-tag-password" id="password_sign_in" type="password" name="password"/>
                        <br/>
                        <br/>
                    </div>
                    <br/>
                    <button onClick={() => signinTapped()} className="signin-button">Sign In</button>
                    <br/>
                    <p onClick={() => onPathSignInChange('register')}  className="register-navigation">Register</p>
                </div>
            </div>
        </div>
    );
}

export const GettingSignedInUser = () => {
    return (
        getUser
    )
}

export default SignIn;