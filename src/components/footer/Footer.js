import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="footer-box">
                    <a href="#" className="logo">Cinemax</a>
                    <div className="social">
                        <a href="#"><i class='bx bxl-youtube'></i></a>
                        <a href="#"><i class='bx bxl-instagram'></i></a>
                        <a href="#"><i class='bx bxl-facebook-square'></i></a>
                        <a href="#"><i class='bx bxl-vk'></i></a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3>Page</h3>
                    <a href="shop.html">Watch</a>
                    <a href="shop.html">ContactUs</a>
                </div>
                <div className="footer-box">
                    <h3>Legal</h3>
                    <a href="#">Privacy</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <div className="footer-box">
                    <h3>Contact</h3>
                    <p>Kazahstan, Astana, Turan</p>
                    <p>+7(777)-77-77</p>
                </div>
            </div>
            <div className="copyright">
                <p>&#169; CarpoolVenom All Right Reserved</p>
            </div>
        </div>
    );
};
export default Footer;