import React from "react";

const Accounttransactionbar = () => 

	<div className="this-action-bar">
		<div className="this-inner">
			<div className="this-section text-xs-center text-lg-left">
				<p className="m-b-0"><a href="#">Don't recognize a transaction?</a></p>
			</div>
			<div className="this-section text-xs-center text-lg-right">
				<div className="this-inner">
					<div className="this-action">
						<p className="m-b-0"><a href="#"><i className="fa fa-print" aria-hidden="true"></i> Print Page</a></p>
					</div>
					<div className="this-action">
						<p className="m-b-0"><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Export All</a></p>
					</div>
					<div className="this-action">
						<p className="m-b-0"><a href="#"><i className="fa fa-download" aria-hidden="true"></i> Download PDF</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>;

export default Accounttransactionbar;