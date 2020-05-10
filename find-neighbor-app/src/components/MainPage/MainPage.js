import { Button } from 'antd';
import './MainPage.css';
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
            <div>
                <img className="main-image" src={join}/>
                <p className="text">Find neighbor</p>

                <p className="sub-text">The social network for your neighborhood.</p>

                <Button className="join-us" block onClick={(e) => this.onclick(e)}>Join us</Button>



                {/*<img className="people" src={people}/>*/}

            </div>
        );
    }
}


{/*<div className="main-picture">*/}
{/*                <img className="join" src={join}/>*/}

{/*                /!*<img className="black" src={black}/>*!/*/}

{/*<Button className="joinUs" block onClick={(e) => this.onclick(e)}>Join us</Button>*/}

{/*<p className="text">Find neighbor</p>*/}

{/*<p className="stext">The social network for your neighborhood.</p>*/}

{/*/!*<img className="people" src={people}/>*!/*/}

{/*</div>*/}
{/* */}

export default Grid