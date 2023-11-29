import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => (

      <footer>
            <div className="copyright">
                <div className="flex align-center justify-center text-white fw-3 fs-14">
                    <Link to="/" className="text-uppercase">Privacy policy</Link>
                    <div className="vert-line"></div>
                    <Link to="/" className="text-uppercase">Term of service</Link>
                    <div className="vert-line"></div>
                    <Link to="/" className="text-uppercase">About shop</Link>
                </div>
                <span className="text-white copyright-text text-manrope fs-14 fw-3">
                    &copy: 2023 shop. All Rights Reserved.
                </span>
            </div>
  </footer>
);

export default Footer;
