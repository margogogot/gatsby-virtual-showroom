import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import VideoOverlay from './video-overlay'
import IOSWarning from '../iOSWarning'
import Lightbox from './lightbox'
import styled from "styled-components"
import enterImg from './img/enter.svg'
import facebookImg from './img/facebook.svg'
import forwardImg from './img/forward-page.svg'
import linkedinImg from './img/linkedin.svg'
import twitterImg from './img/twitter.svg'
import fsLogoImg from './img/fs-logo-white.svg'
import virtualBoothBG from './img/virtual-booth-bg-1.png'
import virtualBoothBGMobile from './img/virtual-booth-bg-1.jpg'
import lineUpLogo from './img/line-up-logo-01-01.svg'
import lineUpLogoMobile from './img/line-up-logo-01-mobile.svg'
import redGradient from './img/red-gradient.svg'
import lightboxButton from './img/lightbox-button-1.svg'
import arIcons from './img/ar-ar-core-01.svg'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
const isBrowser = typeof window !== `undefined`

class WebvrShowroom extends Component {
  constructor(props) {
    super(props)

    let iOSWarning = false
    if(isBrowser){
      const ua = navigator.userAgent
      if(ua.includes('OS 15_0_2')){
        iOSWarning = true
      }
    }

    this.state = {
      overlayVisible: true,
      lightboxVisible: true,
      progress: 0,
      showiOSWarning: iOSWarning
    }
  }

  componentDidMount = () => {
    window.addEventListener("message", function(event){
      let data = JSON.parse(event.data)
      if(data.message === 'loadComplete'){
        window.removeEventListener("message", function(){})
        this.setState({
          lightboxVisible: false
        })
      }else if(data.message === 'progress'){
        this.setState({
          progress: data.value
        })
      }else if(data.message === 'openLightbox'){
        this.setState({
          lightboxVisible: true
        })
      }
    }.bind(this))
  }

  onEnter = () => {
    this.setState({
      overlayVisible: false
    })
  }

  render() {
    let overlayVisibleClass = ''
    let lightbox = ''
    let iframe = ''
    let iOSWarning = null
    if(this.state.showiOSWarning && !this.state.overlayVisible){
      // overlayVisibleClass = ' hidden'
      iOSWarning = <IOSWarning onClose={(e)=>{
        this.setState({
          showiOSWarning: false,
          overlayVisible: true
        })
      }} />
    }

    if(!this.state.overlayVisible && !this.state.showiOSWarning){
      lightbox = <Lightbox onClose={(e)=>{this.setState({
        lightboxVisible: false
      })}}
      overlayVisible={this.state.lightboxVisible}
      progress={this.state.progress} />
      overlayVisibleClass = ' hidden'
      let url = 'https://virtual-showroom.forms-surfaces.net/app1k16/index.html'
      iframe = <div className='iframe-wrapper'>
        <iframe src={url} title="Virtual Showroom" />
        <div className='lightbox-button-linia' onClick={(e)=>{
          this.setState({
            lightboxVisible: true
          })
        }} />
      </div>
    }

    return (
      <BannerWrapper id='virtual-showroom'>
      {iOSWarning}
      {lightbox}
      <div className={'hp-overlay'+overlayVisibleClass}>
        <div className='line-up-logo' onClick={this.onEnter} />
        <div className='enter-block' onClick={this.onEnter}>
          <div className="end-button">
            <button className="hp-enter-button">
              ENTER CONTEST
            </button>
          </div>
        </div>
        <div className="hp-enter-buttons">
          <EmailShareButton
          url="https://www.forms-surfaces.com/showroom"
          subject="Forms+Surfaces Virtual Showroom"
          body="Explore. Configure. Visualize. ​Step into our virtual showroom to interactively view our newest site furniture and outdoor lighting designs and preview new products launching in the weeks and months ahead."
          target="_PARENT"
          >
            <img src={forwardImg} alt="Forward" />
          </EmailShareButton>
          <FacebookShareButton
          url="https://www.forms-surfaces.com/showroom"
          quote="Explore. Configure. Visualize. ​Step into our virtual showroom to interactively view our newest site furniture and outdoor lighting designs and preview new products launching in the weeks and months ahead.">
            <img src={facebookImg} alt="Facebook" />
          </FacebookShareButton>
          <LinkedinShareButton
          title="Forms+Surfaces Virtual Showroom"
          url="https://www.forms-surfaces.com/showroom"
          source="https://www.forms-surfaces.com"
          summary="Explore. Configure. Visualize. ​Step into our virtual showroom to interactively view our newest site furniture and outdoor lighting designs and preview new products launching in the weeks and months ahead."
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
        </div>
        <div className="arIcons" />
      </div>
        {iframe}

      </BannerWrapper>
    )
  }
}

const BannerWrapper = styled.section`
  position: relative;
  .iframe-wrapper {
    width: 100%;
    height: 100%;
    max-height: 100%;
    /* min-height: 100%; */
    border: none;
    margin: 0px;
    display: block;
    position: absolute;
    top:0px;
    bottom: 0px;
  }
  .lightbox-button-linia {
    position: absolute;
    left: 15px;
    bottom: 15px;
    z-index: 0;
    background-image: url(${lightboxButton});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 9rem;
    height: 3rem;
    cursor: pointer;
  }
  .hp-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    min-width: 500px;
    z-index:3;
    background: #92a4b2;
    transition: left 2s linear, top 1s linear;
  }
  .hp-overlay:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    overflow: visible;
    height: 75vh;
    background-image: url(${virtualBoothBG});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
  .hp-overlay.hidden{
    top: -200vh;
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
  .line-up-logo {
    background-image: url(${lineUpLogoMobile});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: contain;
    height: 40vh;
    min-height: 300px;
    width: calc(100% - 2rem);
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 4;
  }
  .enter-block {
    height: 8vh;
    width: 48vw;
    position: absolute;
    top: 10vh;
    right: 0px;
    z-index: 4;
    cursor: pointer;
  }
  .enter-block:before {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    background-image: url(${redGradient});
    background-position: center center;
    background-repeat: repeat-y;
    background-size: 100%;
    z-index: -1;
  }
  .fs-logo {
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: calc(50% - 1.5rem);
    top: calc(50vh - 1.5rem);
  }
  .hp-enter-buttons{
    padding-top: .5rem;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 29vh;
    min-width: 100px;
    z-index: 10;
    justify-content: space-between;
  }
  .end-button,
  .hp-enter-buttons {
    display: flex;
  }
  .end-button {
    width: 100%;
    height: 100%;
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
    font-size: .8rem;
    line-height: 2.1rem;
    cursor: pointer;
    outline: none;
    opacity: 1;
    transition: opacity 0.5s ease;
    font-family: "Moderat Condensed Light";
    letter-spacing: 0.1rem;
    padding-right: 0px;
    display: flex;
    height: 100%;
    padding-right: 2rem;
    align-items: center;
    line-height: 1.15;
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
    bottom: 2rem;
    left: 2rem;
    width: 120px;
    height: 20px;
    background-color: transparent;
    background-image: url(${arIcons});
    background-size: cover;
  }
  @media only screen and (min-width: 1400px) {
    .iframe-wrapper {
      height: 100%;
    }
    .hp-overlay {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100%;
      background: #92a4b2;
    }
    .hp-overlay:before{
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: 0;
      width: 80vw;
      overflow: visible;
      height: 100%;
      background-image: url(${virtualBoothBG});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin-left: -12vw;
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
    .hp-enter-buttons{
      right: unset;
      left: calc(50vw + 38vh);
    }
    .line-up-logo {
      background-image: url(${lineUpLogo});
      background-position: left center;
      width: 50vw;
      left: unset;
      right: 0;
      top: 0px;
      height: 100%;
    }
    .arIcons {
      left: 50vw;
    }
    .hp-enter-buttons {

    }
    .enter-block {
      height: 8vh;
      width: 48vw;
      top: 49vh;
      right: 0px;
      z-index: 4;
      cursor: pointer;
    }
    .enter-block:before {
      content: '';
      display: block;
      width: 50%;
      position: absolute;
      top: 0px;
      right: 0px;
      height: 100%;
      background-image: url(${redGradient});
      background-position: center center;
      background-repeat: repeat-y;
      background-size: 100%;
      z-index: -1;
    }
  }
  @media only screen and (min-width: 1600px) {
    .hp-enter-button{
      font-size: 1.1rem;
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
