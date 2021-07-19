import React from 'react'

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container bg-grid">

                <div className="footer__box">
                    <h3 className="footer__title">Aldy</h3>
                    <p className="footer__description">New collection of shoes 2020.</p>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#featured" className="footer__link">Featured</a></li>
                        <li><a href="#women" className="footer__link">Women</a></li>
                        <li><a href="#new" className="footer__link">New Collection</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">SUPPORT</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Product Help</a></li>
                        <li><a href="#" className="footer__link">Customer Care</a></li>
                        <li><a href="#" className="footer__link">Athoriized service</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <a href="#" className="footer__social"> <i className="bx bxl-facebook"></i></a>
                    <a href="#" className="footer__social"> <i className="bx bxl-instagram"></i></a>
                    <a href="#" className="footer__social"> <i className="bx bxl-twitter"></i></a>
                    <a href="#" className="footer__social"> <i className="bx bxl-google"></i></a>
                </div>
            </div>

            <p className="footer__copy">&#169; 2020 Alcode, All right reserved</p>
        </footer>
    )
}

export default Footer
