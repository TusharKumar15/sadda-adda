import React from 'react';
import './signin.css';

export default function Signin() {
    return (
        <div className="page">
            <div className="signin_section">
                <div className="signin_head">
                    <h3>Welcome Back to Sadda Adda</h3>
                </div>
                <div className="signin_body">
                    <form>
                        <label className="label">Enter Username: </label><br/>
                        <input className="blank" type="text" placeholder="Ex: user_Default"></input><br/>
                        <label className="label">Enter Password: </label><br/>
                        <input className="blank" type="text" placeholder="Ex: >q1Pp0Q1<"></input><br/>
                        <button className="submit_btn btn btn-primary">Sign-In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}