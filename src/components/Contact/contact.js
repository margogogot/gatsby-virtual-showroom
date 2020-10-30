import React from "react"
import styled from "styled-components"
import Button from "../Button/button"

const Contact = ({ title, subtitle, id }) => {
  return (
    <ContactWrapper id="contact">
      <div className="content-container">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="contact-row">
          <div className="contact-column">
            <p>Our Territory Managers are ready to assist you with any questions or projects.  Just fill out the form to right and we will get back to you ASAP.</p>
            <p>-OR- connect directly with your local Forms+Surfaces contact:</p>
            <h3>John Patterson</h3>
            <p>Territory Manager  |  Eastern Pennsylvania  |  Delaware  |  New Jersey </p>
            <p>T 		+800.451.0410</p>
            <p>M 	+973.934.8732</p>
            <p>F 		+412.385.4715</p>
            <p>john.patterson@forms-surfaces.com</p>
            <p>www.forms-surfaces.com</p>
          </div>
          <div className="contact-column">
            <p>Provide us with your information and details and we will get back to you.</p>
            <form name="contact"
            netlify="true"
            action="#thanks"
            data-netlify-honeypot="website">
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
                  />
                </div>

              </div>



              <div className="input-area button-area">
                <Button label="Submit Information" cta="Submit Information" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  padding: 100px 30px;
  background: #ffffff;
  color: #999999;

  .content-container {
    width: 100%;
    margin: 0 auto;

    h3 {
      text-align: left;
      color: #999999;
      text-transform: none;
      letter-spacing: normal;
      font-weight: 200;
      margin-bottom: 0px;
      font-family: "Arial",sans-serif;
      @media (min-width: 768px) {
        text-align: left;
      }
    }
    p {
      font-size: .98rem;
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

      input,
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

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;

        /* &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, #f441a5, #03a9f4);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        } */
      }
      button {
        color: #999999;
        background: #ffffff;
      }
      button:hover {
        color: #ffffff;
        background: #999999;
        animation: none;
      }
      button:hover:before{
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
