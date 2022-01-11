import "./PostForm.css";
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const { REACT_APP_SERVER_URL } = process.env;


class SalePostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            post_text: "",
        };
    }
    handleTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }
    handleDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }
    handlePayment(e) {
        this.setState({
            post_text: e.target.value,
        });
    }
    handleContact_info(e) {
        this.setState({
            username: e.target.value,
        });
    }
    handleLocation(e) {
        this.setState({
            location: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newJob = {
            title: this.state.name,
            description: this.state.description,
            post_text: this.state.post_text,
            username: this.state.username,
        };
        axios
            .post(`${REACT_APP_SERVER_URL}/sales/new`, newJob)
            .then((response) => {
                this.setState({
                    redirect: true,
                });
            })
            .catch((error) => console.log("===> Error in Form", error));
    };


    render() {
        if (this.state.redirect) return <Redirect to="/sales" />; // You can have them redirected to profile (your choice)
        
        return (
            <div>
                <p>Sale Post Form</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>
                            Title
                            <br />
                            <input type="text" name="Title"
                                value={this.state.name} onChange={this.handleTitle.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <div>
                        <label>
                            Description
                            <br />
                            <input id="description" type="text" name="Description"
                                value={this.state.description} onChange={this.handleDescription.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <div>
                        <label>
                            Payment
                            <br />
                            <input type="text" name="Price"
                                value={this.state.post_text} onChange={this.handlePayment.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <div>
                        <label>
                            Contact
                            <br />
                            <input type="text" name="Contact_info"
                                value={this.state.username} onChange={this.handleContact_info.bind(this)} />
                        </label>
                        <br />
                    </div>
                    <input type="submit" value="Submit Post" />
                </form>
            </div>
        );
    }
};



export default SalePostForm;