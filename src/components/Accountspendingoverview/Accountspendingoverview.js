import React from "react";

const Accountspendingoverview = () => 

	<div className="p-a-2 backgrounded-whited">
		<div className="headline m-b-1">
			<h4>Spending Overview</h4>
		</div>
		<div className="m-t-2">
			<span className="d-inline-block" style={{fontSize: '0.75rem', marginRight: '1rem'}}>
				<i className="fa fa-circle" aria-hidden="true" style={{color: '#87D6F7'}}></i> &nbsp; Food and Drink
			</span>
			<span className="d-inline-block" style={{fontSize: '0.75rem', marginRight: '1rem'}}>
				<i className="fa fa-circle" aria-hidden="true" style={{color: '#25C6AC'}}></i> &nbsp; Home &amp; Leisure
			</span>
			<span className="d-inline-block" style={{fontSize: '0.75rem', marginRight: '1rem'}}>
				<i className="fa fa-circle" aria-hidden="true" style={{color: '#FFD005'}}></i> &nbsp; Travel &amp; Communication
			</span>
			<span className="d-inline-block" style={{fontSize: '0.75rem', marginRight: '1rem'}}>
				<i className="fa fa-circle" aria-hidden="true" style={{color: '#E0631E'}}></i> &nbsp; School Supplies
			</span>
		</div>
		<div className="img-holder p-a-2">
			<img className="img-item" src="assets/images/account-pie-chart.png"/>
		</div>
	</div>;

export default Accountspendingoverview;