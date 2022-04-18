import React from "react";
import { Card, Button } from "react-bootstrap";
import Avatar from '../Assets/Images/Avatar.jpg';
import st from './MyCard.module.scss';


const MyCard = () => {
    return (
        <Card className={st.myCard} style={{width: '210px'}}>
            <Card.Img className={st.myimg} src={Avatar} />
            <Button className={st.mybtn}>Details</Button>
        </Card>
    )
}

export default MyCard;