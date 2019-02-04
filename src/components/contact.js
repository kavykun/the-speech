import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'qs'

export default class Donate extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
      showMessage: false,
    }

    this.editForm = this.editForm.bind(this)
  }

  editForm = ({ target: { name, value } }) => {
    this.setState({
      [name]: value || '',
    })
  }

  submitForm = () => {
    const { firstName, lastName, phone, email, message } = this.state

    const form = {
      firstName,
      lastName,
      phone,
      email,
      message,
    }

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(form),
      url: 'https://email-server-speech.herokuapp.com',
    }
    axios(options)

    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
      showMessage: true,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      message,
      showMessage,
    } = this.state

    return (
      <div id="scroll" className="container contact-container">
        <h1 className="title">Contact Us</h1>
        <div className="body">
          <div className="columns">
            <div className=" column field data-field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input is-danger"
                  type="text"
                  placeholder="First Name"
                  onChange={this.editForm}
                  value={firstName}
                  name="firstName"
                />
              </div>
            </div>
            <div className=" column field data-field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input is-danger"
                  type="text"
                  placeholder="Last Name"
                  onChange={this.editForm}
                  value={lastName}
                  name="lastName"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className=" column field data-field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  placeholder="Email"
                  onChange={this.editForm}
                  value={email}
                  name="email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
              </div>
            </div>
            <div className=" column field data-field">
              <label className="label">Phone</label>
              <div className="control">
                <input
                  className="input is-danger"
                  type="number"
                  placeholder="Phone"
                  onChange={this.editForm}
                  value={phone}
                  name="phone"
                />
              </div>
            </div>
          </div>

          <div className="field data-field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                onChange={this.editForm}
                value={message}
                name="message"
              />
            </div>
          </div>
          <button
            type="button"
            className="button contact-button"
            onClick={this.submitForm}
          >
            <h2>Send Message</h2>
          </button>
          <br />
          <br />
          {showMessage && <p>Message Sent!</p>}
        </div>
      </div>
    )
  }
}
