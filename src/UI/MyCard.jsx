import React from "react";
import { Card, Button } from "react-bootstrap";
import st from './MyCard.module.scss';


const MyCard = ({id, url}) => {
    return (
        <Card key={id} className={st.myCard} >
            <Card.Img className={st.myimg} src={url} />
            <Button className={st.mybtn}>Details</Button>
        </Card>
    )

}

export default MyCard;