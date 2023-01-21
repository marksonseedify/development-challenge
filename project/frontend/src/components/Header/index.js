import React from "react";
import { SeedifyLogo, MediumIcon, TwitterIcon, TelegramIcon, GloboIcon } from "../../assets/images/";
import { Navbar, Nav, Dropdown, DropdownButton, Image } from "react-bootstrap";
import "./style.scss";

const Header = () => {
    const LanguageSelector = () => {
        return <>
            <div className="language-selector">
            <span>EN</span>
            <Image src={GloboIcon} alt="Select language" />
            </div>
        </>
    }
    return (
        <Navbar className="hea_der">
            <Navbar.Brand href="https://seedify.fund/">
                <Image src={SeedifyLogo} alt="" className="logo" />
            </Navbar.Brand>
            <Nav className="ml-auto navi_gation">
                <DropdownButton
                    id="language-dropdown"
                    variant="transparent"
                    title={<LanguageSelector />}
                >
                    <Dropdown.Item eventKey="1">EN</Dropdown.Item>
                    <Dropdown.Item eventKey="2">ES</Dropdown.Item>
                    <Dropdown.Item eventKey="3">PT</Dropdown.Item>
                </DropdownButton>
                <Nav.Link href="https://twitter.com/SeedifyFund" target="_blank" rel="noopener noreferrer">
                    <Image src={TwitterIcon} alt="Twitter" className="social-icon" />
                </Nav.Link>
                <Nav.Link href="https://blog.seedify.fund/" target="_blank" rel="noopener noreferrer">
                    <Image src={MediumIcon} alt="Medium" className="social-icon" />
                </Nav.Link>
                <Nav.Link href="https://t.me/seedifyfund" target="_blank" rel="noopener noreferrer">
                    <Image src={TelegramIcon} alt="Telegram" className="social-icon" />
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
