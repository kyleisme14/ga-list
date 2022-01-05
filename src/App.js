import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// components
import Sale from "./components/Sale";
import SaleContainer from "./components/SaleContainer";
import HomePage from "./components/HomePage";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/sales" element={<SaleContainer />} />
            <Route path="/sale" element={<Sale />} />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;