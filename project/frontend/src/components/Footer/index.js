import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FacebookIconFooter, LogoFooter, SendIcon, DiscordIconFooter, TwitterIconFooter, TelegramIconFooter } from '../../assets/images';
import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="footer-logo">
                            <Image src={LogoFooter} alt="Seedify logo" className="footer-logo-image" />
                            <p>
                                Seedify.fund is a Blockchain Gaming focused Incubator and Launchpad. Through staking $SFUND, become eligible to buy game tokens before everyone else, and have an edge in the play to earn era!
                            </p>
                        </div>
                    </Col>
                    <Col md={4} className="mt-5">
                        <h5 >Company</h5>
                        <ListGroup className="list-footer-links">
                            <div className="list-footer-column">
                                <ListGroup.Item className="list-footer-links-items">Seedify Home Page</ListGroup.Item>
                                <ListGroup.Item className="list-footer-links-items">About Us</ListGroup.Item>
                            </div>
                            <div className="list-footer-column">
                                <ListGroup.Item className="list-footer-links-items">Our Blog</ListGroup.Item>
                                <ListGroup.Item className="list-footer-links-items">Contact Us</ListGroup.Item>
                            </div>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <div className="update-section">
                            <h5>Never Miss Updates</h5>
                            <div className="form-group">
                                <div className="mt-3">
                                    <div className='input-container-news'>
                                        <input className='input-field' placeholder={"Enter your mail address"} />
                                        <Image src={SendIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h5>Follow us on</h5>
                                <div className="footer-social-tab">
                                    <a href="https://www.facebook.com/seedifyfund" target="_blank" rel="noopener noreferrer">
                                        <Image src={FacebookIconFooter} />
                                    </a>
                                    <a href="https://discord.gg/seedifyfund" target="_blank" rel="noopener noreferrer">
                                        <Image src={DiscordIconFooter} />
                                    </a>
                                    <a href="https://twitter.com/SeedifyFund" target="_blank" rel="noopener noreferrer">
                                        <Image src={TwitterIconFooter} />
                                    </a>
                                    <a href="https://t.me/seedifyfund" target="_blank" rel="noopener noreferrer">
                                        <Image src={TelegramIconFooter} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;