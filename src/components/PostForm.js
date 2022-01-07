import React, { Component } from "react";
import "./PostForm.css";

class PostForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(){
      let databody = {
          "title": this.state.title,
          "description": this.state.description,
          "price": this.state.price,
          "contact_info": this.state.contact_info,
          "location": this.state.location,
          "Image": this.state.image_url,
      }
  
      return fetch('http://localhost:5002/stored', {
          method: 'POST',
          body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data)); 
  }
  
  
  render(){
      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <div><label>
                      Title
                      <br/><input type="text" name="Title" value={this.title} onChange={this.handleTitle}/>
                  </label> <br/></div>
                  <div><label>
                      Description
                      <br/><input id="description" type="text" name="Description" value={this.description} onChange={this.handleDescription}/>
                  </label> <br/></div>
                  <div><label>
                      Price
                      <br/><input type="text" name="Price" value={this.price} onChange={this.handlePrice}/>
                  </label> <br/></div>
                  <div><label>
                      Contact Info
                      <br/><input type="text" name="Contact_info" value={this.contact_info} onChange={this.handleContact_info}/>
                  </label> <br/></div>
                  <div><label>
                      Location
                      <br/><input type="text" name="Location" value={this.location} onChange={this.handleLocation}/>
                  </label> <br/></div>
                  <div><label>
                      Image
                      <br/> <input type="text" name="Image_url" value={this.image_url} onChange={this.handleImage_url}/>
                  </label> <br/></div>
                  <input type="submit" value="Submit Post" />
              </form> 
          </div>
      );
  }
  }
  


export default PostForm;