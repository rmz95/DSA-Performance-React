import React from "react";
import logo from '../assets/images/dsalogo_00.png';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-4 fs-5 fw-bold">
                <a class="navbar-brand" href="./index.html"><img src={logo} alt="dsaperformancelogo" width="250" height="75" /></a>
                <button class="navbar-toggler ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="./index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="./pages/productos.html">Productos</a></li>
                        <li class="nav-item"><a class="nav-link" href="./pages/imagenes.html">Imagenes</a></li>
                        <li class="nav-item"><a class="nav-link" href="./pages/nosotros.html">Nosotros</a></li>
                        <li class="nav-item"><a class="nav-link" href="./pages/contacto.html">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar