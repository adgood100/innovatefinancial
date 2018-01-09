import React, { Component } from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Application from "./pages/Application";
import Learningoverview from "./pages/LearningOverview";
import LearningStory from "./pages/LearningStory";
import Banking from "./pages/Banking";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Homeadvertsfilter from "./components/Homeadvertsfilter";
import Footer from "./components/Footer";

const App = () => 


  <Router>
    <div>
      <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/banking" component={Banking} />
        <Route exact path="/creditcards" component={CreditCards} />
        <Route exact path="/loans" component={Loans} />        
        <Route exact path="/learningoverview" component={Learningoverview} />
        <Route exact path="/learningstory" component={LearningStory} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/application" component={Application} />

      <Footer />
      

    </div>

  </Router>;

export default App;