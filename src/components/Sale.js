import React, { Component } from 'react';
import "./Sale.css";
const axios = require('axios');



class Sale extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Remove feral cats from my basement",
      description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
      price: "$100",
      location: "USA",
      imageURL: "http://placekitten.com/200/300",
      comments: [
        {
          message: "I'll do this job.",
          username: "@romebell",
          date: String(new Date()),
        },
      ],
    };
  }

  render() {
    return (
      <div id='container'>
        <div></div>
        <div>

          <h2>{this.state.title}</h2>
          <h3>{this.state.price}  {this.state.location}</h3>
          <h3>{this.state.description}</h3>
          <img src={this.state.imageURL} />
        </div>
        <div></div>

      </div>
    )
  }
}

export default Sale;