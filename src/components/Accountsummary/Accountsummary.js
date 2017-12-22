import React from "react";

const Accountsummary = () => 

	<div className="account-table-holder">
		<div className="headline">
			<h4>Your Account Summary</h4>
		</div>

		<div className="table-responsive">
			<table className="table table-sm table-summary">
				<tbody>
					<tr>
						<th scope="row" width="33.333%">Account Type</th>
						<td>Innovate Student Account</td>
					</tr>
					<tr>
						<th scope="row" width="33.333%">Account Number</th>
						<td>00357892</td>
					</tr>
					<tr>
						<th scope="row" width="33.333%">Available Balance</th>
						<td>1,693.72</td>
					</tr>
					<tr>
						<th scope="row" width="33.333%">Overdraft Limit</th>
						<td>1,000.00</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>;

export default Accountsummary;