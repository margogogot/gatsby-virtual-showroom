import React, { Component } from 'react'
import styled from 'styled-components'
import closeIcon from './img/close-icon.svg'
import isBrowser from '../../utils/misc'
import ClickAnimation from './click-animation'
import Slider from 'react-slick'
import liniaLightboxTitle from './img/linia-lightbox-title.svg'
import liniaLightboxTitleMobile from './img/linia-lightbox-title-mobile.svg'
import liniaStep1 from './img/linia-step-1.svg'
import liniaStep2 from './img/linia-step-2.svg'
import liniaStep3 from './img/linia-step-3.svg'
import redInsta from './img/red-insta.svg'

class Lightbox extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  onEnter = () => {
    this.props.onClose()
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    let lightbox = <LightboxWrapper>
      <div className={'lightboxOverlay'}>
        <div className='close-overlay' onClick={this.onEnter} />
        <div className='align-right'>
          <button onClick={this.onEnter} className='close-button'>
            <img src={closeIcon} />
          </button>
        </div>
        <div className='content-wrapper'>

          <div className='col'>
            <div className='lightbox-title' />
            <h2>HOW TO ENTER?</h2>
            <p>Find yourself in line to win a Linia Side Table and two Linia Cafe Chairs just by posting on <a href='http://instagram.com/forms_surfaces' target='_blank'>Instagram.</a> It's that easy!</p>
            <Slider {...settings} >
              <div>
                <img src={liniaStep1} />
                <h2>CREATE | 1 of 3</h2>
                <p>Explore our <span className='red'>Virtual Booth</span>. Have fun browsing through the various islands and customizing F+S products.</p>
              </div>
              <div>
                <img src={liniaStep2} />
                <h2>CAPTURE | 2 of 3</h2>
                <p>Click on your favorite products and use the <span className='red'>AR feature</span> to take a photo of your 2 favs in a creative background of your choice (go wild!).</p>
              </div>
              <div>
                <img src={liniaStep3} />
                <h2>SHARE | 3 of 3</h2>
                <p>Follow <a href='http://instagram.com/forms_surfaces' target='_blank'>@forms_surfaces</a> on <a href='http://instagram.com/forms_surfaces' target='_blank'>Instagram</a> and post your product 'lineup' to your story or feed with the hashtag <a href='https://www.instagram.com/explore/tags/lineupforlinia/' target='_blank'>#LINEupforLinia</a>. Don't forget to tag us and a friend in your posts to complete your entry!</p>
              </div>
            </Slider>
            <div className='step-row'>
              <div className='step'>
                <img src={liniaStep1} />
                <h2>CREATE</h2>
                <p>Explore our <span className='red'>Virtual Booth</span>. Have fun browsing through the variousislands and customizing F+S products.</p>
              </div>
              <div className='step'>
                <img src={liniaStep2} />
                <h2>CAPTURE</h2>
                <p>Click on your favorite products and use the <span className='red'>AR feature</span> to take a photo of your 2 favs in a creative background of your choice (go wild!).</p>
              </div>
              <div className='step'>
                <img src={liniaStep3} />
                <h2>SHARE</h2>
                <p>Follow <a href='http://instagram.com/forms_surfaces' target='_blank'>@forms_surfaces</a> on <a href='http://instagram.com/forms_surfaces' target='_blank'>Instagram</a> and post your product 'lineup' to your story or feed with the hashtag <a href='https://www.instagram.com/explore/tags/lineupforlinia/' target='_blank'>#LINEupforLinia</a>. Don't forget to tag us and a friend in your posts to complete your entry!</p>
              </div>
            </div>
            <div className='share-to-win'><img src={redInsta} /> <div>SHARE YOUR <span className='red'>LINEUP</span> AND GET IN LINE TO WIN!</div></div>
          </div>
        </div>
      </div>
    </LightboxWrapper>
    if(!this.props.overlayVisible){
      lightbox = null
    }

    return (
      <>
      {lightbox}
      </>
    )
  }
}

const LightboxWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  z-index: 2;
  .lightbox-title {
    background-image: url(${liniaLightboxTitleMobile});
    background-repeat: no-repeat;
    background-size: contain;
    height: 5rem;
    background-position: center center;
  }
  label {
    cursor: pointer;
  }
  h2 {
    font-family: 'Moderat Black';
    text-transform: none !important;
  }
  a,
  .red {
    color: #CE0E2D;
    font-family: 'Moderat Bold';
    font-weight: bold;
    text-decoration: none;
  }
  .underline {
    text-decoration: underline;
  }
  .step-row {
    display: none;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
  }
  .step-row .step {
    width: 30%;
  }
  .share-to-win{
    display: flex;
    font-size: 1rem;
    line-height: 1;
    font-family: 'Moderat Bold';
    font-weight: bold;
    text-decoration: none;
    align-items: flex-end;
    justify-content: flex-start;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: .5rem;
      display: inline-block;
    }
  }
  .content-wrapper{
    position: relative;
    max-width: 900px;
    height: 100%;
    font-size: .8rem;
    width: 90%;
  }
  .content-wrapper>.col:first-child{
    padding-top: 2rem;
  }
  .content-wrapper .col{
    position: relative;
  }
  .close-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 0;
    cursor: pointer;
  }
  .lightboxOverlay{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    video {
      height: auto;
      width: 100%;
      outline: none;
    }
  }

  .close-button{
    background: transparent;
    outline: none;
    cursor: pointer;
    border: none;
  }
  .close-button img{
    width: 30px;
    height: 30px;
  }
  .align-right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: -53px;
    z-index: 100;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .slick-slider .slick-list .slick-slide img {
    width: 60%;
    margin: 0 auto;
  }
  .slick-slider {
    .slick-arrow {
      top: calc(35% - 50px);
    }
  }
  @media only screen and (min-width: 760px) {
    .slick-slider {
      display: none;
    }
    .step-row {
      display: flex;
    }
    .content-wrapper{
      width: 70%;
    }
    .content-wrapper .col:first-child{
      padding-right: 0px;
    }
    .videoOverlay{
      video {
        padding: 30px;
      }
    }
    .share-to-win {
      font-size: 1.7rem;
    }
    .lightbox-title {
      background-image: url(${liniaLightboxTitle});
    }
  }
`

export default Lightbox
