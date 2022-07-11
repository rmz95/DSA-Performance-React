import React from "react";
import logo from '../assets/images/dsalogo_00.png';
import CartWidget  from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const categoria = [
        {name: "Productos", route:"/categories/Producto", id:"Producto"},
        {name: "Servicios", route:"/categories/Servicio", id:"Servicio"}
    ];
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-4 fs-5 fw-bold">
                <Link to="/" className="navbar-brand"><img src={logo} alt="dsaperformancelogo" width="250" height="75" /></Link>
                {/* <button class="navbar-toggler ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 pb-3 mb-lg-0">
                            {categoria.map((categories) => (<NavLink key={categories.id} to={categories.route} className="nav-item nav-link">{categories.name}</NavLink>))}
                    </ul>
                </div>
                <NavLink to="/Cart">
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar