import React from "react"
import styled from "styled-components"
import Button from "../Button/button"

const Contact = ({ title, subtitle, id }) => {
  return (
    <ContactWrapper id="contact">
      <div className="content-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <form name="contact"
        netlify="true"
        action="#thanks"
        data-netlify-honeypot="website">
          <input type="hidden" name="website" />
          <div className="input-area">
            <input
              type="text"
              name="firstName"
              aria-label="First Name"
              required
              autoComplete="off"
              placeholder="FIRST NAME"
            />
          </div>
          <div className="input-area">
            <input
              type="text"
              name="lastName"
              aria-label="Last Name"
              required
              autoComplete="off"
              placeholder="LAST NAME"
            />
          </div>
          <div className="input-area">
            <input
              type="email"
              name="email"
              aria-label="Email"
              required
              autoComplete="off"
              placeholder="EMAIL"
            />
          </div>

          <div className="input-area">
            <textarea
              type="text"
              name="comments"
              rows="5"
              required
              autoComplete="off"
              aria-label="Message"
              placeholder="MESSAGE"
            />
          </div>

          <div className="input-area button-area">
            <Button label="Send Contact Form" cta="Send" type="submit" />
          </div>
        </form>
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

    h2 {
      text-align: left;
      color: #999999;

      @media (min-width: 768px) {
        text-align: center;
      }
    }
    p {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        text-align: center;
      }
    }

    form {
      position: relative;
      overflow: hidden;

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
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
        color: #ffffff;
        background: #999999;
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
