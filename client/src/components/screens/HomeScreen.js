import React from 'react'
import "./homescreen.modules.css";
import {Container, Row, Col} from "react-bootstrap"
import {AiOutlineHeart} from "react-icons/ai"
import {BiBrain} from "react-icons/bi"
import {FaBone} from "react-icons/fa"
import {GiNoseFront, GiKidneys} from "react-icons/gi"
import {GrEmergency} from "react-icons/gr"

const HomeScreen = () => {
    return (
        <div>
            <div className="bg">
                <Row>
                    <Col sm="12" md="6">Patients and Visitors</Col>
                </Row>
            </div>
            <div className="bg-down">
                <Container>
                    <Row  style={{paddingTop: '25px'}}>
                        <Col sm="12" md="8">
                            <div className="text-white">
                                <h1 className="text-center">More About Our Hospital</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsum explicabo veritatis molestiae fuga repudiandae pariatur. Rem recusandae nulla laboriosam ducimus odit nemo eos iure, quod amet quasi nesciunt suscipit aliquid qui perspiciatis et facilis repudiandae? Impedit adipisci voluptatem maiores tempore harum voluptatibus tenetur esse!</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque debitis quos, aperiam voluptatem quasi numquam veniam, repudiandae quis ab quas nihil iusto corporis tempora ullam dignissimos itaque. Officia, adipisci consequatur.</p>    
                            </div>                    
                        </Col>
                        <Col md="4">
                            <h1 className="text-white font-weight-bold">We Provide</h1>
                            <Row>
                                <Col md="1">
                                    <h2>
                                        <AiOutlineHeart className="text-white"/>
                                    </h2>
                                </Col>
                                <Col md="3">
                                    <div className="container">
                                        <h2 className="text-white">Cardiology</h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <h2>
                                        <BiBrain className="text-white"/>
                                    </h2>
                                </Col>
                                <Col md="3">
                                    <div className="container">
                                        <h2 className="text-white">Neurology</h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <h2>
                                        <FaBone className="text-white"/>
                                    </h2>
                                </Col>
                                <Col md="3">
                                    <div className="container">
                                        <h2 className="text-white">Orthopedic</h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <h2>
                                        <GiNoseFront className="text-white"/>
                                    </h2>
                                </Col>
                                <Col md="3">
                                    <div className="container">
                                        <h2 className="text-white">ENT</h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <h2>
                                        <GiKidneys className="text-white"/>
                                    </h2>
                                </Col>
                                <Col md="3">
                                    <div className="container">
                                        <h2 className="text-white">Kidneys</h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <h2>
                                        <GrEmergency className="text-white"/>
                                    </h2>
                                </Col>
                                <Col md="3">
                                    <div className="container">
                                        <h2 className="text-white">Emergency</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomeScreen
