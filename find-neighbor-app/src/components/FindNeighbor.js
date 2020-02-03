import React, {Component} from "react";
import {filterByAddress} from "../util/APIUtils";
import {Button, Form, notification} from "antd";

class FindNeighbor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInfo: this.props.currentUser,
            peoplesWhoFitCriteria: {}
        }
        this.requestFilteringByAddress=this.requestFilteringByAddress.bind(this);
    }

    requestFilteringByAddress(event){
         event.preventDefault();
        // let userInformationArray = Object.values(this.props.currentUser)
        // const filterAddressRequest = {
        //     username: userInformationArray[1]
        // };

        console.log(this.state.usernameInfo)
        filterByAddress('solomiyka')
            .then(response => {
                console.log(this.state.usernameInfo.username)
                this.setState({
                        peoplesWhoFitCriteria: response
                    }
                );
            }).catch(error => {
            notification.error({
                message: 'Find Neighbor App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }


    // getUsername = () => {
    //     console.log(this.props.currentUser)
    //     let userArray = Object.values(this.props.currentUser);
    //     console.log(userArray);
    //     this.setState({
    //         username: userArray[1]
    //     });
    //     // this.username = userArray[1];
    //     console.log(this.username)
    //     return this.username;
    // }

    render() {
        // this.getUsername()
        console.log(this.props.currentUser);
        console.log(this.username);
        // this.request()
        console.log(this.peoplesWhoFitCriteria)
        return (
            <div>
            <div>
                <h5>Find Neighbor Page</h5>
            </div>
            <Form onSubmit={this.requestFilteringByAddress} className="signup-form">
            <Button type="primary"
        htmlType="submit"
        size="large"
        className="signup-form-button">Sign up</Button>
        <br></br>
            </Form>
            </div>

        );
    }

}

export default FindNeighbor