import React, { Component } from "react";
import "./HomePage.css";
import SaleContainer from "./SaleContainer";
import JobContainer from "./JobContainer";
import { Link } from "react-router-dom";


class HomePage extends Component {
    render() {
        return (
            <div>
                <div id="background">
                    <br />
                </div>

                <div id="container1">
                    <div id="background" className="Column1">
                    </div>

                    <div id="mainbar" className="Column2">
                        <br />


                        <Link to="/jobpostform">
                            <h3>create a Job Post</h3></Link>
                        <br />
                        <Link to="/salepostform">
                            <h3>create a Sale Post</h3></Link>
                        <br />
                        <Link to="/forumpostform">
                            <h3>create a Forum Post</h3></Link>
                        <br />
                        <div id="searchbar">
                            <input type="text" placeholder="Search GA-List" />
                        </div>
                        <br />
                        <div id="map">
                            <h2>Current Location</h2>
                        </div>
                        <br />

                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">about ga-list</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">terms of use</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">privacy policy</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">avoid scams</a>

                    </div>



                    <div id="column3">
                        <div id="mainbar">
                            <h2>Los Angeles/ Southern California/ USA</h2>
                        </div>
                        <br />
                        <div id="container2">
                            <div id="container2item">
                                <div id="mainbar">
                                    <Link to="/sales">
                                        <h2>For Sale</h2>
                                    </Link></div>
                                <div>
                                    <SaleContainer />
                                </div>
                            </div>

                            <div id="container2item">
                                <h2 id="mainbar">Forum</h2>
                                <div>
                                    <h4></h4>
                                    <ul id="container2">
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">arts</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">activities</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">classes</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">general</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">groups</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">housing</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">help</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">missed connections</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">pets</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">gigs</a></li>

                                    </ul>
                                </div>
                            </div>

                           
                        </div> 
                        <div id="container2item">
                                <div id="mainbar"><Link to="/jobs">
                                    <h2>Jobs</h2>
                                </Link></div>
                                <div>
                                    <JobContainer />
                                </div>
                            </div>
                    </div>

                    <div id="background" className="column4">
                    </div>

                </div>

            </div >
        );
    }
}

export default HomePage;