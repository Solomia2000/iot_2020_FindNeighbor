import React, {Component} from "react";
import {checkEmailAvailability, filterUserListByAddress} from "../util/APIUtils";
import {Button, Form, notification} from "antd";
import {API_BASE_URL} from "../constants";

class FindNeighbor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInfo: this.props.currentUser,
            peoplesWhoFitCriteria: {},
            isHidden: true
        }


        this.requestFilteringByAddress = this.requestFilteringByAddress.bind(this);
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    requestFilteringByAddress(event) {
        event.preventDefault();

        console.log(this.state.usernameInfo)

        filterUserListByAddress(this.state.usernameInfo.username)
            .then(response => {
                if(response) {

                     console.log("Ooo yes");

                } else {
                }
            });
    }


    render() {
        console.log(this.props.currentUser);
        console.log(this.username);
        // this.request()
        const element = <h1>Hello, world</h1>;
        console.log(this.peoplesWhoFitCriteria)
        return (
            <div>
                <button onClick={this.requestFilteringByAddress.bind(this)} >
                    Click to show modal
                </button>
                {/*{!this.state.isHidden && <Child />}*/}
            </div>

        );
    }


}

// const Child = () => (
//     <div className='modal'>
//         <button onClick={this.requestFilteringByAddress} >
//             ADDRESS
//         </button>
//     </div>
// )

export default FindNeighbor