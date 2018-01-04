import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";

const Navbar = () =>

	<nav id="navbar-holder">
		<div id="navbar-inner">
			<div id="navbar-upper" className="navbar-section">
				<div className="section-inner">
					<div className="container">
						<div id="navbar-upper-links" className="section-inline-block">
							<div className="navbar-item" id="navbar-upper-personal">
								<a href="" className="navbar-link">
									Personal
								</a>
							</div>
							<div className="navbar-item" id="navbar-upper-small-business">
								<a href="" className="navbar-link">
									Small Business
								</a>
							</div>
							<div className="navbar-item" id="navbar-upper-wealth-management">
								<a href="" className="navbar-link">
									Wealth Management
								</a>
							</div>
							<div className="navbar-item" id="navbar-upper-business-and-institutions">
								<a href="" className="navbar-link">
									Business and Institutions
								</a>
							</div>
						</div>
						<div id="navbar-upper-login" className="section-inline-block">
							<div className="navbar-item" id="navbar-upper-button">
								<a>
									<Link className="navbar-link" to="/registration">
										Log In &nbsp; <i className="fas fa-lock" aria-hidden="true"></i> 
									</Link>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="navbar-lower" className="navbar-section">
				<div className="section-inner">
					<div className="container">
						<div id="navbar-lower-brand" className="section-inline-block">
							<div className="navbar-item" id="navbar-lower-logo">
								<div className="img-holder">
									<a>
									<Link className="img-item" to="/home">
									<img className="img-item" src="../../assets/images/innovate-logo.png"/>
									</Link>
									</a>
								</div>
							</div>
						</div>
						<div id="navbar-lower-links" className="section-inline-block">
							<div className="navbar-item" id="navbar-lower-banking">
								<a>
									<Link className="navbar-link" to="/products">
									Banking
									</Link>
								</a>
							</div>
							<div className="navbar-item" id="navbar-lower-credit-card">
								<a>
									<Link className="navbar-link" to="/products">
									Credit Card
									</Link>
								</a>
							</div>
							<div className="navbar-item" id="navbar-lower-loans">
								<a>
									<Link className="navbar-link" to="/products">
									Loans
									</Link>
								</a>
							</div>
							<div className="navbar-item" id="navbar-lower-learning">
								<a>
									<Link className="navbar-link" to="/learningoverview">
									Learning
									</Link>
								</a>
							</div>
						</div>
						<div id="navbar-lower-search" className="section-inline-block">
							<div className="navbar-item" id="navbar-lower-form">
								<form>
									<input type="text" className="form-control" placeholder="How can we help you?"></input>
									<button className="btn btn-secondary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="navbar-mobile-brand">
			<div className="img-holder">
				<a>
				<Link className="img-item" to="/home">
					<img className="img-item" src="../../assets/images/innovate-logo.png"/>
				</Link>
				</a>
			</div>
		</div>
		<div id="navbar-toggler">
			<i className="fa fa-bars" aria-hidden="true"></i>
		</div>
	</nav>

export default Navbar;