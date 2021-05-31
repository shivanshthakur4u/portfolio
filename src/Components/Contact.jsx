import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} My email is ${data.email} My message is ${data.message}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      \
      <div className="container contact_div">
        <div className="row">
          <div class="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
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
                  value={data.phone}
                  onChange={InputEvent}
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
                  value={data.email}
                  onChange={InputEvent}
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
                  value={data.message}
                  onChange={InputEvent}
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
