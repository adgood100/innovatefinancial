import React from "react";

const Accounttransactionsearch = () => 

	<form>
		<div className="headline">
			<h4>Search for Transactions</h4>
		</div>

		<div className="p-a-2">
			<div className="form-group row">
				<label for="date-range-from" className="col-sm-4 col-form-label"><strong className="text-uppercase">Date Range</strong></label>
				<div className="col-sm-4">
					<div className="input-group">
						<input type="text" className="form-control" id="date-range-from" placeholder="From" aria-describedby="date-range-from"/>
						<span className="input-group-addon" id="date-range-from-icon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
					</div>
					<div className="div-spacer m-t-1 hidden-sm-up"></div>
				</div>
				<div className="col-sm-4">
					<div className="input-group">
						<input type="text" className="form-control" id="date-range-to" placeholder="To" aria-describedby="date-range-to"/>
						<span className="input-group-addon" id="date-range-to-icon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
					</div>
				</div>
			</div>
			<div className="form-group row m-b-0">
				<label for="key-word-search" className="col-sm-4 col-form-label"><span className="text-uppercase">Containing the word(s)</span></label>
				<div className="col-sm-8">
					<div className="input-group">
						<input type="text" className="form-control" id="key-word-search" placeholder="Key word search" aria-describedby="key-word-search"/>
						<span className="input-group-addon" id="key-word-search-icon"><i className="fa fa-search" aria-hidden="true"></i></span>
					</div>
				</div>
			</div>
		</div>

		<div className="this-action-bar">
			<div className="this-inner">
				<div className="this-section text-xs-center text-lg-left empty-section">
				</div>
				<div className="this-section text-xs-center text-lg-right">
					<div className="this-inner">
						<div className="this-action">
							<span className="text-capitalize text-whited">Advanced Search</span> &nbsp; &nbsp; <button type="submit" className="btn btn-white text-darken">Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>;

export default Accounttransactionsearch;