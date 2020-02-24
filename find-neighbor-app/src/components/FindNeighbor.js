import React, { Component } from "react";
import {checkEmailAvailability, filterUserListByAddress, userFiltration} from "../util/APIUtils";
import {Button, Form, notification} from "antd";
import {API_BASE_URL} from "../constants";

class FindNeighbor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullAddress: true,
            sex: true,
            age: true,
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

        userFiltration(this.state.usernameInfo.id, this.state.fullAddress, this.state.age, this.state.sex)
            .then(response => {
                if(response) {

                    console.log("Ooo yes",response );

                } else {
                }
            });

    }

    toggleChangeFullAddress = () => {
        this.setState({
            fullAddress: !this.state.fullAddress
        });
    }
    toggleChangeSex = () => {
        this.setState({
            sex: !this.state.sex
        });
    }
    toggleChangeAge = () => {
        this.setState({
            age: !this.state.age
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
                <br></br>
                <label>
                    <input type="checkbox"
                           checked={this.state.fullAddress}
                           onChange={this.toggleChangeFullAddress}
                    />
                    Full address
                </label>
                <br></br>
                <label>
                    <input type="checkbox"
                           checked={this.state.sex}
                           onChange={this.toggleChangeSex}
                    />
                    Sex
                </label>
                <br></br>
                <label>
                    <input type="checkbox"
                           checked={this.state.age}
                           onChange={this.toggleChangeAge}
                    />
                    Age
                </label>
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