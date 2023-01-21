import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Header />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
