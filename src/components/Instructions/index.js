import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import instructionTitle from './img/instruction-title.svg'
import lineLeft from './img/line-left.svg'
import lineRight from './img/line-right.svg'
import verticalLine from './img/vertical-line.svg'
import liniaStep1 from '../WebvrShowroom/img/linia-step-1.svg'
import liniaStep2 from '../WebvrShowroom/img/linia-step-2.svg'
import liniaStep3 from '../WebvrShowroom/img/linia-step-3.svg'
import redInsta from '../WebvrShowroom/img/red-insta.svg'
import { Link, animateScroll as scroll } from 'react-scroll'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayVisible: true,
      lightboxVisible: true
    }
  }

  onEnter = () => {
    this.setState({
      overlayVisible: false
    })
  }

  render() {

    return (
      <InstructionsWrapper>
        <div className="instructions-title" />
        <div className="instruction-lines" />
        <div className="instructionsCol">
          <div className="instructionsRow">
            <div className="vertical-line" />
            <h2>HOW TO ENTER?</h2>
            <p>Find yourself in line to win a Linia Side Table and two Linia Café Chairs just by posting on <a href="http://instagram.com/forms_surfaces" target="_blank">Instagram</a>. It’s that easy!</p>
            <div className='step-row'>
              <div className='step'>
                <img src={liniaStep1} />
                <h2>CREATE</h2>
                <p>Create your ideal F+S product 'lineup' using our <Link
                          activeClass="active"
                          to={'virtual-showroom'}
                          className='underline'
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          key={99}
                      >Virtual Booth</Link>. Customize away!</p>
              </div>
              <div className='step'>
                <img src={liniaStep2} />
                <h2>CAPTURE</h2>
                <p>Capture an image of your favorite F+S product using the <span className='red'>AR feature</span> in a creative background of your choice.</p>
              </div>
              <div className='step'>
                <img src={liniaStep3} />
                <h2>SHARE</h2>
                <p>Share your F+S ‘lineup’ to your Instagram story or feed with the hashtag <a href='https://www.instagram.com/explore/tags/lineupforlinia/' target='_blank'>#LINEupforLinia</a>. Don’t forget to follow <a href='http://instagram.com/forms_surfaces' target='_blank'>@forms_surfaces</a> and tag us to complete your entry!</p>
              </div>
            </div>
            <p>Start with exploring new F+S product lines in our <span className='red'>Virtual Booth</span>. Have fun mixing & matching material and product options!</p>
            <p>Use our <span className='red'>augmented reality</span> feature and snap photos of your perfect lineup in an ideal setting… Don’t hesitate to give it your most creative shot.</p>
            <p>Share your <span className='red'>lineup</span> featuring your favorite product on Instagram: Follow <a href="http://instagram.com/forms_surfaces" target="_blank">@forms_surfaces</a> and post your product ‘lineup’ to your story or feed with the hashtag <a href='https://www.instagram.com/explore/tags/lineupforlinia/' target='_blank'>#LINEupforLinia</a>. Don’t forget to tag us in your posts to complete your entry!</p>
            <p>Once your Instagram post is published, you will be entered for a chance to win your very own pair of Linia Café Chairs and a Linia Side Table.</p>
            <p>Oh, and the bonus? We will donate $1 per entry to <a href='http://instagram.com/directrelief' target='_blank'>@directrelief</a> towards international frontline healthcare workers!</p>
          </div>
          <div className="instructionsRow">
            <h2>GOING TO ASLA 2021 IN NASHVILLE?</h2>
            <p>Line up by ASLA <span className='red'>Booth #1501</span> and experience Linia for yourself.</p>
            <p>Posts will need to be available on a public Instagram account in order to be entered in the giveaway.</p>
            <p>Giveaway ends 11/21. Winner will be notified on 11/23.</p>
            <p><a href="/pdf/Rules_ASLA 2021_LINEup.pdf" download style={{
              textDecoration: 'underline'
            }}>Download contest rules here</a></p>
            <h2 style={{display: 'flex', alignItems: 'baseline', gap: '.75rem', letterSpacing: '0.001rem', marginTop: '4rem'}}>
            <img src={redInsta} style={{width: '2.5rem', display: 'inline-block'}} /> <span>SHARE YOUR <span className='red' style={{fontFamily: 'Moderat Black'}}>LINEUP</span> AND GET IN LINE TO WIN!</span>
            </h2>
            <div id="curator-feed-new-feed-layout">
              <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a>
            </div>
          </div>
        </div>
      </InstructionsWrapper>
    )
  }
}

const InstructionsWrapper = styled.section`
  position: relative;
  padding: 4rem 2rem;
  color: #666666;
  height: auto !important;
  a {
    cursor: pointer;
    &.underline {
      text-decoration: underline;
    }
  }
  .instructions-title {
    background-image: url(${instructionTitle});
    background-repeat: no-repeat;
    background-position: left center;
    height: 2rem;
    margin: 1rem 0;
  }
  .instruction-lines,
  .instructionsCol {
    display: flex;
    flex-direction: column;
  }
  .instructionsRow {
    width: 100%;
  }
  .instruction-lines {
    height: 15px;
    width: 100%;
    background: rgb(206,14,45);
    background: linear-gradient(270deg, rgba(206,14,45,1) 0%, rgba(255,255,255,0) 90%, rgba(255,255,255,0) 100%);
  }
  a,
  .red {
    color: #CE0E2D;
    font-family: 'Moderat Bold';
    font-weight: bold;
    text-decoration: none;
  }
  h2 {
    color: #aaaaaa;
  }
  .step-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  .step-row .step {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    .step-row {
      flex-direction: row;
    }
  }
  @media only screen and (min-width: 900px) {
    .instruction-lines {
      background: radial-gradient(circle, rgba(206,14,45,1) 0%, rgba(255,255,255,0) 90%, rgba(255,255,255,0) 100%);
    }
    .instructions-title {
      margin: 1rem 2rem;
    }
    .instructionsCol {
      flex-direction: row;
      gap: 12rem;
      padding: 0 2rem;
    }
    .instructionsRow {
      width: 50%;
      position: relative;
      .vertical-line {
        content: '',
        display: block;
        width: 15px;
        height: 100%;
        position: absolute;
        top: 0px;
        right: calc(-6rem - (15px / 2));
        background: linear-gradient(180deg, rgba(206,14,45,1) 0%, rgba(255,255,255,0) 90%, rgba(255,255,255,0) 100%);
      }
    }
    .step-row .step {
      width: 30%;
    }

  }
  @media only screen and (min-width: 2000px){

  }
`

export default Instructions
