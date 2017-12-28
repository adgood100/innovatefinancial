import React from "react";

const ApplicationForm = () =>

<div id="application-form-holder">
	<div className="this-inner">
		<form>
			<div className="this-title p-a-2">
				<h2 className="m-y-0">Apply for an Elite Travel Rewards Credit Card</h2>
			</div>
			<div className="this-accordion" id="accordion-application" role="tablist" aria-multiselectable="false">
				<div className="this-inner">
					<div className="accordion-item">
						<div className="this-header">
							<div className="this-activator" id="heading-your-details" role="tab" data-toggle="collapse" data-parent="#accordion" href="#collapse-your-details" aria-expanded="true" aria-controls="collapse-your-details">
								<span>Your Details</span>
							</div>
						</div>
						<div className="this-fields">
							<div className="this-inner collapse show" id="collapse-your-details" role="tabpanel" aria-labelledby="heading-your-details">
								{/* Name */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="firstName">First Name <span>*</span></label>
											<input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="First Name" tabindex="1" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="middleName">Middle Name</label>
											<input type="text" className="form-control" id="middleName" aria-describedby="middleName" placeholder="Middle Name" tabindex="2" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="lastName">Last Name <span>*</span></label>
											<input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Last Name" tabindex="3" />
										</div>
									</div>
								</div>

								{/* Address 1 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine1">Residential Address Line 1 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine1" aria-describedby="addressLine1" placeholder="No P.O Boxes please" tabindex="4" />
										</div>
									</div>
								</div>

								{/* Address 2 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine2">Residential Address Line 2 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine2" aria-describedby="addressLine2" placeholder="Apartment #, Unit #, etc." tabindex="5" />
										</div>
									</div>
								</div>

								{/*City, zip, State*/}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressCity">City <span>*</span></label>
											<input type="text" className="form-control" id="addressCity" aria-describedby="addressCity" placeholder="City" tabindex="6" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressState">State <span>*</span></label>
											<select className="form-control" id="addressState" aria-describedby="addressState">
												<option value="AL">Alabama</option>
												<option value="AK">Alaska</option>
												<option value="AZ">Arizona</option>
												<option value="AR">Arkansas</option>
												<option value="CA">California</option>
												<option value="CO">Colorado</option>
												<option value="CT">Connecticut</option>
												<option value="DE">Delaware</option>
												<option value="DC">District Of Columbia</option>
												<option value="FL">Florida</option>
												<option value="GA">Georgia</option>
												<option value="HI">Hawaii</option>
												<option value="ID">Idaho</option>
												<option value="IL">Illinois</option>
												<option value="IN">Indiana</option>
												<option value="IA">Iowa</option>
												<option value="KS">Kansas</option>
												<option value="KY">Kentucky</option>
												<option value="LA">Louisiana</option>
												<option value="ME">Maine</option>
												<option value="MD">Maryland</option>
												<option value="MA">Massachusetts</option>
												<option value="MI">Michigan</option>
												<option value="MN">Minnesota</option>
												<option value="MS">Mississippi</option>
												<option value="MO">Missouri</option>
												<option value="MT">Montana</option>
												<option value="NE">Nebraska</option>
												<option value="NV">Nevada</option>
												<option value="NH">New Hampshire</option>
												<option value="NJ">New Jersey</option>
												<option value="NM">New Mexico</option>
												<option value="NY">New York</option>
												<option value="NC">North Carolina</option>
												<option value="ND">North Dakota</option>
												<option value="OH">Ohio</option>
												<option value="OK">Oklahoma</option>
												<option value="OR">Oregon</option>
												<option value="PA">Pennsylvania</option>
												<option value="RI">Rhode Island</option>
												<option value="SC">South Carolina</option>
												<option value="SD">South Dakota</option>
												<option value="TN">Tennessee</option>
												<option value="TX">Texas</option>
												<option value="UT">Utah</option>
												<option value="VT">Vermont</option>
												<option value="VA">Virginia</option>
												<option value="WA">Washington</option>
												<option value="WV">West Virginia</option>
												<option value="WI">Wisconsin</option>
												<option value="WY">Wyoming</option>
											</select>
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addessZipCode">Zip Code <span>*</span></label>
											<input type="text" className="form-control" id="addessZipCode" aria-describedby="addessZipCode" placeholder="Zip Code" tabindex="8" />
										</div>
									</div>
								</div>

							{/*contact details*/}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumber">Primary Phone Number <span>*</span></label>
											<input type="text" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Primary Phone Number" tabindex="9" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumberAlt">Alternate Phone Number</label>
											<input type="text" className="form-control" id="phoneNumberAlt" aria-describedby="phoneNumberAlt" placeholder="Alternate Phone Number" tabindex="10" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="emailAddress">Email Address <span>*</span></label>
											<input type="email" className="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" tabindex="11" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*Applicante's account Information*/}
					<div className="accordion-item">
						<div className="this-header">
							<div className="this-activator" id="heading-further-information" role="tab" data-toggle="collapse" data-parent="#accordion" href="#collapse-further-information" aria-expanded="false" aria-controls="collapse-further-information">
								<span>Account Information</span>
							</div>
						</div>
						<div className="this-fields">
							<div className="this-inner collapse" id="collapse-further-information" role="tabpanel" aria-labelledby="heading-further-information">
								{/* Name */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="firstName">First Name <span>*</span></label>
											<input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="First Name" tabindex="1" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="middleName">Middle Name</label>
											<input type="text" className="form-control" id="middleName" aria-describedby="middleName" placeholder="Middle Name" tabindex="2" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="lastName">Last Name <span>*</span></label>
											<input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Last Name" tabindex="3" />
										</div>
									</div>
								</div>

								{/* Address Line 1 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine1">Residential Address Line 1 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine1" aria-describedby="addressLine1" placeholder="No P.O Boxes please" tabindex="4" />
										</div>
									</div>
								</div>

								{/* Address Line 2 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine2">Residential Address Line 2 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine2" aria-describedby="addressLine2" placeholder="Apartment #, Unit #, etc." tabindex="5" />
										</div>
									</div>
								</div>

								{/* City, State and Zip Code */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressCity">City <span>*</span></label>
											<input type="text" className="form-control" id="addressCity" aria-describedby="addressCity" placeholder="City" tabindex="6" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressState">State <span>*</span></label>
											<select className="form-control" id="addressState" aria-describedby="addressState">
												<option value="AL">Alabama</option>
												<option value="AK">Alaska</option>
												<option value="AZ">Arizona</option>
												<option value="AR">Arkansas</option>
												<option value="CA">California</option>
												<option value="CO">Colorado</option>
												<option value="CT">Connecticut</option>
												<option value="DE">Delaware</option>
												<option value="DC">District Of Columbia</option>
												<option value="FL">Florida</option>
												<option value="GA">Georgia</option>
												<option value="HI">Hawaii</option>
												<option value="ID">Idaho</option>
												<option value="IL">Illinois</option>
												<option value="IN">Indiana</option>
												<option value="IA">Iowa</option>
												<option value="KS">Kansas</option>
												<option value="KY">Kentucky</option>
												<option value="LA">Louisiana</option>
												<option value="ME">Maine</option>
												<option value="MD">Maryland</option>
												<option value="MA">Massachusetts</option>
												<option value="MI">Michigan</option>
												<option value="MN">Minnesota</option>
												<option value="MS">Mississippi</option>
												<option value="MO">Missouri</option>
												<option value="MT">Montana</option>
												<option value="NE">Nebraska</option>
												<option value="NV">Nevada</option>
												<option value="NH">New Hampshire</option>
												<option value="NJ">New Jersey</option>
												<option value="NM">New Mexico</option>
												<option value="NY">New York</option>
												<option value="NC">North Carolina</option>
												<option value="ND">North Dakota</option>
												<option value="OH">Ohio</option>
												<option value="OK">Oklahoma</option>
												<option value="OR">Oregon</option>
												<option value="PA">Pennsylvania</option>
												<option value="RI">Rhode Island</option>
												<option value="SC">South Carolina</option>
												<option value="SD">South Dakota</option>
												<option value="TN">Tennessee</option>
												<option value="TX">Texas</option>
												<option value="UT">Utah</option>
												<option value="VT">Vermont</option>
												<option value="VA">Virginia</option>
												<option value="WA">Washington</option>
												<option value="WV">West Virginia</option>
												<option value="WI">Wisconsin</option>
												<option value="WY">Wyoming</option>
											</select>
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addessZipCode">Zip Code <span>*</span></label>
											<input type="text" className="form-control" id="addessZipCode" aria-describedby="addessZipCode" placeholder="Zip Code" tabindex="8" />
										</div>
									</div>
								</div>

								{/* Contact Details */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumber">Primary Phone Number <span>*</span></label>
											<input type="text" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Primary Phone Number" tabindex="9" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumberAlt">Alternate Phone Number</label>
											<input type="text" className="form-control" id="phoneNumberAlt" aria-describedby="phoneNumberAlt" placeholder="Alternate Phone Number" tabindex="10" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="emailAddress">Email Address <span>*</span></label>
											<input type="email" className="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" tabindex="11" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<div className="this-header">
							<div className="this-activator" id="heading-financial-information" role="tab" data-toggle="collapse" data-parent="#accordion-application" href="#collapse-financial-information" aria-expanded="false" aria-controls="collapse-further-information">
								<span>Student &amp; Financial Information</span>
							</div>
						</div>
						<div className="this-fields">
							<div className="this-inner collapse" id="collapse-financial-information" role="tabpanel" aria-labelledby="heading-financial-information">
								{/* Name */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="firstName">First Name <span>*</span></label>
											<input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="First Name" tabindex="1" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="middleName">Middle Name</label>
											<input type="text" className="form-control" id="middleName" aria-describedby="middleName" placeholder="Middle Name" tabindex="2" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="lastName">Last Name <span>*</span></label>
											<input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Last Name" tabindex="3" />
										</div>
									</div>
								</div>

								{/* Address Line 1 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine1">Residential Address Line 1 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine1" aria-describedby="addressLine1" placeholder="No P.O Boxes please" tabindex="4" />
										</div>
									</div>
								</div>

								{/* Address Line 2 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine2">Residential Address Line 2 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine2" aria-describedby="addressLine2" placeholder="Apartment #, Unit #, etc." tabindex="5" />
										</div>
									</div>
								</div>

								{/* City, State and Zip Code */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressCity">City <span>*</span></label>
											<input type="text" className="form-control" id="addressCity" aria-describedby="addressCity" placeholder="City" tabindex="6" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressState">State <span>*</span></label>
											<select className="form-control" id="addressState" aria-describedby="addressState">
												<option value="AL">Alabama</option>
												<option value="AK">Alaska</option>
												<option value="AZ">Arizona</option>
												<option value="AR">Arkansas</option>
												<option value="CA">California</option>
												<option value="CO">Colorado</option>
												<option value="CT">Connecticut</option>
												<option value="DE">Delaware</option>
												<option value="DC">District Of Columbia</option>
												<option value="FL">Florida</option>
												<option value="GA">Georgia</option>
												<option value="HI">Hawaii</option>
												<option value="ID">Idaho</option>
												<option value="IL">Illinois</option>
												<option value="IN">Indiana</option>
												<option value="IA">Iowa</option>
												<option value="KS">Kansas</option>
												<option value="KY">Kentucky</option>
												<option value="LA">Louisiana</option>
												<option value="ME">Maine</option>
												<option value="MD">Maryland</option>
												<option value="MA">Massachusetts</option>
												<option value="MI">Michigan</option>
												<option value="MN">Minnesota</option>
												<option value="MS">Mississippi</option>
												<option value="MO">Missouri</option>
												<option value="MT">Montana</option>
												<option value="NE">Nebraska</option>
												<option value="NV">Nevada</option>
												<option value="NH">New Hampshire</option>
												<option value="NJ">New Jersey</option>
												<option value="NM">New Mexico</option>
												<option value="NY">New York</option>
												<option value="NC">North Carolina</option>
												<option value="ND">North Dakota</option>
												<option value="OH">Ohio</option>
												<option value="OK">Oklahoma</option>
												<option value="OR">Oregon</option>
												<option value="PA">Pennsylvania</option>
												<option value="RI">Rhode Island</option>
												<option value="SC">South Carolina</option>
												<option value="SD">South Dakota</option>
												<option value="TN">Tennessee</option>
												<option value="TX">Texas</option>
												<option value="UT">Utah</option>
												<option value="VT">Vermont</option>
												<option value="VA">Virginia</option>
												<option value="WA">Washington</option>
												<option value="WV">West Virginia</option>
												<option value="WI">Wisconsin</option>
												<option value="WY">Wyoming</option>
											</select>
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addessZipCode">Zip Code <span>*</span></label>
											<input type="text" className="form-control" id="addessZipCode" aria-describedby="addessZipCode" placeholder="Zip Code" tabindex="8" />
										</div>
									</div>
								</div>

								{/* Contact Details */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumber">Primary Phone Number <span>*</span></label>
											<input type="text" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Primary Phone Number" tabindex="9" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumberAlt">Alternate Phone Number</label>
											<input type="text" className="form-control" id="phoneNumberAlt" aria-describedby="phoneNumberAlt" placeholder="Alternate Phone Number" tabindex="10" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="emailAddress">Email Address <span>*</span></label>
											<input type="email" className="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" tabindex="11" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<div className="this-header">
							<div className="this-activator" id="heading-spending-expenses" role="tab" data-toggle="collapse" data-parent="#accordion-application" href="#collapse-spending-expenses" aria-expanded="false" aria-controls="collapse-further-information">
								<span>Spending &amp; Expenses</span>
							</div>
						</div>
						<div className="this-fields">
							<div className="this-inner collapse" id="collapse-spending-expenses" role="tabpanel" aria-labelledby="heading-spending-expenses">
								{/* Name */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="firstName">First Name <span>*</span></label>
											<input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="First Name" tabindex="1" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="middleName">Middle Name</label>
											<input type="text" className="form-control" id="middleName" aria-describedby="middleName" placeholder="Middle Name" tabindex="2" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="lastName">Last Name <span>*</span></label>
											<input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Last Name" tabindex="3" />
										</div>
									</div>
								</div>

								{/* Address Line 1 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine1">Residential Address Line 1 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine1" aria-describedby="addressLine1" placeholder="No P.O Boxes please" tabindex="4" />
										</div>
									</div>
								</div>

								{/* Address Line 2 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine2">Residential Address Line 2 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine2" aria-describedby="addressLine2" placeholder="Apartment #, Unit #, etc." tabindex="5" />
										</div>
									</div>
								</div>

								{/* City, State and Zip Code */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressCity">City <span>*</span></label>
											<input type="text" className="form-control" id="addressCity" aria-describedby="addressCity" placeholder="City" tabindex="6" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressState">State <span>*</span></label>
											<select className="form-control" id="addressState" aria-describedby="addressState">
												<option value="AL">Alabama</option>
												<option value="AK">Alaska</option>
												<option value="AZ">Arizona</option>
												<option value="AR">Arkansas</option>
												<option value="CA">California</option>
												<option value="CO">Colorado</option>
												<option value="CT">Connecticut</option>
												<option value="DE">Delaware</option>
												<option value="DC">District Of Columbia</option>
												<option value="FL">Florida</option>
												<option value="GA">Georgia</option>
												<option value="HI">Hawaii</option>
												<option value="ID">Idaho</option>
												<option value="IL">Illinois</option>
												<option value="IN">Indiana</option>
												<option value="IA">Iowa</option>
												<option value="KS">Kansas</option>
												<option value="KY">Kentucky</option>
												<option value="LA">Louisiana</option>
												<option value="ME">Maine</option>
												<option value="MD">Maryland</option>
												<option value="MA">Massachusetts</option>
												<option value="MI">Michigan</option>
												<option value="MN">Minnesota</option>
												<option value="MS">Mississippi</option>
												<option value="MO">Missouri</option>
												<option value="MT">Montana</option>
												<option value="NE">Nebraska</option>
												<option value="NV">Nevada</option>
												<option value="NH">New Hampshire</option>
												<option value="NJ">New Jersey</option>
												<option value="NM">New Mexico</option>
												<option value="NY">New York</option>
												<option value="NC">North Carolina</option>
												<option value="ND">North Dakota</option>
												<option value="OH">Ohio</option>
												<option value="OK">Oklahoma</option>
												<option value="OR">Oregon</option>
												<option value="PA">Pennsylvania</option>
												<option value="RI">Rhode Island</option>
												<option value="SC">South Carolina</option>
												<option value="SD">South Dakota</option>
												<option value="TN">Tennessee</option>
												<option value="TX">Texas</option>
												<option value="UT">Utah</option>
												<option value="VT">Vermont</option>
												<option value="VA">Virginia</option>
												<option value="WA">Washington</option>
												<option value="WV">West Virginia</option>
												<option value="WI">Wisconsin</option>
												<option value="WY">Wyoming</option>
											</select>
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addessZipCode">Zip Code <span>*</span></label>
											<input type="text" className="form-control" id="addessZipCode" aria-describedby="addessZipCode" placeholder="Zip Code" tabindex="8" />
										</div>
									</div>
								</div>

								{/* Contact Details */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumber">Primary Phone Number <span>*</span></label>
											<input type="text" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Primary Phone Number" tabindex="9" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumberAlt">Alternate Phone Number</label>
											<input type="text" className="form-control" id="phoneNumberAlt" aria-describedby="phoneNumberAlt" placeholder="Alternate Phone Number" tabindex="10" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="emailAddress">Email Address <span>*</span></label>
											<input type="email" className="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" tabindex="11" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<div className="this-header">
							<div className="this-activator" id="heading-terms-conditions" role="tab" data-toggle="collapse" data-parent="#accordion-application" href="#collapse-terms-conditions" aria-expanded="false" aria-controls="collapse-terms-conditions">
								<span>Terms &amp; conditions</span>
							</div>
						</div>
						<div className="this-fields">
							<div className="this-inner collapse" id="collapse-terms-conditions" role="tabpanel" aria-labelledby="heading-terms-conditions">
								{/* Name */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="firstName">First Name <span>*</span></label>
											<input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="First Name" tabindex="1" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="middleName">Middle Name</label>
											<input type="text" className="form-control" id="middleName" aria-describedby="middleName" placeholder="Middle Name" tabindex="2" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="lastName">Last Name <span>*</span></label>
											<input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Last Name" tabindex="3" />
										</div>
									</div>
								</div>

								{/* Address Line 1 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine1">Residential Address Line 1 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine1" aria-describedby="addressLine1" placeholder="No P.O Boxes please" tabindex="4" />
										</div>
									</div>
								</div>

								{/* Address Line 2 */}
								<div className="row">
									<div className="col-xl-8">
										<div className="form-group">
											<label for="addressLine2">Residential Address Line 2 <span>*</span></label>
											<input type="text" className="form-control" id="addressLine2" aria-describedby="addressLine2" placeholder="Apartment #, Unit #, etc." tabindex="5" />
										</div>
									</div>
								</div>

								{/* City, State and Zip Code */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressCity">City <span>*</span></label>
											<input type="text" className="form-control" id="addressCity" aria-describedby="addressCity" placeholder="City" tabindex="6" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addressState">State <span>*</span></label>
											<select className="form-control" id="addressState" aria-describedby="addressState">
												<option value="AL">Alabama</option>
												<option value="AK">Alaska</option>
												<option value="AZ">Arizona</option>
												<option value="AR">Arkansas</option>
												<option value="CA">California</option>
												<option value="CO">Colorado</option>
												<option value="CT">Connecticut</option>
												<option value="DE">Delaware</option>
												<option value="DC">District Of Columbia</option>
												<option value="FL">Florida</option>
												<option value="GA">Georgia</option>
												<option value="HI">Hawaii</option>
												<option value="ID">Idaho</option>
												<option value="IL">Illinois</option>
												<option value="IN">Indiana</option>
												<option value="IA">Iowa</option>
												<option value="KS">Kansas</option>
												<option value="KY">Kentucky</option>
												<option value="LA">Louisiana</option>
												<option value="ME">Maine</option>
												<option value="MD">Maryland</option>
												<option value="MA">Massachusetts</option>
												<option value="MI">Michigan</option>
												<option value="MN">Minnesota</option>
												<option value="MS">Mississippi</option>
												<option value="MO">Missouri</option>
												<option value="MT">Montana</option>
												<option value="NE">Nebraska</option>
												<option value="NV">Nevada</option>
												<option value="NH">New Hampshire</option>
												<option value="NJ">New Jersey</option>
												<option value="NM">New Mexico</option>
												<option value="NY">New York</option>
												<option value="NC">North Carolina</option>
												<option value="ND">North Dakota</option>
												<option value="OH">Ohio</option>
												<option value="OK">Oklahoma</option>
												<option value="OR">Oregon</option>
												<option value="PA">Pennsylvania</option>
												<option value="RI">Rhode Island</option>
												<option value="SC">South Carolina</option>
												<option value="SD">South Dakota</option>
												<option value="TN">Tennessee</option>
												<option value="TX">Texas</option>
												<option value="UT">Utah</option>
												<option value="VT">Vermont</option>
												<option value="VA">Virginia</option>
												<option value="WA">Washington</option>
												<option value="WV">West Virginia</option>
												<option value="WI">Wisconsin</option>
												<option value="WY">Wyoming</option>
											</select>
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="addessZipCode">Zip Code <span>*</span></label>
											<input type="text" className="form-control" id="addessZipCode" aria-describedby="addessZipCode" placeholder="Zip Code" tabindex="8" />
										</div>
									</div>
								</div>

								{/* Contact Details */}
								<div className="row">
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumber">Primary Phone Number <span>*</span></label>
											<input type="text" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Primary Phone Number" tabindex="9" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="phoneNumberAlt">Alternate Phone Number</label>
											<input type="text" className="form-control" id="phoneNumberAlt" aria-describedby="phoneNumberAlt" placeholder="Alternate Phone Number" tabindex="10" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="form-group">
											<label for="emailAddress">Email Address <span>*</span></label>
											<input type="email" className="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" tabindex="11" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="this-action-bar">
				<div className="this-inner clearfix">
					<div className="this-section single-section text-xs-center text-lg-right">
						<div className="this-inner">
							<div className="this-action">

								<p className="m-b-0"><btn className="btn btn-white"><a href="#">Save My information</a></btn></p>
							</div>
							<div className="this-action">
								<p className="m-b-0"><btn className="btn btn-orange" type="submit"><a href='#'>Apply Now</a></btn></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>


export default ApplicationForm;
