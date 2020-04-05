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


    // someMethod(){
    //     let myBlob = new Blob([ZFc1a1pXWnBibVZr], {type: 'application/octet-binary'})
    //     let myFile = blobToFile(myBlob, "MY.png")
    //     const reader = new FileReader();
    //     reader.addEventListener("loadend", function() {
    //         // reader.result містить контент Blob у вигляді типізованого масиву
    //     });
    //     reader.readAsArrayBuffer;
    // }

    render() {
        let userPhoto = 'ZFc1a1pXWnBibVZr'
        const Example = ({ userPhoto }) => <img src={`data:image/jpeg;base64,${userPhoto}`} />
        console.log(Example)
        console.log(this.props.peoplesList)
        console.log(this.state.peoplesList)
        // let array = this.props.poeoplesList.filter(value => Object.keys(value).length !== 0);
        return (
            <div>
            <List peoples={this.props.peoplesList} />
                 {Example}
            </div>
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
           <div>

           </div>
       </div>

    );
}

function blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}


export default ListOfNeighbor