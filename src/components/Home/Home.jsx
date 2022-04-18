import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAsyncImagesAction, getImagesAction } from "../../store/reducers";
import MyCard from "../../UI/MyCard/MyCard";
import st from './Home.module.scss';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const image = useSelector(state => state.imageReducer.images);

    useEffect(() => {
        dispatch(getAsyncImagesAction());
    }, [])

    return (
        <Container className={st.home__content}>
            <Row xs={4} md={6} className="g-24">
                {image.map((image) => (
                    <Col key={image.id}>
                        <Link to={`/${image.id}`}>
                            <MyCard key={image.id} url={image.url} />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home;