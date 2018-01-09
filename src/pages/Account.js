import React from "react";
import Accountsummary from "../components/Accountsummary";
import Accounttransactionbar from "../components/Accounttransactionbar";
import Accounttransactiontable from "../components/Accounttransactiontable";
import Accounttransactionscrollbutton from "../components/Accounttransactionscrollbutton";
import Accounttransactionsearch from "../components/Accounttransactionsearch";
import Accountquicklinks from "../components/Accountquicklinks";
import Accountspendingoverview from "../components/Accountspendingoverview";
import Accountteaserblock from "../components/Accountteaserblock";
import Accountgetintouch from "../components/Accountgetintouch";

const Account = () =>

	<section className="sectioned section-grey">
		<div className="container">
			<div id="accounts-page-overall">
				<h3 className="m-t-0 m-b-1">Hello Ms Good</h3>
				<span className="last-logged-in">You last logged in on Tue 9 Jan at 08:43am</span>
				<div className="div-spacer m-y-1"></div>
				<div className="row">
					<div className="col-md-8">
						{/*<!-- Account Summary -->*/}

						<Accountsummary />
						
						<div className="div-spacer m-y-2"></div>

						<div className="account-table-holder">
							<div className="headline">
								<h4>Your Transaction Details</h4>
							</div>
							{/*<!-- Action bar -->*/}

							<Accounttransactionbar />

							{/*<!-- Account Transaction Table -->*/}

							<Accounttransactiontable />

							<div className="lined-spacer"></div>

							{/*<!-- Account Transaction Scroll button -->*/}

							<Accounttransactionscrollbutton />

							{/*<!-- Action bar -->*/}

							<Accounttransactionbar />

						</div>

						<div className="div-spacer m-y-2"></div>

						<div className="account-table-holder">
						{/*<!-- Search Transations -->*/}

						<Accounttransactionsearch />
							
						</div>

						<div className="div-spacer m-y-3 hidden-md-up"></div>
					</div>
					<div className="col-md-4">
					
						{/*<!-- Quick Links -->*/}

						<Accountquicklinks />
						
						<div className="div-spacer m-y-2"></div>
						{/*<!-- Transaction Spending Overview -->*/}

						<Accountspendingoverview />
						
						<div className="div-spacer m-y-2"></div>
						{/*<!-- Teaser Block Holder -->*/}

						<Accountteaserblock />
						
						<div className="div-spacer m-y-2"></div>
						{/*<!-- Account Get in touch -->*/}

						<Accountgetintouch />
						
					</div>
				</div>
			</div>
		</div>
	</section>

	export default Account;