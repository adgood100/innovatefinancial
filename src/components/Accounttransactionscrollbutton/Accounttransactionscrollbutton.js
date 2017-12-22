import React from "react";

const Accounttransactionscrollbutton = () => 

	<div className="table-paging-holder">
		<nav aria-label="Transaction Pagination">
			<ul className="pagination m-y-0">
				<li className="page-item disabled">
					<a className="page-link" href="#"><i className="fa fa-chevron-left" aria-hidden="true"></i><span className="sr-only">Previous</span></a>
				</li>
				<li className="page-item active">
					<a className="page-link" href="#">1</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">2</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#"><i className="fa fa-chevron-right" aria-hidden="true"></i><span className="sr-only">Next</span></a>
				</li>
			</ul>
		</nav>
	</div>;

export default Accounttransactionscrollbutton;