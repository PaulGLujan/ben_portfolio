import React, { Component } from 'react';
import Field from './contact_form_field';
import { ValidatorForm } from 'react-form-validator-core';
import axios from 'axios';
import ReactLoading from 'react-loading';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      }, 
      status: 'notSent',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.assembleEmailString = this.assembleEmailString.bind(this);
    this.sendEmail = this.sendEmail.bind(this);  
    this.SubmitButton = this.SubmitButton.bind(this);
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
    this.sendEmail();
  }
  sendEmail(){
    const { name, email, phone, message } = this.state.form;
    const url = '/api/mail_handler.php';
    const url = 'http://localhost:8005/mail_handler.php';
    axios.post(url, {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }).then(()=>{
      this.setState(
          {...this.state, status: 'sent'}
        )
      });
    //Next line runs before asyncronous mail sending is returned
    this.setState(
      { ...this.state, status: 'waiting' }
    )
  } 
  SubmitButton(props){
    if(props.status === 'waiting')
      return(
        <div className='waitingIcon'>
          <ReactLoading type='cylon' color='#6d6c6c' height='1rem' width='4rem' />
        </div>
      ) 
    else if(props.status === 'sent'){
      return <h3>Sent</h3>;
    }
    return <button type="submit">Submit</button>;
  }
  render() {
    const { name, email, phone, message } = this.state.form;

    return (
      <div className="contactSection mt-3 flex-column justify-content-center d-flex">
          <div className="row">
            <div className="col-2"></div>
            <div className="container col-5 border-right mt-5 contactForm">
              <ValidatorForm ref="form" onSubmit={this.handleSubmit} instantValidate={false}>
                <Field name="name" label="Name:" type="text" value={name} onChange={this.handleInputChange} validators={['required']} errorMessages='this field is required'/>
                <Field name="email" label="Email:" type="text" value={email} onChange={this.handleInputChange} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
                <Field name="phone" label="Phone:" type="tel" value={phone} onChange={this.handleInputChange}/>
                <div className="form-group">
                  <label className="row justify-content-end mr-2">Comments:</label>
                <textarea name='message' className="form-control" rows="5" id="comment" value={message} onChange={this.handleInputChange}></textarea>
                </div>
                <div className="row justify-content-end mr-2">
                  <this.SubmitButton status={this.state.status}/>
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
        </div>
    )
  }
}

export default ContactForm;