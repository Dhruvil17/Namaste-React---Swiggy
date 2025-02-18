import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img className="logo-image" src={LOGO_URL} alt="logo-image" />
            </div>
            <div className="nav-items-container">
                <ul className="nav-items">
                    <li>
                        <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button
                        className="button"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login");
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
