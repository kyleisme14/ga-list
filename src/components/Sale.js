import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Sale extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (

      <div>

        <div class="tile is-parent is-shady">
          <article class="tile is-child notification is-white">
            <p class="title">Title:<br />{this.props.title}</p>
            <p class="subtitle">Price:{this.props.price}</p>
            <div class="content">
              <p class="subtitle">Description:<br />{this.props.description}</p>
              <p>Contact info: {this.props.contact_info}</p>
            </div>
            <div>
              <p>Location: {this.props.location}</p>
            </div>
            <div>



            </div>

          </article>
        </div>

      </div>
    )
  }

}

export default Sale;
