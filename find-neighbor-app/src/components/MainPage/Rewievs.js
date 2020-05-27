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

    //Навіщо воно тут???

    // constructor(props, context) {
    //     super(props, context);
    // }

    onclick () {
        window.location.assign('../login');
    }


    render() {
        return (
            <div>
                <div className="reviews-container">
                    <div>
                        <img  src={girlF}/>
                        <div className="first">Yulia</div>
                    </div>
                    <div>
                        <img src={girlS}/>
                        <div className="first">Albertovna</div>
                    </div>
                    <div>
                        <img src={boy}/>
                        <div className="first">Valera</div>
                    </div>
                </div>
                {/*TODO: make this grid*/}
                {/*<div className="about-project">*/}
                {/*    <div>*/}
                {/*        <div className="about-title">*/}
                {/*            About our project*/}
                {/*        </div>*/}
                {/*        <div className="about-text">*/}
                {/*            Our project wants to help each of you who is looking for the perfect*/}
                {/*            roommate to live in a shared apartment.*/}
                {/*        </div>*/}
                {/*        <Button className="about-button" block onClick={(e) => this.onclick(e)}>Join</Button>*/}
                {/*        <img className="people" src={people}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Rewievs