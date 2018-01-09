import React from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";
// import jQuery from "jquery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
// import Application from "./pages/Application";
// import Learningoverview from "./pages/Learningoverview";
// import Learningstory from "./pages/Learningoverview/Learningstory";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Homeadvertsfilter from "./components/Homeadvertsfilter";
import Footer from "./components/Footer";
import Moment from "moment";
import mongoose from "mongoose";
//import Signinmodal from "./components/Signinmodal";


const App = () =>
  <Router>
    <div>
      <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/products" component={Products} />

      <Footer />


    </div>

  </Router>;

export default App;
