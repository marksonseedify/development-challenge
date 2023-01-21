import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../components/UI/card';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';
import Hero from '../../components/Hero';
import './style.scss';

const Home = () => {

    const handleURLSubmit = () => {
        console.log('URL Submitted');
    }

    const handleURLCopy = () => {
        console.log('URL Submitted');
    }

    return (
        <main>
            <Header />
            <section>
                <Hero />
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Card widthCard={520} heightCard={225}>
                                <div className="title">Shorten URL</div>
                                <Input placeholder="Type a URL to shorten..." onClick={handleURLSubmit} />
                            </Card>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Card widthCard={380} heightCard={225}>
                                <div className="title">Shorten URL</div>
                                <div className="count">7/10</div>
                            </Card>
                        </Col>
                        <Col xs={12} lg={2}>
                            <Row>
                                <Card widthCard={212} heightCard={100}>
                                    This is a mock app for an exercise
                                </Card>
                            </Row>
                            <Row>
                                <Card widthCard={212} heightCard={100}>
                                    It won’t be used in production
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div>
                        <h3>URLs Shortened</h3>
                        <Card widthCard={1115} heightCard={110}>
                            <div className="url-shortened">
                                <div>https://sd.fy/xxxxx</div>
                                <div>Full Link: https://somelongwebsite.com/slashsomething</div>
                                <div>Full Link: https://somelongwebsite.com/slashsomething</div>
                                <Button>Copy</Button>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>
        </main>
    );
}

export default Home;
