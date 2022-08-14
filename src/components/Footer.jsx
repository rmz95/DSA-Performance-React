import React from 'react';
import instagram from '../assets/icons/instagram.png';
import whatsapp from '../assets/icons/whatsapp.png';
import facebook from '../assets/icons/facebook.png';

const Footer = () => {

    return(
        <footer>
            <div className="container px-4 px-lg-5 pt-4">
                <p className="m-0 text-center footer__by2 fw-bold">Copyright &copy; DSA PEFORMANCE - 2022</p>
            </div>
            <div className="container px-4 px-lg-5">
                <div className="m-0 text-white nav-link d-flex justify-content-center">
                    <img src={whatsapp} alt="whatsapp16px" className="pb-1"/><span className="mx-2">11-3685-7276</span>
                </div>
                <div className="m-0 text-white nav-link d-flex justify-content-center">
                    <a href="https://www.facebook.com/DSA-Performance-Suspension-Detailing-768958393135304" className="text-decoration-none"><img src={facebook} alt="facebook16px" className="pb-1" /><span className="mx-2">DSA PERFORMANCE</span></a>
                </div>
                <div className="m-0 text-white nav-link d-flex justify-content-center">
                    <a href="https://www.instagram.com/aledsaok/" className="text-decoration-none"><img src={instagram} alt="instagram16px"/><span className="mx-2">aledsaok</span></a>
                </div>
                <div className="m-0 py-1 text-center">
                    <p className="fst-italic footer__by">by Luis Ramirez</p>
                </div>
            </div>
        </footer>
        )
}

export default Footer