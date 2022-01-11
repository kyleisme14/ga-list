import React, { Component } from 'react';
import axios from 'axios';
import './JobContainer.css';
import Job from './Job';
import { Redirect } from 'react-router-dom'




class JobContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/jobs')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.jobsArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }





    displayJobs() {
        const display = this.state.data.map((a, idx) => {
            return <Job
                key={idx}
                title={a.title}
                description={a.description}
                payment={a.payment}
                contact_info={a.contact_info}
                location={a.location}

            />
        });

        return display;
    }

    addJob = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addJob}>Create a new Job</button>
                {this.state.redirect && <Redirect to="/postform" />}
                {this.displayJobs()}

            </div>
        )
    }



}


export default JobContainer;