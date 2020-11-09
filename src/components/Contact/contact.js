import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../Button/button'
import fetch from 'node-fetch'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formVisible: true,
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      phone: '',
      zipcode: '',
      comments: '',
      updates: '',
    }
  }

  handleSubmit = e => {
    console.log(this.state)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { "form-name": "contact", ...this.state }
    })
      .then(() => {
        this.setState({
          formVisible: false
        })
      })
      .catch(error => alert(error));

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render(){
    let {formTitle, subtitle} = this.props
    const { firstName,
      lastName,
      firmName,
      title,
      email,
      phone,
      zipcode,
      country,
      comments,
      updates,
      formVisible} = this.state
    let successMessage = ''
    if(!formVisible){
      successMessage = <div className="success-message">
      <h2>Thanks!</h2>
      <p>We received your information.</p>
      </div>
    }
    return(
      <ContactWrapper id="contact">
        {successMessage}
        <div className="content-container">
          <h3>{formTitle}</h3>
          <p>{subtitle}</p>
          <form name="contact"
          netlify="true"
          data-netlify-honeypot="website"
          onSubmit={this.handleSubmit}
          >
          <div className="contact-row">
            <div className="contact-column">
              <p>Our Territory Managers are ready to assist you with any questions or projects.  Just fill out the form to right and we will get back to you ASAP.</p>
              <p>-OR- connect directly with your local Forms+Surfaces contact:</p>
              <h3>Forms+Surfaces</h3>
              <p>US Headquarters</p>
              <p>
                <a id="contact-phone" href="tel:+1 800 4510410">T +1 800 4510410</a><br/>
                <a id="contact-mobile" href="tel:+1 412 7819003">M +1 412 7819003</a><br/>
                <a id="contact-fax" href="tel:+1 412 7817840">F +1 412 7817840</a><br/>
                <a id="contact-email" href="mailto:sales@forms-surfaces.com">sales@forms-surfaces.com</a><br/>
                <a id="contact-website" href="https://www.forms-surfaces.com/?utm_source=microsite&amp;utm_content=112019-fs-logo&amp;utm_campaign=us-elevator-interiors&amp;azure=b" target="_blank">www.forms-surfaces.com</a>
              </p>
            </div>
            <div className="contact-column">
              <p>Provide us with your information and details and we will get back to you.</p>
                <input type="hidden" name="website" />
                <div className="form-row">
                  <div className="input-area">
                    <input
                      type="text"
                      name="firstName"
                      aria-label="First Name"
                      required
                      autoComplete="off"
                      placeholder="First Name"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="column">
                    <div className="input-area">
                      <input
                        type="text"
                        name="lastName"
                        aria-label="Last Name"
                        required
                        autoComplete="off"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="input-area">
                    <input
                      type="text"
                      name="firmName"
                      aria-label="Firm Name"
                      required
                      autoComplete="off"
                      placeholder="Firm Name"
                      value={firmName}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-area">
                    <input
                      type="text"
                      name="title"
                      aria-label="Title"
                      required
                      autoComplete="off"
                      placeholder="Title"
                      value={title}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-area">
                    <input
                      type="email"
                      name="email"
                      aria-label="Email"
                      required
                      autoComplete="off"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-area">
                    <input
                      type="tel"
                      name="phone"
                      aria-label="Phone"
                      required
                      autoComplete="off"
                      placeholder="Phone"
                      value={phone}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-area">
                    <input
                      type="text"
                      name="country"
                      aria-label="Country"
                      required
                      autoComplete="off"
                      placeholder="Country"
                      value={country}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-area">
                    <input
                      type="text"
                      name="zipcode"
                      aria-label="Zip / Postal Code"
                      required
                      autoComplete="off"
                      placeholder="Zip / Postal Code"
                      value={zipcode}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-area wide">
                    <textarea
                      type="text"
                      name="comments"
                      rows="5"
                      required
                      autoComplete="off"
                      aria-label="Message"
                      placeholder="Tell us more:"
                      value={comments}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-column">
            <div className="input-area checkbox-area position-bottom">
              <input
                type="checkbox"
                name="updates"
                aria-label="Notify me when new Forms+Surfaces products are launching."
                checked={updates}
                onChange={this.handleChange}
              />
              <label for="updates">Notify me when new Forms+Surfaces products are launching.</label>
            </div>
            </div>
            <div className="contact-column">
              <div className="input-area button-area">
                <input label="Submit Information" cta="Submit Information" type="submit" value="Submit Information" />
              </div>
            </div>
            </div>
          </form>
        </div>
      </ContactWrapper>
    )
  }
}

const ContactWrapper = styled.section`
  padding: 100px 30px;
  background: #ffffff;
  color: #999999;
  position: relative;
  .success-message{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: #ffffff;
    z-index: 10;
    flex-direction: column;
    align-items: center;
  }
  .content-container {
    width: 100%;
    margin: 0 auto;
    position: relative;
    h3 {
      text-align: left;
      color: #999999;
      text-transform: none;
      letter-spacing: normal;
      font-weight: 600;
      margin-bottom: 0px;
      font-family: "Arial",sans-serif;
      @media (min-width: 768px) {
        text-align: left;
      }
    }
    p {
      font-size: .98rem;
    }
    a {
      color: #999999;
      text-decoration: none;
    }
    >p {
      margin-top: .5rem;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: solid 3px #999999;
      @media (min-width: 768px) {
        text-align: left;
      }
    }
    .form-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      >div {
        width: calc(50% - 30px);
      }
      >div.wide{
        width: 100%;
      }
    }
    .contact-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      >div {
        width: 100%;
        @media(min-width: 1024px){
          width: calc(50% - 30px);
        }
      }
    }
    form {
      position: relative;
      overflow: hidden;

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: left;
          margin-bottom: 0;
        }
      }

      input:not([type="submit"]),
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.05rem;
        padding: 0px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #ffffff;
        color: #999999;
        position: relative;
        box-sizing: border-box;
        outline: none;
        border-bottom: solid 1px #999999;
        /* &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        } */
      }
      .checkbox-area {
        display: flex;
        flex-direction: row;
      }
      .position-bottom {
        margin-top: 1rem;
      }
      @media(min-width: 1024px){
        .position-bottom {
          position: absolute;
          bottom: 0px;
          margin-bottom: 0px;
        }
      }
      input[type="checkbox"]{
        border: solid 3px #999999;
        height: 1rem;
        width: 1rem !important;
        margin-right: .5rem;
        display: inline-block;
      }
      input[type="submit"] {
        color: #999999;
        background: #ffffff;
        position: relative;
        display: inline-block;
        padding: 0px 20px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 0.85rem;
        letter-spacing: 0.25rem;
        text-transform: uppercase;
        text-decoration: none;
        box-sizing: border-box;
        border: 3px solid rgb(153, 153, 153);
        z-index: 1;
        cursor: pointer;
      }
      input[type="submit"]:hover {
        color: #ffffff;
        background: #999999;
        animation: none;
      }
      input[type="submit"]:hover:before{
        display: none;
      }
      .content-name {
        position: absolute;
        top: 0px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default Contact
