import React, {Component} from "react";

class FindNeighbor extends Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    getUsername(){
        let userArray = Object.values(this.props.currentUser);
        this.setState()
        this.username = userArray[1];
        console.log(this.username)
        return this.username;
    }

    render() {
        this.username.
        console.log(this.username);
        return (
            <div>
                <h5>Find Neighbor Page</h5>
            </div>
        );
    }

}

export default FindNeighbor