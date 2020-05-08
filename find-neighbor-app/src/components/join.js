import { Button } from 'antd';
import './FindNeighbor.css';
import join from './main.png';
import React, {Component} from "react";
import black from './black.png';
import people from './people.png';

class Grid extends Component {
    constructor(props, context) {
        super(props, context);
    }

    onclick () {
        window.location.assign('../login');
    }


    render() {
        return(
        <div className="main">
            <img className="join" src={join}/>
            <img className="black" src={black}/>
            <div>
                <div >
                    <Button className="joinUs" block onClick={(e) => this.onclick(e)}>Join us</Button>
                </div>,

            </div>

            <div className="text">Find neighbor</div>

            <div className="stext">The social network for your neighborhood.</div>

            <img className="people" src={people}/>

        </div> );
    }




}

export default Grid