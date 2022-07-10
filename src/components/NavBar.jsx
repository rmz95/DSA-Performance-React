import React from "react";
import logo from '../assets/images/dsalogo_00.png';
import CartWidget  from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const categoria = [
        {name: "Productos", route:"categories/Productos", type:"Producto"},
        {name: "Servicios", route:"categories/Servicios", type:"Servicio"}
    ];
    
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-4 fs-5 fw-bold">
                <Link to="/" class="navbar-brand"><img src={logo} alt="dsaperformancelogo" width="250" height="75" /></Link>
                {/* <button class="navbar-toggler ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 pb-3 mb-lg-0">
                            {categoria.map((categories) => <Link key={categories.type} to={categories.route} class="nav-item nav-link">{categories.name}</Link>)}
                    </ul>
                </div>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar