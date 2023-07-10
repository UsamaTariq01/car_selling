import React from 'react';
import './Register.css';

const Register = ({onPathSignInChange}) => {

    return(
        <div className="register-main-container">
            <div className="register-form">
                <h1 className="register-heading">Register</h1>
                <div className="register-input-data">
                    <label>Username</label>
                    <input id='register_username' className="register-input-tag-username" type="text" name="name"/>
                    <br/>
                    <label>Email</label>
                    <input id='register_email' className="register-input-tag-email" type="email" name="email"/>
                    <br/>
                    <label>Password</label>
                    <input id='register_password' className="register-input-tag-password" type="password" name="password"/>
                    <br/>
                    <br/>
                </div>
                <br/>
                <button onClick={() => register_user()} className="register-button">Register</button>
                <p onClick={() => onPathSignInChange('signin')} className="signin-navigation">Back to signin</p>
                </div>
            </div>
    );

    function register_user() {

        console.log('clicked')
        let username = document.getElementById('register_username').value
        let email = document.getElementById('register_email').value
        let password = document.getElementById('register_password').value

        let user = {USERNAME: username, EMAIL:email, PASSWORD:password}
        
        let header = {'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' }
        let post_obj = {method:'POST', body: JSON.stringify(user), headers: header}

        fetch('http://localhost:3001/register', post_obj)
        .then(res => {
            if (res.status === 400) {
                let err = 'user exist, please try another email'
                throw err
            }

            return res.json()
        }).then(data => {
            alert('Successfully registered, please signIn')
            onPathSignInChange('signin')
        }).catch(err => alert(err))
    }
}

export default Register;