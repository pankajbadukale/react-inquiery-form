import React from "react";
import { connect } from 'react-redux';

import { add } from '../app.actions';
import { FormInput, FormTextarea, FormSelect, FormRadio, FormButton } from './FormInput';
import "./FormWrapper.css";
import * as validator from './validate';

export class FormWrapper extends React.Component {
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
      let formElement = this.myEqForm.querySelector("[name='"+ele+"']");
      if(forceTohideAll === undefined) {
        
        let validateWith = formElement.getAttribute('validate').trim();
        if(formElement.getAttribute('type') === 'radio') {
          validateWith = 'isRequired';
        }

        if(! validator[validateWith](this.state[ele])) {
          showOrhide = 'block';
          isValidState = false;
        }
      }
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
              <FormInput 
                title="Full Name" 
                stateValue={this.state.fname} onFieldValueChange={(e) => this.onFieldValueChange(e)} 
                placeholder="Enter Full Name" 
                validationType="alphabetsOnly"
                name="fname" 
                validationMsg="Full Name is required and should be alphabetic only" />

              <FormInput 
                title="Email" 
                stateValue={this.state.email} 
                onFieldValueChange={(e) => this.onFieldValueChange(e)} 
                placeholder="Enter Email" 
                validationType="validateEmail"
                name="email" 
                validationMsg="Valide Email is required" />
              
              <FormInput 
                title="Phone No" 
                stateValue={this.state.phone} 
                onFieldValueChange={(e) => this.onFieldValueChange(e)} 
                placeholder="Enter Phone Number" 
                validationType="IsMobileNumber"
                name="phone" 
                validationMsg="Phone number is required and  should be 10 numbers" />
              
              <FormTextarea 
                title="Message" 
                stateValue={this.state.message} 
                onFieldValueChange={(e) => this.onFieldValueChange(e)} 
                placeholder="Enter your comment" 
                validationType="fiftyChars"
                name="message" 
                validationMsg="Please provide you message it is required" />
              
              <FormSelect 
                title="Country" 
                stateValue={this.state.country} 
                options={['INDIA', 'UK', 'USA', 'CHINA']} 
                onFieldValueChange={(e) => this.onFieldValueChange(e)} 
                validationType="isRequired"
                name="country" 
                validationMsg="Let us know know about you country name." />
              
              <FormRadio 
                title="Gender" 
                onFieldValueChange={(e) => this.onFieldValueChange(e)} 
                radios={[{value: 'Male', name: 'gender'}, {value: 'Female', name: 'gender'}]} 
                validationType="isRequired"
                name="gender" 
                validationMsg="Please select gender" />
              
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10 text-right">
                <FormButton onClickHandler={() => this.resetForm()} type="button" title="Clear" />
                <FormButton type="submit" title="Submit" />
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
