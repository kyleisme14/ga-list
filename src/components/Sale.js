import React, { Component } from 'react';
import "./Sale.css";
import { useParams } from "react-router-dom";
const axios = require('axios');

const Sale = () => {
  const { id } = useParams();

  return (
    <div className="Sale">
      <h2>Sale Page - { id }</h2>
    </div>
  )
}


// class Sale extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Remove feral cats from my basement",
//       description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
//       price: "$100",
//       location: "USA",
//       imageURL: "http://placekitten.com/200/300",
//       comments: [
//         {},
//       ],
//     };
//   }

//   render() {
//     return (
//       <div id='container'>
//         <div>SALE ID</div>
//         <div>

//           <h2>{this.state.title}</h2>
//           <h3>{this.state.price}  {this.state.location}</h3>
//           <h3>{this.state.description}</h3>
//           <img src={this.state.imageURL} />
//         </div>
//         <div></div>

//       </div>
//     )
//   }
// }

export default Sale;