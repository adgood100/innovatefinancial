import React from "react";
import { Link } from "react-router-dom";

const Registrationloginsidebar = () =>
<form>
  <section class="sectioned section-grey">
    <div class="container">
      <div id="products-application-page-overall">
        <div class="row">
          
            <div id="application-form-holder">
              <div class="this-inner">
                <form>
                  <div class="this-title p-a-2">
                    <h3 class="m-y-0">Existing Customers Log In:</h3>
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
                                <label for="userName">Username <span>*</span></label>
                                <input type="text" class="form-control" id="userName" aria-describedby="userName" placeholder="Email" tabindex="3" />
                              </div>
                            </div>
                            <div>
                              <div class="form-group">
                                <label for="password">Password <span>*</span></label>
                                <input type="text" class="form-control" id="password" aria-describedby="password" placeholder="Password" tabindex="3" />
                              </div>
                            </div>                        
                            <div>
                              <div class="checkbox">
                                <label>
                                  <input type="checkbox" value="remember-me" />Remember me
                                </label>
                              </div>
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
                </form>
            </div>
          </div>
        
      </div>
    </div>
    </div>
  </section>
  </form>

    export default Registrationloginsidebar;