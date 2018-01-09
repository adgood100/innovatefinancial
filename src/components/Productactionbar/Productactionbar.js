import React from "react";
import { Link } from "react-router-dom";


const Productactionbar = () =>

	<div className="this-action-bar">
		<div className="this-inner clearfix">
			<div className="this-section text-xs-center text-lg-left">
				<p className="m-b-0">No Annual Fee &#8224;</p>
			</div>
			<div className="this-section text-xs-center text-lg-right">
				<div className="this-inner">
					<div className="this-action">
						<div className="form-check m-b-0">
							<label className="form-check-label">
								<input className="form-check-input" type="checkbox" value=""/>
								&nbsp; Add to Compare
							</label>
						</div>
					</div>
					<div className="this-action">
						<p className="m-b-0"><a href="#"><i className="fa fa-question-circle-o" aria-hidden="true"></i> Learn More</a></p>
					</div>
					<div className="this-action">
						<p className="m-b-0">
						<a href="#" className="btn btn-orange">
							<Link className="text-whited" to="/application">
								Apply Now
							</Link>
						</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>;

export default Productactionbar;