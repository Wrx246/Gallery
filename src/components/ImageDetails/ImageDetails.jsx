import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_ASYNC_DETAILS } from "../../store/reducers";
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
                    <Card.Text>
                        Title: {details.title}
                        <br />
                        Id: {details.id}
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={details.url} />
            </Card>
        </Container>
    )
}


export default ImageDetails;