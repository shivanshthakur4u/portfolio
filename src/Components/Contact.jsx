import React, { useState } from "react";

const Contact = () => {
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      
      <div className="container contact_div">
        <div className="row">
          <div class="col-md-6 col-10 mx-auto">
            <form  action="https://formspree.io/f/xyyljrpy" method="POST">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  name="fullname"
                 
                 
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="phone"
                  
                  
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                 
                  
                  placeholder="Enter you Email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  name="message"
                 
                 
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
