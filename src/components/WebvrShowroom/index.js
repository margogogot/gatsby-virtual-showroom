import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import enterImg from './img/enter.svg'
import facebookImg from './img/facebook.svg'
import forwardImg from './img/forward-page.svg'
import linkedinImg from './img/linkedin.svg'
import twitterImg from './img/twitter.svg'
import fsLogoImg from './img/fs-logo-white.svg'

class WebvrShowroom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      overlayVisible: true
    }
  }

  onEnter = () => {
    this.setState({
      overlayVisible: false
    })
  }

  render() {
    let overlayVisibleClass = ''
    if(!this.state.overlayVisible){
      overlayVisibleClass = ' hidden'
    }
    return (
      <BannerWrapper>
      <div className={'hp-overlay'+overlayVisibleClass}>
        <h1>Virtual Showroom</h1>
        <img src={fsLogoImg} alt="Forms+Surfaces Inc" className="fs-logo"/>
        <div className="hp-enter-block">
          <p>Step inside our 3D showroom to interactively preview upcoming new products</p>
          <div className="hp-enter-buttons">
            <img src={forwardImg} alt="Forward" />
            <img src={facebookImg} alt="Facebook" />
            <img src={linkedinImg} alt="LinkedIn" />
            <img src={twitterImg} alt="Twitter" />
            <button onClick={this.onEnter} className="hp-enter-button">
              <img src={enterImg} alt="Enter"/>
              ENTER
            </button>
          </div>
        </div>
      </div>
        <iframe src="https://virtual-showroom.forms-surfaces.net/iframed_viewset_v1b5.html" id="virtual-showroom" />
      </BannerWrapper>
    )
  }
}

const BannerWrapper = styled.section`
  position: relative;
  .hp-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 50vh;
    background-color: rgba(225,23,52,1);
    transition: left 2s ease;
    opacity: 0.8
  }
  .hp-overlay.hidden{
    left: -100vw;
  }
  .hp-overlay h1 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    width: 50%;
    padding: 10%;
  }
  .fs-logo {
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: calc(50% - 1.5rem);
    top: calc(50vh - 1.5rem);
  }
  .hp-enter-buttons img{
    width: 2rem;
    height: 2rem;
    margin-right: .5rem;
  }
  iframe {
    width: 100vw;
    height: 100vh;
    border: none;
    margin: 0px;
    display: block;
  }
  .hp-enter-block{
    padding: 0 20% 20%;
  }
  .hp-enter-button{
    border: none;
    background-color: transparent;
    color: #ffffff;
    font-size: 2rem;
    line-height: 2.1rem;
    cursor: pointer;
    outline: none;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  .hp-enter-button:hover{
    opacity: 0.7;
  }
  @media only screen and (min-width: 600px) {
    .hp-overlay {
      width: 50vw;
      height: 100vh;
    }
    .fs-logo {
      right: -1.5rem;
      top: calc(50vh - 1.5rem);
    }
    .hp-overlay h1 {
      font-size: 3rem;
      text-transform: uppercase;
      width: 50%;
      padding: 20% 20% 2rem;
    }
  }
`

export default WebvrShowroom
