import React from "react";
import "./style.scss";

const Header = () => {
    return (
        <header className="hea_der">
            <div className="container_cust">
                <div className="inner_header">
                    <div className="logo">
                        <a href="https://seedify.fund/">
                            <img src="/static/media/seedify_logo.a5607300.png" alt="" />
                        </a>
                    </div>
                    <div className="navi_gation d-tab ch_mb">
                        <ul className="navbar-nav icon-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://twitter.com/SeedifyFund"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://blog.seedify.fund/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="medium-icon"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://t.me/seedifyfund"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>);
};

export default Header;