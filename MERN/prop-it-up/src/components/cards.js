import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hair}</p>
            </div>
        );
    }
}

export default PersonCard;
