import React, { Component } from "react";
import "./HomePage.css";
import SaleContainer from "./SaleContainer";
import SaleDisplay from "./SaleDisplay";
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
                                    <SaleDisplay />
                                </div>
                            </div>

                            <div id="container2item">
                                <h2 id="mainbar">Forum</h2>
                                <div>
                                    <h4></h4>
                                    <ul id="container2">
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">arts</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=42">activities</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=20">politics</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=73">general</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=32">sport</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=6">housing</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">help</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=76">missed connections</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=26">pets</a></li>
                                        <li><a href="https://forums.craigslist.org/?areaID=1&forumID=85">gigs</a></li>

                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div id="container2item">
                            <div id="mainbar"><Link to="/jobs">
                                <h2>Jobs</h2>
                            </Link></div>
                            <div>
                                <h4></h4>
                                <ul id="container2">
                                    <li><a href="http://localhost:3001/jobs">accounting</a></li>
                                    <li><a href="http://localhost:3001/jobs">admin</a></li>
                                    <li><a href="http://localhost:3001/jobs">software</a></li>
                                    <li><a href="http://localhost:3001/jobs">food</a></li>
                                    <li><a href="http://localhost:3001/jobs">media</a></li>
                                    <li><a href="http://localhost:3001/jobs">transport</a></li>
                                    <li><a href="http://localhost:3001/jobs">security</a></li>
                                    <li><a href="http://localhost:3001/jobs">real estate</a></li>
                                    <li><a href="http://localhost:3001/jobs">education</a></li>
                                    <li><a href="http://localhost:3001/jobs">government</a></li>

                                </ul>
                                {/* <JobContainer /> */}
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