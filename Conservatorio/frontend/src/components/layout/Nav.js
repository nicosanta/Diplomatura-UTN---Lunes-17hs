import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from "react";


const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/planes">Planes</Link></li>
                    <li><Link to="/grupos">Grupos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>                    
                </ul>
            </div>
        </nav>
        
    );
}
export default Nav; 