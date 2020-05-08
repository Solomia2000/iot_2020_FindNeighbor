import { Button } from 'antd';
import './FindNeighbor.css';
import join from './main.png';
import React, {Component} from "react";

class Grid extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
        <div className="main">
            <img className="join" src={join}/>
            <div>
                <div >
                    <Button className="joinUs" block onClick={() => {

                    }}>Join us</Button>
                </div>,

            </div>
        </div> )
    }
}

export default Grid