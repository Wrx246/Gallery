import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_ASYNC_DETAILS } from "../../store/reducers";
import { Link } from "react-router-dom";
import st from './ImageDetails.module.scss';


const ImageDetails = () => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.imageReducer.details);
    const { id } = useParams();

    useEffect(() => {
        dispatch({
            type: GET_ASYNC_DETAILS,
            payload: id
        })
    }, [])

    return (
        <Container>
            <Card className={st.card__body}>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Text>
                                Title: {details.title}
                                <br />
                                Id: {details.id}
                            </Card.Text>
                            <Link to={'/'}>
                                <Button>Back</Button>
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Img variant="bottom" src={details.url} />
            </Card>
        </Container>
    )
}


export default ImageDetails;