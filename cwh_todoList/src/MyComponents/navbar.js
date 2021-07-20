import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    let username = "user_Default";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h2 className="navbar-brand">Sadda Adda</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signin">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signup">Sign up</Link>
                        </li>
                    </ul>
                    <span className="nav-user-section">
                      User: {username}
                    </span>
                </div>
            </div>
        </nav>
    )
}