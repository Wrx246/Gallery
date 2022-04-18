import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";
import st from './MyCard.module.scss';



const MyCard = ({ id, url }) => {

    return (
        <Card key={id} className={st.my__card} >
            <Card.Img className={st.my__img} src={url} />
            <Button className={st.my__btn}>Details</Button>
        </Card>
    )

}

export default MyCard;