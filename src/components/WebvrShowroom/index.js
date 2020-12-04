import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import VideoOverlay from './video-overlay'
import { UserAgent } from 'react-useragent'
import styled from "styled-components"
import enterImg from './img/enter.svg'
import facebookImg from './img/facebook.svg'
import forwardImg from './img/forward-page.svg'
import linkedinImg from './img/linkedin.svg'
import twitterImg from './img/twitter.svg'
import fsLogoImg from './img/fs-logo-white.svg'
import vaslaHomeRed from './img/vasla-home-red-left.jpg'
import vaslaHomeGrey from './img/vasla-home-grey-right.jpg'
import vaslaHomeGrey1 from './img/vasla-home-grey-1-bottom.jpg'
import vaslaHomeRed1 from './img/vasla-home-red-1-top.jpg'
import arIcons from './img/ar-ar-core-01.svg'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
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
    let videoOverlay = ''
    let iframe = ''
    if(!this.state.overlayVisible){
      videoOverlay = <VideoOverlay/>
      overlayVisibleClass = ' hidden'
      iframe =
      <UserAgent render={({ ua }) => {
        console.log(ua)
        let url = 'https://virtual-showroom.forms-surfaces.net/app1k15/index.html'
        // if(ua.mobile){
        //   url = 'https://virtual-showroom.forms-surfaces.net/pngcomp4/index-mobile.html'
        // }
        return (<iframe src={url} title="Virtual Showroom" />)
      }} />
    }

    return (
      <BannerWrapper id='virtual-showroom'>
      {videoOverlay}
      <div className={'hp-overlay'+overlayVisibleClass}>
        <img src={fsLogoImg} alt="Forms+Surfaces Inc" className="fs-logo"/>
        <div className="overlay-text-block">
          <h1>Virtual Showroom</h1>

          <div className="hp-enter-block">
            <p>Step inside our 3D showroom to interactively view our newest designs + upcoming new products</p>
            <div className="hp-enter-buttons">
              <EmailShareButton
              url="https://www.forms-surfaces.com/showroom"
              subject="Forms+Surfaces Virtual Showroom"
              body="Step inside our 3D showroom to interactively view our newest designs + upcoming new products."
              target="_PARENT"
              >
              <img src={forwardImg} alt="Forward" />
              </EmailShareButton>
              <FacebookShareButton
              url="https://www.forms-surfaces.com/showroom"
              quote="Step inside our 3D showroom to interactively view our newest designs + upcoming new products.">
              <img src={facebookImg} alt="Facebook" />
              </FacebookShareButton>
              <LinkedinShareButton
              title="Forms+Surfaces Virtual Showroom"
              url="https://www.forms-surfaces.com/showroom"
              source="https://www.forms-surfaces.com"
              summary="Step inside our 3D showroom to interactively view our newest designs + upcoming new products."
              >
              <img src={linkedinImg} alt="LinkedIn" />
              </LinkedinShareButton>
              <TwitterShareButton
              title="Forms+Surfaces Virtual Showroom"
              url="https://www.forms-surfaces.com/showroom"
              related={["@forms_surfaces"]}
              >
              <img src={twitterImg} alt="Twitter" />
              </TwitterShareButton>
              <div className="end-button">
                <button onClick={this.onEnter} className="hp-enter-button">
                  <img src={enterImg} alt="Enter"/>
                  ENTER
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={'hp-overlay2'+overlayVisibleClass}>
      <div className="arIcons" />
      </div>

        {iframe}

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
    z-index:3;
    background-image: url(${vaslaHomeRed1});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: left 2s linear, top 1s linear;
  }
  .hp-overlay2 {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 50vh;
    z-index: 2;
    background-image: url(${vaslaHomeGrey1});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: right 2s linear, bottom 1s linear;
  }
  .hp-overlay.hidden{
    top: -200vh;
  }
  .hp-overlay2.hidden{
    bottom: -200vh;
  }
  .hp-overlay h1 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    width: 100%;
    padding: 10% 10% 0;
    margin: 0 auto;
    text-align: left;
  }
  .fs-logo {
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: calc(50% - 1.5rem);
    top: calc(50vh - 1.5rem);
  }
  .hp-enter-buttons{
    border-top: solid 3px #fff;
    padding-top: .5rem;
  }
  .end-button,
  .hp-enter-buttons {
    display: flex;
  }
  .end-button {
    width: 100%;
    justify-content: flex-end;
  }
  .end-button button {
  }
  .hp-enter-buttons button {
    display: flex;
    align-items: center;
  }
  .hp-enter-buttons img{
    width: 1.25rem;
    height: 1.25rem;
    margin-right: .5rem;
  }
  iframe {
    width: 100%;
    height: 100%;
    max-height: 100%;
    border: none;
    margin: 0px;
    display: block;
  }
  .hp-enter-block{
    padding: 0 10% 0;
  }
  .hp-enter-button{
    border: none;
    background-color: transparent;
    color: #ffffff;
    font-size: 1.1rem;
    line-height: 2.1rem;
    cursor: pointer;
    outline: none;
    opacity: 1;
    transition: opacity 0.5s ease;
    font-family: "Helvetica 83 Heavy Extended";
    letter-spacing: 0.1rem;
    padding-right: 0px;
    display: flex;
    align-items: center;
  }
  .hp-enter-button:hover{
    opacity: 0.7;
  }
  .hp-enter-button img{
    width: 1.20rem;
    height: 1.20rem;
  }
  .arIcons{
    position: absolute;
    bottom: 10px;
    left: calc(50% - 60px);
    width: 120px;
    height: 20px;
    background-color: transparent;
    background-image: url(${arIcons});
    background-size: cover;
  }
  @media only screen and (min-width: 600px) {
    .arIcons{
      display: none;
    }
    .hp-overlay {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 50vw;
      height: 100vh;
      background-image: url(${vaslaHomeRed});
      background-position: center right;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .hp-overlay2 {
      position: absolute;
      bottom: 0px;
      right: 0px;
      left: auto;
      width: 50vw;
      height: 100vh;
      background-image: url(${vaslaHomeGrey});
      background-position: center left;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .hp-overlay.hidden{
      left: -200vw;
      top: 0px;
    }
    .hp-overlay2.hidden{
      right: -200vw;
      top: 0px;
    }
    .fs-logo {
      right: -1.5rem;
      top: calc(50vh - 1.5rem);
    }
    .hp-overlay h1 {
      font-size: 3.5rem;
      text-transform: uppercase;
      width: 50%;
      padding: 20% 10% 2rem;
      margin: 0;
      text-align: left;
    }
    .overlay-text-block{
      position: absolute;
      bottom: calc(50vh - 1.5rem);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  @media only screen and (min-width: 2000px){
    .hp-overlay h1 {
      font-size: 4rem;
      line-height: 4.5rem;
    }
    .fs-logo {
      width: 6rem;
      height: 6rem;
      right: -3rem;
    }
    .hp-enter-buttons img {
      height: 3rem;
      width: 3rem;
    }
    .hp-enter-button {
      font-size: 3rem;
      line-height: 4rem;
    }
  }
`

export default WebvrShowroom
