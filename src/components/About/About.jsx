import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Avatar from '../../Assets/Images/Avatar.jpg';
import st from './About.module.scss';


const About = () => {
    return (
        <Container className={st.about__header}>
            <Row>
                <Col>
                    <Image
                        width={500}
                        height={500}
                        src={Avatar} />
                </Col>
                <Col>
                    <h1>Kuzmianok Maxim</h1>
                    <h5>Front-end developer</h5>
                    <h6>Age: 24 years old</h6>
                    <h6>Location: Belarus, Minsk</h6>
                    <h6>Skills:</h6>
                    <p>
                        React, React-hooks, React-router, Redux, Redux-toolkit, Redux-thunk, <br />
                        Redux-saga, Sass/Scss, Axios, Context API, JavaScript, HTML, CSS
                    </p>
                    <h6>Contacts:</h6>
                    <p>mail: <a href="jst.wrx@gmail.com">jst.wrx@gmail.com</a></p>
                    <p>linkedIn: <a href="https://www.linkedin.com/in/mkuzmianok/">https://www.linkedin.com/in/mkuzmianok/</a></p>
                    <p>telegram: <a href="https://t.me/jstwrx">https://t.me/jstwrx</a></p>
                </Col>
            </Row>
            <Row className={st.about__description}>
                <h3>About me</h3>
                <p>
                    My name is Max. I am a front-end developer from Belarus.
                    I am focused on developing applications using the React library.
                    Projects that I have developed can be seen in my portfolio:
                    <a href="https://kuzmenokportfolio.netlify.app"> https://kuzmenokportfolio.netlify.app</a>.
                    In these projects, I used different technologies. More details about my projects can be found 
                    on my GitHub page: <a href="https://github.com/Wrx246">https://github.com/Wrx246</a>.
                </p>
            </Row>
        </Container>
    )
}

export default About;