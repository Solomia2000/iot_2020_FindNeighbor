import React, { Component } from "react";
import './FindNeighbor.css';
import {userFiltration} from "../util/APIUtils";
import ListOfNeighbor from "./ListOfNeighbor";

class FindNeighbor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullAddress: true,
            sex: true,
            age: true,
            usernameInfo: this.props.currentUser,
            peoplesWhoFitCriteria: [{}],
            text: 'test'
        }

        this.requestFilteringByAddress = this.requestFilteringByAddress.bind(this);
        this.userBlock=this.userBlock.bind(this);
    }


    userBlock = () =>  {

        return(<div className="userBlock">
            <p>{}</p>
        </div>)
    }

    getDocFinancialInfo = docId => {
        this.setState({ peoplesList: docId});
        console.log(docId);
        console.log(this.state.peoplesWhoFitCriteria);
    };

    requestFilteringByAddress(event) {
        event.preventDefault();

        this.state.username = this.state.usernameInfo.name;
        userFiltration(this.state.usernameInfo.id, this.state.fullAddress, this.state.age, this.state.sex)
            .then(response => {
                if(response) {
                    console.log(response)
                    this.state.peoplesWhoFitCriteria = [...response];
                    console.log(this.state.peoplesWhoFitCriteria);
                    this.getDocFinancialInfo(response);
                }
            });

        this.userBlock();

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
        let name;
        console.log(this.state.peoplesWhoFitCriteria)
        if(this.state.peoplesWhoFitCriteria.length < 1){
            name = <p>Sorry, we dont find any user</p>
        }
        else{
            name =  <ListOfNeighbor peoplesList={this.state.peoplesList} usernameInfo={this.state.usernameInfo}/>
        }
        return (

            <div>
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
            </div>
                {name}
            </div>

        );
    }


}

export default FindNeighbor