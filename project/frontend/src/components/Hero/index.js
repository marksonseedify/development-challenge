import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroBackground from "../../assets/images/hero-background.png";
import Card from "../UI/card/";
import Input from "../UI/input/";
import "./style.scss";

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${HeroBackground})` }}>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <Card widthCard={300} heightCard={85} style={{ alignItems: "flex-start" }}>
                            <div className="welcome-text">Welcome</div>
                            <div className="shortner-text">To Our URL Shortener</div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;