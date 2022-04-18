import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "../../UI/MyCard";
import st from './Home.module.scss';



const Home = () => {
    return (
        <Container className={st.home__content}>
            <Row xs={4} md={6} className="g-24">
            {Array.from({ length: 24 }).map((_, idx) => (
                <Col>
                    <MyCard />
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home;