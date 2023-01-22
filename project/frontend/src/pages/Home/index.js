import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Card from '../../components/UI/card';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { shortenUrl } from '../../services/urlService';
import { Graph, InfoIcon, HrefIcon, LeftTitleDeco, RightTitleDeco } from '../../assets/images';
import './style.scss';

const Home = () => {

    const [url, setUrl] = useState('');

    const handleURLSubmit = async () => {
        console.log('handleURLSubmit function called');
        try {
            const shortenedUrl = await shortenUrl(url);
            setUrl(shortenedUrl);
        } catch (error) {
            console.log(error);
        }
    };


    const handleValue = (e) => {
        console.log(e)
    }

    const handleURLChange = (e) => {
        console.log(e)
        e.preventDefault();
        setUrl(e.target.value);
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
                    <Row className="d-flex align-items-center mt-5">
                        <Col xs={12} lg={6}>
                            <Card widthCard={500} heightCard={225}>
                                <div className="content">
                                    <div className="title">Shorten URL</div>
                                    < hr />
                                    <div className="content-form">
                                        <Input
                                            placeholder="Type a URL to shorten..."
                                        />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Card widthCard={330} heightCard={225}>
                                <div className="content">
                                    <div className="title">URLs Shortened <Image src={InfoIcon} color="gray" /></div>
                                    < hr />
                                    <div className="content-percent">
                                        <Image src={Graph} />
                                        <div className="percent-title">7/10</div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} lg={2}>
                            <Row>
                                <Card widthCard={212} heightCard={100}>
                                    <div className="warning-info">
                                        This is a mock app for an exercise
                                    </div>
                                </Card>
                            </Row>
                            <Row className="mt-4">
                                <Card widthCard={212} heightCard={100}>
                                    <div className="warning-info">
                                        It won’t be used in production
                                    </div>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <div className="url-list-content">
                        <h3>URLs Shortened</h3>
                        <Card widthCard={"100%"} heightCard={110}>
                            <div className="url-shortened">
                                <div className="shortner-title">https://sd.fy/xxxxx</div>

                                <div className="original-title">
                                    <Image src={HrefIcon} />
                                    Full Link: https://somelongwebsite.com/slashsomething
                                </div>
                                <Button handleEvent={handleURLCopy} >Copy</Button>
                            </div>
                        </Card>
                    </div>
                    <div className="load-more">
                        <Image src={LeftTitleDeco} />
                        Show more
                        <Image src={RightTitleDeco} />
                    </div>
                </Container>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    );
}

export default Home;
