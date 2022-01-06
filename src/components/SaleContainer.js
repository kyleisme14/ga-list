import React, { Component } from "react";
import axios from "axios";
import "./SaleContainer.css";

import Sale from "./Sale";

const data = [
    {title: "Remove feral cats from my basement",
    description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
    price: "$100",
    location: "USA",
    imageURL: "http://placekitten.com/200/300"},
    {title: "Remove feral cats from my basement",
    description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
    price: "$100",
    location: "USA",
    imageURL: "http://placekitten.com/200/300"},
    {title: "Remove feral cats from my basement",
    description: "A bunch of cats have moved into my basement. Please help me get rid of them :) ",
    price: "$100",
    location: "USA",
    imageURL: "http://placekitten.com/200/300"},
]

const displaySales = data.map((a, idx) => {
    return (
        <Sale
            key={idx}
            title={a.title}
            description={a.description}
            price={a.price}
            location={a.location}
            imageURL={a.imageURL}
        />
    );
});

class SaleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('OUR SALE API GOES HERE')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.top
                })
            })
            .catch((error) => {
                console.log('error hitting api', error);
            })
    }

    displaySales() {
        const display = this.state.data.map((a, idx) => {
            return <Sale
                key={idx}
                title={a.title}
                description={a.description}
                price={a.price}
                location={a.location}
                imageURL={a.imageURL}
            />
        });

        return display;
    }


    render() {
        return (
            <div>
                {this.displaySales()}
            </div>

        );
    }
}

export default SaleContainer;