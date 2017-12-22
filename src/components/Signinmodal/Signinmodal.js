import React from "react";
import Modal from 'react-awesome-modal';

const Signinmodal = () =>
	<container>
	<div id="signInModal" className="modal fade" role="dialog">
	<div className="modal-dialog">
	  <div className="modal-content">
	    	<span className="close">&times;</span>
	    	<h3>Enter account login information</h3>
		
			<div className="row">

			  <div className="col-lg-6">
				<div className="panel panel-primary">

				  <div className="panel-heading">
					<h3 className="panel-title">Account Log In</h3>
				  </div>
				  <div className="panel-body">

					<form role="form" action="/" method="post">
					  <div className="form-group">
						<input type="text" name="logemail" placeholder="E-mail" required=""/>
					  </div>
					  <div className="form-group">
						<input type="password" name="logpassword" placeholder="Password" required=""/>
					  </div>
  
					  <button className="btn btn-danger" id="login-user" type="submit">LOGIN NOW</button>
					</form>
				  </div>
				</div>
				<br />

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Account Registration</h3>
					</div>
					<div className="panel-body">
						<form role="form" action="/" method="post">
						  <div className="form-group">
							<input className="form-control" type="text" name="email" placeholder="E-mail" required=""/>
						  </div>
						  <div className="form-group">
							<input className="form-control" type="text" name="username" placeholder="Username" required=""/>
						  </div>
						  <div className="form-group">
							<input className="form-control" type="password" name="password" placeholder="Password" required=""/>
						  </div>
						  <div className="form-group">
							<input className="form-control" type="password" name="passwordConf" placeholder="Confirm Password" required=""/>
						  </div>
						  <button className="btn btn-danger" id="auth-user" type="submit">REGISTER</button>
						</form>
					</div>	
				</div>
			  </div>

			</div>
		
	  	</div>
		<div className="copyright">
			<p> &copy; 2017 Innovate Financial Services. All rights reserved</p>
		</div>;
	</div>
	</div>

	</container>;


export default Signinmodal;	