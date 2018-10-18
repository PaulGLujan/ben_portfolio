import React, { Component } from 'react';
import Field from './contact_form_field';
import { ValidatorForm } from 'react-form-validator-core';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.assembleEmailString = this.assembleEmailString.bind(this);
    this.sendEmail = this.sendEmail.bind(this);  
  }
  assembleEmailString(){
    const parts = ["bln717", "yahoo", "com", ".", "@"];
    const email = parts[0] + parts[4] + parts[1] + parts[3] + parts[2];
    const mailto = 'mailto:'+email; 
    return <a href={mailto} target="_top">{email}</a>
  }
  handleInputChange(event) {
    const { value, name } = event.target;

    const { form } = this.state;

    form[name] = value;

    this.setState({
      form: { ...form }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit called, form values are:', this.state.form);

    this.props.add(this.state.form);
  }
  sendEmail(){
    console.log('sendEmail');
    const url = 'http://localhost:8005/mail_handler.php';
    axios.get(url);
  }
  render() {
    const { firstName, lastName, phone, email } = this.state.form;

    return (
      <div className="contactSection mt-3 flex-column justify-content-center d-flex">
          <div className="row">
            <div className="col-2"></div>
            <div className="container col-5 border-right mt-5 contactForm">
              <ValidatorForm ref="form" onSubmit={this.handleSubmit} instantValidate={false}>
                <Field name="firstName" label="Name:" type="text" value={firstName} onChange={this.handleInputChange} validators={['required']} errorMessages='this field is required'/>
                <Field name="email" label="Email:" type="text" value={email} onChange={this.handleInputChange} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
                <Field name="phone" label="Phone:" type="tel" value={phone} onChange={this.handleInputChange}/>
                <div className="form-group">
                  <label className="row justify-content-end mr-2">Comments:</label>
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <div className="row justify-content-end mr-2">
                  <button type="submit">Submit</button>
                </div>
              </ValidatorForm>
            </div>
            <div className="container col-5">
              <h5>Architectural and Landscapes</h5> 
              <h5>Engagements and Weddings</h5>
              <h5>Corporate Events</h5>
              <h5>Profile Pictures</h5>
              <br/>
              <div><this.assembleEmailString/></div>
            </div>
          </div>
          <h1 onClick={this.sendEmail}>Send email</h1>
        </div>
    )
  }
}

export default ContactForm;