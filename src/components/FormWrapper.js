// vendor
import React from "react";
import { connect } from 'react-redux';

import { add } from '../app.actions';
// component
import FormField from "./FormField";
// styles
import "./FormWrapper.css";

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      fname: "",
      email: "",
      phone: "",
      message: "",
      country: "",
      gender: ""
    };
    this.state = Object.assign({}, this.initialState);
    this.myEqForm = null;
  }

  resetForm() {
    this.setState( Object.assign({}, this.initialState) );
    this.showOrHideErrorMessage(true);
  }

  onFieldValueChange(e) {
    let value = e.currentTarget.value;
    let nameOfControl = e.currentTarget.name;
    
    this.setState({[nameOfControl]: value});
    setTimeout(() => console.log(this.state));
  }

  notValid(stateValueKey) {
    return this.state[stateValueKey].trim() === "";
  }

  submitForm(e) {
    e.preventDefault();
    if(this.showOrHideErrorMessage()) {
      this.props.add(this.state);
      setTimeout(() => this.props.history.push("/thanks"))
    }
    
  }

  showOrHideErrorMessage(forceTohideAll) {
    let isValidState = true;
    Object.keys(this.initialState).forEach(ele => {
      let showOrhide = 'none';
      if(this.notValid(ele)) {
        showOrhide = 'block';
        isValidState = false;
      }
      if(forceTohideAll) showOrhide = 'none';
      this.myEqForm.querySelector("[name='"+ele+"']").nextElementSibling.style.display = showOrhide;
    })

    return isValidState;
  }

  render() {
    return (
      <div className="container contact">
        <form id="inqForm" name="inqForm" ref={el => this.myEqForm = el} onSubmit={(e) => this.submitForm(e)}>
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info text-center">
              <img src="https://image.ibb.co/kUASdV/contact-image.png" alt=""  />
              <h2>Enquiry Form</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>
          <div className="col-md-9">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="fname">Full Name:</label>
                <div className="col-sm-10">
                  <input type="text" value={this.state.fname} onChange={(e) => this.onFieldValueChange(e)} className="form-control" id="fname" placeholder="Enter Full Name" name="fname" />
                  <label className="alert alert-danger" role="alert">Full Name is required.</label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                  <input type="email" value={this.state.email}  onChange={(e) => this.onFieldValueChange(e)} className="form-control" id="email" placeholder="Enter email" name="email" />
                  <label className="alert alert-danger" role="alert">Email address is required.</label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="phone">Phone No:</label>
                <div className="col-sm-10">
                  <input type="text" value={this.state.phone} onChange={(e) => this.onFieldValueChange(e)} className="form-control" id="phone" placeholder="Enter Phone No" name="phone" />
                  <label className="alert alert-danger" role="alert">Valid Phone number is required.</label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="comment">Message:</label>
                <div className="col-sm-10">
                  <textarea onChange={(e) => this.onFieldValueChange(e)} className="form-control" name="message" value={this.state.message} rows="5" id="comment"></textarea>
                  <label className="alert alert-danger" role="alert">Your message for Enquiry  is required.</label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="country">Country:</label>
                <div className="col-sm-10">
                  <select name="country" onChange={(e) => this.onFieldValueChange(e)}>
                    <option value=""></option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="china">China</option>
                  </select>
                  <label className="alert alert-danger" role="alert">Let us know from which country you are.</label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="gender">Gender :</label>
                <div className="col-sm-10" name="gender">
                  <div className="col-sm-6">
                    <input type="radio" value="Male" onChange={(e) => this.onFieldValueChange(e)} id="gender1" name="gender" />
                    <label className="control-label" htmlFor="gender1">Male:</label>
                  </div>
                  <div className="col-sm-6">
                    <input type="radio" value="Female" onChange={(e) => this.onFieldValueChange(e)} id="gender2" name="gender" />
                    <label className="control-label" htmlFor="gender2">Female:</label>
                  </div>
                </div>
                <label className="alert alert-danger" role="alert">Gender selection is mandatory.</label>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10 text-right">
                <button onClick={() => this.resetForm()} type="button" className="btn btn-primary">Clear</button>
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default connect(state => {
  return {};
}, dispatch => {
  return {
    add: (formData) => dispatch(add(formData))
  };
})(FormWrapper);
