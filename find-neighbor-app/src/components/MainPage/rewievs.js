import React, {Component} from "react";
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import people from "./people.png";
import {Button} from "antd";
import boy from "./boy.png";
import girlF from "./gilrF.png";
import girlS from "./girlS.png";


class Rewievs extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onclick () {
        window.location.assign('../login');
    }


    render() {
        return (
            <Container>
                <Row>
                        <Table>
                            <thead>
                            <tr>
                                <td className="girlF"><img  src={girlF}/></td>
                                <td className="girlS">  <img src={girlS}/></td>
                                <td className="boy"> <img src={boy}/></td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="first">Yulia</td>
                                <td className="second">Yulia</td>
                                <td className="third">Yulia</td>
                            </tr>
                            </tbody>
                        </Table>
                </Row>
                    <Row>
                       <Col> <div className="about-title">About our project</div>
                        <div className="about-text">Our project wants to help each of you who is looking for the perfect
                            roommate to live in a shared apartment.
                        </div>
                       </Col>
                    <Col>
                <div>
                    <Button className="about-button" block onClick={(e) => this.onclick(e)}>Join</Button> </div>
                    <img className="people" src={people}/>
                    </Col>
            </Row>
            </Container>
        )
    }
}

export default Rewievs