import React, { useState } from "react";
import "./JobContainer.css";
import { Link } from "react-router-dom";


const JobContainer = () => {
    const [jobPosts] = useState([
        {
            id: 1, title: "Remove feral cats from my basement",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$100",
            location: "USA",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 2, title: "Remove evil mummies from my basement",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$100",
            location: "USA",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 3, title: "Remove grumpy guys from my basement",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$100",
            location: "USA",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 4, title: "Help my grandma please!",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$100",
            location: "USA",
            imageURL: "http://placekitten.com/200/300"
        },
        {
            id: 5, title: "Eat a peach for peace!",
            description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
            price: "$100",
            location: "USA",
            imageURL: "http://placekitten.com/200/300"
        },
    ]);

    return (
        <div className="job-container">
            {jobPosts.map((jobPost) => (
                <div className="post-preview" key={jobPost.id}>
                    <Link to={`/jobs/${jobPost.id}`}>
                        <h2>{jobPost.title}</h2>
                        <p>{jobPost.price}, {jobPost.location}</p>
                    </Link>
                </div>

            ))}
        </div>
    )

}


export default JobContainer;