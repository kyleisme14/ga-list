import React, { Component } from 'react';
import axios from 'axios';
import './JobContainer.css';
import Job from './Job';





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


    render() {
        return (
            <div>

                {this.displayJobs()}

            </div>
        )
    }



}


export default JobContainer;