import React, { Component } from 'react';
import Field from './contact_form_field';

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

  render() {
    const { firstName, lastName, phone, email } = this.state.form;

    return (
      <div className="container row">
        <div className="container col-6">
          <form onSubmit={this.handleSubmit}>
            <Field name="firstName" label="Name" type="text" value={firstName} onChange={this.handleInputChange} />
            <Field name="lastName" label="Email" type="text" value={lastName} onChange={this.handleInputChange} />
            <Field name="phone" label="Phone" type="tel" value={phone} onChange={this.handleInputChange} />
            <div class="form-group">
              <label for="comment">Comments:</label>
              <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
            <button>Add Contact</button>
          </form>
        </div>
        <div className="container col-6">
          <h1>Second Section</h1>
        </div>
      </div>
    )
  }
}

export default ContactForm;