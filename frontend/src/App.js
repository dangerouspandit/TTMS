import React, { useState } from 'react';
import './index.css';
import logo from './background.jpg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function App() {
    return (
        <>
            <center >
                <h4 style={{ color: '#e75480' }}>Welcome</h4>
                <h2>TTMS Application</h2>
                <h2 className="text-capitalize" style={{ color: 'blue' }}>(time tracking management system)</h2>
            </center>
            <div className="container">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-7 login-left">
                            <img src={logo} width='100%' height='100%' />
                        </div>
                        <div className="col-5 mt-2">
                            <div>
                                <div className="alert alert-danger"></div>
                            </div>
                            <form onSubmit={(e) => login(e)} method="POST" action="/login">
                                <div className="form-group">
                                    <label for="email"><i className="fa fa fa-user" aria-hidden="true" size="3x"></i> User ID:</label>
                                    <input className="form-control" id="email" name="email" placeholder="Enter UserID" required />
                                </div>
                                <div className="form-group">
                                    <label for="password"><i class="fa fa-lock" aria-hidden="true"></i> Password:</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" required />
                                </div>
                                <div>
                                    <a href="/forgetpassword">Forget Password</a>.
                                </div>
                                <button type="login" className="btn btn-primary submit">Log in</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <marquee>
                    <h4 className="text-center">Powered by :: Cospectral Solutions</h4>
                </marquee>
                 Copyright &copy; 2021- All Rights reserved By Cospectral Solutions
          </footer>
        </>
    );
}
function login(e) {
    e.preventDefault();
    let request = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    axios.post('http://localhost:3000/login', request)
        .then(resp => {
            alert(resp.data.message);
            <Redirect to="/Dashboard" />

        })
        .catch(err => {
            console.log(err);
        })
}
export default App;
