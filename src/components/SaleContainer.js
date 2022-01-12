import React, { Component } from 'react';
import axios from 'axios';
import './SaleContainer.css';
import Sale from './Sale';

class SaleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

<<<<<<< HEAD
const SaleContainer = () => {
    
=======
    componentDidMount() {
        axios.get('http://localhost:3000/sales')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.salesArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }

>>>>>>> 855d9bef950f8043569188bd5e7fbe1024508dec



<<<<<<< HEAD
            <div className="sale-container">

=======

    displaySales() {
        const display = this.state.data.map((a, idx) => {
            return <Sale
                key={idx}
                title={a.title}
                description={a.description}
                price={a.price}
                contact_info={a.contact_info}
                location={a.location}
                image_url={a.image_url}



            />
        });

        return display;
    }


    render() {
        return (
            <div>

                {this.displaySales()}

>>>>>>> 855d9bef950f8043569188bd5e7fbe1024508dec
            </div>
        )
    }



}


export default SaleContainer;