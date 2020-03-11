import { Component } from "react";
import React from "react"
import ReactDOM from 'react-dom';
import {getUserAdditionalInfo} from "../util/APIUtils";

class ListOfNeighbor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInfo: this.props.usernameInfo
        }
    }


    render() {
        console.log(this.props.peoplesList)
        console.log(this.state.peoplesList)
        // let array = this.props.poeoplesList.filter(value => Object.keys(value).length !== 0);
        return (
            <List peoples={this.props.peoplesList} />
        );
    }

}


function List({ peoples }) {
    if (!peoples) {
        return <p></p>;
    }
    return (
        <ul>
            {peoples.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}
function Item({ item }) {
    return (
       <div className="userBlock">
           <p> <b> Name:</b> {item.name} Age: {item.age} Image: {item.image}</p>
       </div>
    );
}

export default ListOfNeighbor