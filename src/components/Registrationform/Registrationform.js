import React from "react";
import { Link } from "react-router-dom";

const Registrationform = () =>

<form>
  <section class="sectioned section-grey">
    <div class="container">
      <div id="products-application-page-overall">
        <div class="row">
          <div class="col-md-7 col-xl-8">
            <div id="application-form-holder">
              <div class="this-inner">
                <form>
                  <div class="this-title p-a-2">
                    <h3 class="m-y-0">New Customer? Register Here:</h3>
                  </div>
                  <div class="this-accordion" id="accordion-application" role="tablist" aria-multiselectable="false">
                    <div class="this-inner">
                      <div class="accordion-item">
                        <div class="this-header">
                          <div class="this-activator" id="heading-your-details" role="tab" data-toggle="collapse" data-parent="#accordion" href="#collapse-your-details" aria-expanded="true" aria-controls="collapse-your-details">
                          </div>
                        </div>
                        <div class="this-fields">
                          <div class="this-inner collapse show" id="collapse-your-details" role="tabpanel" aria-labelledby="heading-your-details">
                            
                            <div>
                              <div class="form-group">
                                <label for="firstName">First Name <span>*</span></label>
                                <input type="text" class="form-control" id="firstName" aria-describedby="firstName" placeholder="First Name" tabindex="1" />
                              </div>
                              <div>
                                <div class="form-group">
                                  <label for="lastName">Last Name <span>*</span></label>
                                  <input type="text" class="form-control" id="lastName" aria-describedby="lastName" placeholder="Last Name" tabindex="3" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="form-group">
                                <label for="userName">Username <span>*</span></label>
                                <input type="text" class="form-control" id="userName" aria-describedby="lastName" placeholder="Email" tabindex="3" />
                              </div>
                            </div>
                            <div>
                              <div class="form-group">
                                <label for="password">Password <span>*</span></label>
                                <input type="text" class="form-control" id="password" aria-describedby="password" placeholder="Password" tabindex="3" />
                              </div>
                            </div>
                            
                            <div>
                              <div class="form-group">
                                <label for="addressLine1">Residential Address Line 1 <span>*</span></label>
                                <input type="text" class="form-control" id="addressLine1" aria-describedby="addressLine1" placeholder="No P.O Boxes please" tabindex="4" />
                              </div>
                            </div>
                                                        
                            <div>
                              <div class="form-group">
                                <label for="addressCity">City <span>*</span></label>
                                <input type="text" class="form-control" id="addressCity" aria-describedby="addressCity" placeholder="City" tabindex="6" />
                              </div>
                              <div>
                                <div class="form-group">
                                  <label for="addressState">State <span>*</span></label>
                                  <select class="form-control" id="addressState" aria-describedby="addressState">
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
                              <div>
                                <div class="form-group">
                                  <label for="addessZipCode">Zip Code <span>*</span></label>
                                  <input type="text" class="form-control" id="addessZipCode" aria-describedby="addessZipCode" placeholder="Zip Code" tabindex="8" />
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <div>
                                <div class="form-group">
                                  <label for="phoneNumber">Primary Phone Number <span>*</span></label>
                                  <input type="text" class="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Primary Phone Number" tabindex="9" />
                                </div>
                              </div>

                              <div>
                                <div>
                                  <label for="emailAddress">Email Address <span>*</span></label>
                                  <input type="email" class="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" tabindex="11" />
                                </div>
                              </div>
                              <div>
                              <a href="#" className="btn btn-orange text-uppercase">
                                <Link className="text-whited" to="/account">
                                  Submit
                                </Link>
                              </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  </form>

export default Registrationform; 