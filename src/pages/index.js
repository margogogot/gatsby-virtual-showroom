import React from "react"
import Layout from "../components/layout"
import WebvrShowroom from '../components/WebvrShowroom'
import Heroes from '../components/Heroes/'
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import heroImage1 from "../images/hero-images/5.2.20_factor_chair_settings_Factor.457_09242020.jpg"
import heroImage2 from "../images/hero-images/5.2.20_factor_table_studio_Factor.TA1_.408_09242020.jpg"
import factorChair1 from '../images/hero-images/factor-chair.png'
import factorChair2 from '../images/hero-images/factor-chair-2.png'
import factorChair3 from '../images/hero-images/factor-chair-3.png'
import aptosPedestrian1 from '../images/hero-images/aptos-pedestrian.png'
import aptosPedestrian2 from '../images/hero-images/aptos-pedestrian-2.png'
import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>

      <WebvrShowroom/>
      <Heroes>
        <div
        label="Factor Chair"
        bigImage={heroImage1}
        heroId="factor-chair"
        >
          <div bigImage={factorChair1} bgColor='#8c4131'>
            <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility. </p>
            <h2 className='hero-title'>Factor Chair</h2>
            <div className='heroTextInner'>
              <ul>
                <li>Tubular stainless steel frames with a durable powdercoat finish</li>
                <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC 100% Cumaru or FSC 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
                <li>Optional armrests</li>
                <li>Generally stackable to four high</li>
                <li>Chairs with and without arms can be stacked together</li>
                <li>Freestanding; black nylon glides on chair feet</li>
                <li>High recycled content; highly recyclable</li>
                <li>Suitable for interior and exterior applications</li>
              </ul>
            </div>
            <p><a href="#">MORE INFO</a></p>
          </div>
          <div bigImage={factorChair2} bgColor='#434a3e'>
            <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility. </p>
            <h2 className='hero-title'>Factor Chair</h2>
            <div className='heroTextInner'>
              <ul>
                <li>Tubular stainless steel frames with a durable powdercoat finish</li>
                <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC 100% Cumaru or FSC 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
                <li>Optional armrests</li>
                <li>Generally stackable to four high</li>
                <li>Chairs with and without arms can be stacked together</li>
                <li>Freestanding; black nylon glides on chair feet</li>
                <li>High recycled content; highly recyclable</li>
                <li>Suitable for interior and exterior applications</li>
              </ul>
            </div>
            <p><a href="#">MORE INFO</a></p>
          </div>
          <div bigImage={factorChair3} bgColor="#464649">
            <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility. </p>
            <h2 className='hero-title'>Factor Chair</h2>
            <div className='heroTextInner'>
              <ul>
                <li>Tubular stainless steel frames with a durable powdercoat finish</li>
                <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC 100% Cumaru or FSC 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
                <li>Optional armrests</li>
                <li>Generally stackable to four high</li>
                <li>Chairs with and without arms can be stacked together</li>
                <li>Freestanding; black nylon glides on chair feet</li>
                <li>High recycled content; highly recyclable</li>
                <li>Suitable for interior and exterior applications</li>
              </ul>
            </div>
            <p><a href="#">MORE INFO</a></p>
          </div>
        </div>
        <div
        label="Aptos Pedestrian"
        bigImage={aptosPedestrian1}
        heroId="aptos-pedestrian"
        >
          <div bigImage={aptosPedestrian1} bgColor='#918f8a'>
            <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility. </p>
            <h2 className='hero-title'>Aptos Pedestrian</h2>
            <div className='heroTextInner'>
              <ul>
                <li>Tubular stainless steel frames with a durable powdercoat finish</li>
                <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC 100% Cumaru or FSC 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
                <li>Optional armrests</li>
                <li>Generally stackable to four high</li>
                <li>Chairs with and without arms can be stacked together</li>
                <li>Freestanding; black nylon glides on chair feet</li>
                <li>High recycled content; highly recyclable</li>
                <li>Suitable for interior and exterior applications</li>
              </ul>
            </div>
            <p><a href="#">MORE INFO</a></p>
          </div>
          <div bigImage={aptosPedestrian2} bgColor='#669999'>
            <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility. </p>
            <h2 className='hero-title'>Aptos Pedestrian</h2>
            <div className='heroTextInner'>
              <ul>
                <li>Tubular stainless steel frames with a durable powdercoat finish</li>
                <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC 100% Cumaru or FSC 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
                <li>Optional armrests</li>
                <li>Generally stackable to four high</li>
                <li>Chairs with and without arms can be stacked together</li>
                <li>Freestanding; black nylon glides on chair feet</li>
                <li>High recycled content; highly recyclable</li>
                <li>Suitable for interior and exterior applications</li>
              </ul>
            </div>
            <p><a href="#">MORE INFO</a></p>
          </div>
        </div>
      </Heroes>
      <Contact
        id="contact"
        title="Contact Us"
        subtitle=""
      />
    </Layout>
  </>
)
