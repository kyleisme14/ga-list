import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Job extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (


      <div>

        <h3>Title:</h3>
        {this.props.title}
        <br />
        <h3>Description:</h3>
        {this.props.description}
        <br />
        <h3>Payment:</h3>
        {this.props.payment}
        <br />
        <h3>Contact Info:</h3>
        {this.props.contact_info}
        <br />
        <h3>Location:</h3>
        {this.props.location}

      </div>
    )
  }

}

export default Job;
