import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import VideoOverlay from './video-overlay'
import Lightbox from './lightbox'
import { UserAgent } from 'react-useragent'
import styled from "styled-components"
import enterImg from './img/enter.svg'
import facebookImg from './img/facebook.svg'
import forwardImg from './img/forward-page.svg'
import linkedinImg from './img/linkedin.svg'
import twitterImg from './img/twitter.svg'
import fsLogoImg from './img/fs-logo-white.svg'
import virtualBoothBG from './img/virtual-booth-bg-01.jpg'
import virtualBoothBGMobile from './img/virtual-booth-bg-mobile.jpg'
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
class WebvrShowroom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayVisible: true,
      lightboxVisible: true,
      progress: 0
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


    if(!this.state.overlayVisible){
      console.log(this.state.progress)
      lightbox = <Lightbox onClose={(e)=>{this.setState({
        lightboxVisible: false
      })}}
      overlayVisible={this.state.lightboxVisible}
      progress={this.state.progress} />
      overlayVisibleClass = ' hidden'
      iframe =
      <UserAgent render={({ ua }) => {
        let url = 'https://fs-virtual-showroom.s3.amazonaws.com/app1k16/index.html'
        return (<div className='iframe-wrapper'>
          <iframe src={url} title="Virtual Showroom" />
          <div className='lightbox-button-linia' onClick={(e)=>{
            this.setState({
              lightboxVisible: true
            })
          }} />
        </div>)
      }} />
    }

    return (
      <BannerWrapper id='virtual-showroom'>
      {lightbox}
      <div className={'hp-overlay'+overlayVisibleClass}>
        <div className='line-up-logo' />
        <div className='enter-block'>
          <div className="end-button">
            <button onClick={this.onEnter} className="hp-enter-button">
              ENTER
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
    border: none;
    margin: 0px;
    display: block;
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
    width: 100vw;
    height: 100vh;
    z-index:3;
    background-image: url(${virtualBoothBGMobile});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #585858;
    transition: left 2s linear, top 1s linear;
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
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 4;
  }
  .enter-block {
    background-image: url(${redGradient});
    background-position: center center;
    background-repeat: repeat-y;
    background-size: 100%;
    height: 8vh;
    width: 48vw;
    position: absolute;
    top: 49vh;
    right: 0px;
    z-index: 4;
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
    font-size: 1.1rem;
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
  @media only screen and (min-width: 900px) {
    .hp-overlay {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background-image: url(${virtualBoothBG});
      background-repeat: no-repeat;
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
      right: 50vw;
    }
    .line-up-logo {
      background-image: url(${lineUpLogo});
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
