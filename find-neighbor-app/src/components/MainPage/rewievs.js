import React, {Component} from "react";
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import people from "./people.png";
import {Button} from "antd";


class Rewievs extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onclick () {
        window.location.assign('../login');
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md='4'>
                        <Card className="first">
                            <Card.Img variant="" src=""/>
                            <Card.Body>
                                <Card.Title>Yulia</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="second">
                            <Card.Img variant="" src=""/>
                            <Card.Body>
                                <Card.Title>Yulia</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="third">
                            <Card.Img variant="" src=""/>
                            <Card.Body>
                                <Card.Title>Yulia</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row xs="1" sm="2" xl="4">
                    <Col>
                        <div className="about-title">About our project</div>
                        <div className="about-text">Our project wants to help each of you who is looking for the perfect
                            roommate to live in a shared apartment.
                        </div>
                        <Button className="about-button" block onClick={(e) => this.onclick(e)}>Join</Button>
                    </Col>
                    <Col mdOffset={4}><img className="people" src={people}/></Col>
                </Row>
            </Container>
        )
    }
}

export default Rewievs