import React, { useCallback, useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Card from '../../components/UI/card';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { shortenUrl, getAllElements } from '../../services/urlService';
import { backendApi } from '../../services/url';
import { Graph, InfoIcon, HrefIcon, LeftTitleDeco, RightTitleDeco } from '../../assets/images';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import copy from 'clipboard-copy';
import './style.scss';

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [urls, setUrls] = useState([]);
    const [page, setPage] = useState(0);
    const elementsPerPage = 5;
    const copyButtonRef = useRef(null);

    const handleShowMore = useCallback(async () => {
        setPage(page + 1);
        try {
            const newUrls = await getAllElements(page + 1);
            setUrls([...urls, ...newUrls]);
        } catch (error) {
            console.log(error);
        }
    }, [page, urls, setUrls]);

    const onSubmit = useCallback(async (data) => {
        try {
            await shortenUrl(data.originalUrl);
            toast.success("Shortened URL created successfully!");
        } catch (error) {
            toast.error("An error occurred while trying to shorten the URL, please try again.");
            console.log(error);
        }
    }, []);

    useEffect(() => {
        async function fetchUrls() {
            try {
                const urls = await getAllElements();
                setUrls(urls);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUrls();
    }, [urls]);

    const getElementValue = (e) => {
        e.preventDefault();
        try {
            copy(copyButtonRef.current.href)
        } catch (er) {
            console.log(er)
        }
    };

    const currentUrls = [...urls.slice(0, page * elementsPerPage), ...urls.slice(page * elementsPerPage, (page + 1) * elementsPerPage)];

    return (
        <main>
            <ToastContainer />
            <Header />
            <section>
                <Hero />
                <Container>
                    <Row className="d-flex align-items-center mt-5">
                        <Col xs={12} lg={6}>
                            <Card widthCard={500} heightCard={225}>
                                <div className="content">
                                    <div className="title">Shorten URL</div>
                                    <hr />
                                    <Form onSubmit={handleSubmit(onSubmit)} className="content-form">
                                        <Form.Group className="mb-3" controlId="formShortenURL">
                                            <div className='input-container'>
                                                <Form.Control
                                                    {...register("originalUrl", { required: true })}
                                                    className='input-field'
                                                    type="text"
                                                    placeholder="Type a URL to shorten..." />
                                                <button className='button' type='submit'>Shorten</button>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Card widthCard={330} heightCard={225}>
                                <div className="content d-flex flex-column">
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
                        <div className="text-center">{currentUrls.length === 0 && <div className="no-urls">No URLs shortened yet</div>}</div>
                        {currentUrls.map(({ originalUrl, shortId }) => (
                            <form key={shortId} className="mt-4">
                                <Card widthCard={"100%"} heightCard={110}>
                                    <div className="url-shortened d-flex align-items-center">
                                        <>
                                            <div className="shortner-title">
                                                <a id="_copyText" href={backendApi + shortId}
                                                    target="_blank" rel="noopener noreferrer"
                                                    ref={copyButtonRef}>
                                                    {backendApi + shortId}
                                                </a>
                                            </div>
                                            <div className="original-title">
                                                <Image src={HrefIcon} />
                                                <a href={originalUrl} target="_blank" rel="noopener noreferrer">
                                                    {originalUrl.length > 50
                                                        ? originalUrl.substring(0, 48) + '...' + originalUrl.substring(originalUrl.length - 5)
                                                        : originalUrl
                                                    }
                                                </a>
                                            </div>
                                            <Button onClick={getElementValue} className="button">Copy</Button>
                                        </>
                                    </div>
                                </Card>
                            </form>
                        ))}
                        {urls.length > 5 && <div className="load-more d-flex align-items-center justify-content-center mt-4">
                            <Image src={LeftTitleDeco} />
                            <div onClick={handleShowMore}>Show more</div>
                            <Image src={RightTitleDeco} />
                        </div>}
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
