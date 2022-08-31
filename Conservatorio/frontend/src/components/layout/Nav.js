import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from "react";


const Nav = (props) => {
    return (
        <div className="">
            <nav className='menu'>
                {/* <input type="checkbox" id="menu-bar"></input>
                <label className="bi bi-list" for="menu-bar"></label> */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/planes">Planes</Link></li>
                    <li><Link to="/grupos">Grupos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>

    );
}
export default Nav; 