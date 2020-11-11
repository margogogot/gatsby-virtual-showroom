import React from "react"
import Layout from "../components/layout"
import WebvrShowroom from '../components/WebvrShowroom'
import Heroes from '../components/Heroes/'
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Button from "../components/Button/button"
import Contact from "../components/Contact/contact"
import { Link, animateScroll as scroll } from 'react-scroll'

import heroImage1 from "../images/hero-images/5.2.20_factor_chair_settings_Factor.457_09242020.jpg"
import heroImage2 from "../images/hero-images/5.2.20_factor_table_studio_Factor.TA1_.408_09242020.jpg"
import factorChair1 from '../images/hero-images/factor-chair-1.png'
import factorChair2 from '../images/hero-images/factor-chair-2.png'
import factorChair3 from '../images/hero-images/factor-chair-3.png'
import aptosPedestrian1 from '../images/hero-images/aptos-pedestrian-1.png'
import aptosPedestrian2 from '../images/hero-images/aptos-pedestrian-2.png'
import aptosPedestrian3 from '../images/hero-images/aptos-pedestrian-3.png'
import aptosBollard1 from '../images/hero-images/aptos-bollard-1.png'
import aptosBollard2 from '../images/hero-images/aptos-bollard-2.png'
import aptosBollard3 from '../images/hero-images/aptos-bollard-3.png'
import radiaBollard1 from '../images/hero-images/radia-bollard-1.png'
import radiaBollard2 from '../images/hero-images/radia-bollard-2.png'
import radiaBollard3 from '../images/hero-images/radia-bollard-3.png'
import helioBollard1 from '../images/hero-images/helio-bollard-1.png'
import helioBollard2 from '../images/hero-images/helio-bollard-2.png'
import helioBollard3 from '../images/hero-images/helio-bollard-3.png'
import tonyoReceptacle1 from '../images/hero-images/tonyo-receptacle-1.png'
import tonyoReceptacle2 from '../images/hero-images/tonyo-receptacle-2.png'
import tonyoReceptacle3 from '../images/hero-images/tonyo-receptacle-3.png'
import factorTable1 from '../images/hero-images/factor-table-1.png'
import factorTable2 from '../images/hero-images/factor-table-2.png'
import factorTable3 from '../images/hero-images/factor-table-3.png'
import liniaChair1 from '../images/hero-images/linia-chair-1.png'
import liniaChair2 from '../images/hero-images/linia-chair-2.png'
import liniaChair3 from '../images/hero-images/linia-chair-3.png'

export default () => (
  <>
    <Layout>
      <WebvrShowroom/>
      <Heroes>
        <div
        label="APTOS PEDESTRIAN LIGHTING"
        heroId="aptos-pedestrian"
        >
          <div bigImage={aptosPedestrian1} bgColor='#c5c1be'>
            <h2 className='hero-title mobile-title'>APTOS PEDESTRIAN <br/>LIGHTING</h2>
            <h2 className='hero-title'>APTOS PEDESTRIAN <br/>LIGHTING</h2>
            <p>PRODUCT PREVIEW | Aptos Pedestrian Lighting blends graceful lines, performance LEDs, and the visual lightness and distinctive design of the coordinating Aptos Bollard.</p>
            <div className='heroTextInner'>
              <ul>
                <li>Fixtures consist of one or two luminaires on a 4" dia. x 12’ high pole</li>
                <li>Luminaire head is cast aluminum with an acrylic lens</li>
                <li>Extruded Aluminum powdercoated pole</li>
                <li>Cast aluminum powdercoated base</li>
                <li>Performance Cree® LEDs in 3000K warm white and 4000K neutral white with individual mounted optics</li>
                <li>Dimmable</li>
                <li>High recycled content; highly recyclable</li>
                <li>ETL and C-ETL listed for wet locations</li>
                <li>Launching in December 2020</li>
              </ul>
            </div>
            <p><a href="#contact">KEEP ME POSTED</a></p>
          </div>
          <div bigImage={aptosPedestrian2} bgColor='#918f8a'>
            <h2 className='hero-title mobile-title'>APTOS PEDESTRIAN <br/>LIGHTING</h2>
            <h2 className='hero-title'>APTOS PEDESTRIAN <br/>LIGHTING</h2>
            <p>PRODUCT PREVIEW | Aptos Pedestrian Lighting blends graceful lines, performance LEDs, and the visual lightness and distinctive design of the coordinating Aptos Bollard.</p>
            <div className='heroTextInner'>
              <ul>
                <li>Fixtures consist of one or two luminaires on a 4" dia. x 12’ high pole</li>
                <li>Luminaire head is cast aluminum with an acrylic lens</li>
                <li>Extruded Aluminum powdercoated pole</li>
                <li>Cast aluminum powdercoated base</li>
                <li>Performance Cree® LEDs in 3000K warm white and 4000K neutral white with individual mounted optics</li>
                <li>Dimmable</li>
                <li>High recycled content; highly recyclable</li>
                <li>ETL and C-ETL listed for wet locations</li>
                <li>Launching in December 2020</li>
              </ul>
            </div>
            <p><a href="#contact">KEEP ME POSTED</a></p>
          </div>
          <div bigImage={aptosPedestrian3} bgColor='#626d6f'>
            <h2 className='hero-title mobile-title'>APTOS PEDESTRIAN <br/>LIGHTING</h2>
            <h2 className='hero-title'>APTOS PEDESTRIAN <br/>LIGHTING</h2>
            <p>PRODUCT PREVIEW | Aptos Pedestrian Lighting blends graceful lines, performance LEDs, and the visual lightness and distinctive design of the coordinating Aptos Bollard.</p>
            <div className='heroTextInner'>
              <ul>
                <li>Fixtures consist of one or two luminaires on a 4" dia. x 12’ high pole</li>
                <li>Luminaire head is cast aluminum with an acrylic lens</li>
                <li>Extruded Aluminum powdercoated pole</li>
                <li>Cast aluminum powdercoated base</li>
                <li>Performance Cree® LEDs in 3000K warm white and 4000K neutral white with individual mounted optics</li>
                <li>Dimmable</li>
                <li>High recycled content; highly recyclable</li>
                <li>ETL and C-ETL listed for wet locations</li>
                <li>Launching in December 2020</li>
              </ul>
            </div>
            <p><a href="#contact">KEEP ME POSTED</a></p>
          </div>
      </div>
      <div
      label="APTOS BOLLARD"
      heroId="aptos-bollard"
      >
        <div bigImage={aptosBollard1} bgColor='#c5c1be'>
          <h2 className='hero-title mobile-title'>APTOS BOLLARD</h2>
          <h2 className='hero-title'>APTOS BOLLARD</h2>
          <p>Aptos Bollards unite the best of two worlds with solar-powered and hardwired designs and coordinate beautifully with Aptos Pedestrian Lighting.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Powdercoated cast aluminum body</li>
              <li>36" high x 6.5" diameter</li>
              <li>120°or 360° light distribution</li>
              <li>CREE® LEDs in 3000K warm white + 4000K neutral white with individual mounted optics</li>
              <li>Self-contained solar-powered bollard predictively adapts to surroundings</li>
              <li>Self-learning Solar Lighting Controller with intelligent day/night detection</li>
              <li>Solar module has high-efficiency monocrystalline cells encapsulated in high-impact UV-resistant polyurethane</li>
              <li>Solar bollard has a high-performance lithium ion phosphate battery</li>
              <li>Hardwired bollards have a 40W LED driver, are dimmable and ETL and C-ETL listed</li>
              <li>High recycled content; highly recyclable</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/aptos-bollard" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={aptosBollard2} bgColor='#434a3e'>
          <h2 className='hero-title mobile-title'>APTOS BOLLARD</h2>
          <h2 className='hero-title'>APTOS BOLLARD</h2>
          <p>Aptos Bollards unite the best of two worlds with solar-powered and hardwired designs and coordinate beautifully with Aptos Pedestrian Lighting.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Powdercoated cast aluminum body</li>
              <li>36" high x 6.5" diameter</li>
              <li>120°or 360° light distribution</li>
              <li>CREE® LEDs in 3000K warm white + 4000K neutral white with individual mounted optics</li>
              <li>Self-contained solar-powered bollard predictively adapts to surroundings</li>
              <li>Self-learning Solar Lighting Controller with intelligent day/night detection</li>
              <li>Solar module has high-efficiency monocrystalline cells encapsulated in high-impact UV-resistant polyurethane</li>
              <li>Solar bollard has a high-performance lithium ion phosphate battery</li>
              <li>Hardwired bollards have a 40W LED driver, are dimmable and ETL and C-ETL listed</li>
              <li>High recycled content; highly recyclable</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/aptos-bollard" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={aptosBollard3} bgColor='#626d6f'>
          <h2 className='hero-title mobile-title'>APTOS BOLLARD</h2>
          <h2 className='hero-title'>APTOS BOLLARD</h2>
          <p>Aptos Bollards unite the best of two worlds with solar-powered and hardwired designs and coordinate beautifully with Aptos Pedestrian Lighting.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Powdercoated cast aluminum body</li>
              <li>36" high x 6.5" diameter</li>
              <li>120°or 360° light distribution</li>
              <li>CREE® LEDs in 3000K warm white + 4000K neutral white with individual mounted optics</li>
              <li>Self-contained solar-powered bollard predictively adapts to surroundings</li>
              <li>Self-learning Solar Lighting Controller with intelligent day/night detection</li>
              <li>Solar module has high-efficiency monocrystalline cells encapsulated in high-impact UV-resistant polyurethane</li>
              <li>Solar bollard has a high-performance lithium ion phosphate battery</li>
              <li>Hardwired bollards have a 40W LED driver, are dimmable and ETL and C-ETL listed</li>
              <li>High recycled content; highly recyclable</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/aptos-bollard" target="_NEW">LEARN MORE</a></p>
        </div>
      </div>
      <div
      label="RADIA BOLLARD"
      heroId="radia-bollard"
      >
        <div bigImage={radiaBollard1} bgColor='#3F4448'>
          <h2 className='hero-title mobile-title'>RADIA BOLLARD</h2>
          <h2 className='hero-title'>RADIA BOLLARD</h2>
          <p>PRODUCT PREVIEW | The Radia Bollard integrates solar technology and performance LEDs in a distinctive cove form that’s equally enticing day and night.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Fixture consists of corrosion-resistant cast aluminum, aluminum extrusion, and acrylic lens</li>
              <li>Durable powdercoat finish</li>
              <li>36" high x 6.5" diameter</li>
              <li>Performance LEDs in 3000K warm white and 4000K neutral white with individual mounted optics</li>
              <li>Asymmetrical light distribution</li>
              <li>Solar module has high-efficiency monocrystalline cells encapsulated in high-impact UV-resistant polyurethane</li>
              <li>ETL and C-ETL listed for wet locations</li>
              <li>High recycled content; highly recyclable</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
        <div bigImage={radiaBollard2} bgColor='#29534f'>
          <h2 className='hero-title mobile-title'>RADIA BOLLARD</h2>
          <h2 className='hero-title'>RADIA BOLLARD</h2>
          <p>PRODUCT PREVIEW | The Radia Bollard integrates solar technology and performance LEDs in a distinctive cove form that’s equally enticing day and night.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Fixture consists of corrosion-resistant cast aluminum, aluminum extrusion, and acrylic lens</li>
              <li>Durable powdercoat finish</li>
              <li>36" high x 6.5" diameter</li>
              <li>Performance LEDs in 3000K warm white and 4000K neutral white with individual mounted optics</li>
              <li>Asymmetrical light distribution</li>
              <li>Solar module has high-efficiency monocrystalline cells encapsulated in high-impact UV-resistant polyurethane</li>
              <li>ETL and C-ETL listed for wet locations</li>
              <li>High recycled content; highly recyclable</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
        <div bigImage={radiaBollard3} bgColor='#877f76'>
          <h2 className='hero-title mobile-title'>RADIA BOLLARD</h2>
          <h2 className='hero-title'>RADIA BOLLARD</h2>
          <p>PRODUCT PREVIEW | The Radia Bollard integrates solar technology and performance LEDs in a distinctive cove form that’s equally enticing day and night.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Fixture consists of corrosion-resistant cast aluminum, aluminum extrusion, and acrylic lens</li>
              <li>Durable powdercoat finish</li>
              <li>36" high x 6.5" diameter</li>
              <li>Performance LEDs in 3000K warm white and 4000K neutral white with individual mounted optics</li>
              <li>Asymmetrical light distribution</li>
              <li>Solar module has high-efficiency monocrystalline cells encapsulated in high-impact UV-resistant polyurethane</li>
              <li>ETL and C-ETL listed for wet locations</li>
              <li>High recycled content; highly recyclable</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
      </div>
      <div
      label="HELIO SECURITY BOLLARD"
      heroId="helio-security-bollard"
      >
        <div bigImage={helioBollard1} bgColor='#c5c1be'>
          <h2 className='hero-title mobile-title'>HELIO BOLLARD</h2>
          <h2 className='hero-title'>HELIO BOLLARD</h2>
          <p>Helio Security Bollards offer robust protection for public spaces of all kinds with M30-P1/K4, M40-P1/K8 and M50-P1/K12 impact ratings.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel construction</li>
              <li>Satin finish; durable powdercoat finish also available</li>
              <li>Column diameter is 9.25" for M30/K4; 11.5" for M40/K8 and M50/K12</li>
              <li>Custom LED light engine with Cree® LEDs in 3000K warm white and 4000K neutral white</li>
              <li>180° or 360° light distribution options</li>
              <li>Non-illuminated options available</li>
              <li>ETL and C-ETL listed</li>
              <li>High recycled content; highly recyclable</li>
              <li>Coordinating 6" diameter Helio Bollards in illuminated, non-illuminated, and medium security core variations also available</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/helio-bollard" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={helioBollard2} bgColor='#c9c4b3'>
          <h2 className='hero-title mobile-title'>HELIO BOLLARD</h2>
          <h2 className='hero-title'>HELIO BOLLARD</h2>
          <p>Helio Security Bollards offer robust protection for public spaces of all kinds with M30-P1/K4, M40-P1/K8 and M50-P1/K12 impact ratings.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel construction</li>
              <li>Satin finish; durable powdercoat finish also available</li>
              <li>Column diameter is 9.25" for M30/K4; 11.5" for M40/K8 and M50/K12</li>
              <li>Custom LED light engine with Cree® LEDs in 3000K warm white and 4000K neutral white</li>
              <li>180° or 360° light distribution options</li>
              <li>Non-illuminated options available</li>
              <li>ETL and C-ETL listed</li>
              <li>High recycled content; highly recyclable</li>
              <li>Coordinating 6" diameter Helio Bollards in illuminated, non-illuminated, and medium security core variations also available</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/helio-bollard" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={helioBollard3} bgColor='#3f4448'>
          <h2 className='hero-title mobile-title'>HELIO BOLLARD</h2>
          <h2 className='hero-title'>HELIO BOLLARD</h2>
          <p>Helio Security Bollards offer robust protection for public spaces of all kinds with M30-P1/K4, M40-P1/K8 and M50-P1/K12 impact ratings.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel construction</li>
              <li>Satin finish; durable powdercoat finish also available</li>
              <li>Column diameter is 9.25" for M30/K4; 11.5" for M40/K8 and M50/K12</li>
              <li>Custom LED light engine with Cree® LEDs in 3000K warm white and 4000K neutral white</li>
              <li>180° or 360° light distribution options</li>
              <li>Non-illuminated options available</li>
              <li>ETL and C-ETL listed</li>
              <li>High recycled content; highly recyclable</li>
              <li>Coordinating 6" diameter Helio Bollards in illuminated, non-illuminated, and medium security core variations also available</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/helio-bollard" target="_NEW">LEARN MORE</a></p>
        </div>
      </div>
      <div
      label="TONYO RECEPTACLES"
      heroId="tonyo-receptacle"
      >
        <div bigImage={tonyoReceptacle1} bgColor='#626d6f'>
          <h2 className='hero-title mobile-title'>TONYO RECEPTACLES</h2>
          <h2 className='hero-title'>TONYO RECEPTACLES</h2>
          <p>PRODUCT PREVIEW | Tonyo Litter & Recycling Receptacles are durable, highly configurable, and offer impressive design, size, material, and indoor/outdoor flexibility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel frame</li>
              <li>Hinged side-opening door with slam latch</li>
              <li>Doors in stainless steel or with FSC® 100% Cumaru hardwood slats</li>
              <li>Durable powdercoat finish</li>
              <li>30G,36G and 60-gallon capacities available</li>
              <li>Single and dual waste stream options with corresponding liners</li>
              <li>Configurations with and without rain cover</li>
              <li>Freestanding, surface mount, or pole mount (30G)</li>
              <li>Suitable for interior and exterior applications</li>
              <li>High recycled content; fully recyclable</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
        <div bigImage={tonyoReceptacle2} bgColor='#3f4448'>
          <h2 className='hero-title mobile-title'>TONYO RECEPTACLES</h2>
          <h2 className='hero-title'>TONYO RECEPTACLES</h2>
          <p>PRODUCT PREVIEW | Tonyo Litter & Recycling Receptacles are durable, highly configurable, and offer impressive design, size, material, and indoor/outdoor flexibility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel frame</li>
              <li>Hinged side-opening door with slam latch</li>
              <li>Doors in stainless steel or with FSC® 100% Cumaru hardwood slats</li>
              <li>Durable powdercoat finish</li>
              <li>30G,36G and 60-gallon capacities available</li>
              <li>Single and dual waste stream options with corresponding liners</li>
              <li>Configurations with and without rain cover</li>
              <li>Freestanding, surface mount, or pole mount (30G)</li>
              <li>Suitable for interior and exterior applications</li>
              <li>High recycled content; fully recyclable</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
        <div bigImage={tonyoReceptacle3} bgColor='#3f4448'>
          <h2 className='hero-title mobile-title'>TONYO RECEPTACLES</h2>
          <h2 className='hero-title'>TONYO RECEPTACLES</h2>
          <p>PRODUCT PREVIEW | Tonyo Litter & Recycling Receptacles are durable, highly configurable, and offer impressive design, size, material, and indoor/outdoor flexibility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel frame</li>
              <li>Hinged side-opening door with slam latch</li>
              <li>Doors in stainless steel or with FSC® 100% Cumaru hardwood slats</li>
              <li>Durable powdercoat finish</li>
              <li>30G,36G and 60-gallon capacities available</li>
              <li>Single and dual waste stream options with corresponding liners</li>
              <li>Configurations with and without rain cover</li>
              <li>Freestanding, surface mount, or pole mount (30G)</li>
              <li>Suitable for interior and exterior applications</li>
              <li>High recycled content; fully recyclable</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
      </div>
      <div
      label="FACTOR TABLE"
      heroId="factor-table"
      >
        <div bigImage={factorTable1} bgColor='#434a3e'>
          <h2 className='hero-title mobile-title'>FACTOR TABLE</h2>
          <h2 className='hero-title'>FACTOR TABLE</h2>
          <p>Highly configurable Factor Tables coordinate with Factor Chairs and unite clean lines, simple geometry, and go-anywhere versatility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel frames with a durable powdercoat finish</li>
              <li>Tops of FSC® 100% Cumaru or FSC® 100% Teak hardwood slats or powdercoated aluminum with or without perforations</li>
              <li>Standard table size is 42" square</li>
              <li>Freestanding with adjustable levelers or surface mount</li>
              <li>Optional umbrella hole</li>
              <li>Highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/factor-table" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={factorTable2} bgColor='#626d6f' classOverride='anchorLeft'>
          <h2 className='hero-title mobile-title'>FACTOR TABLE</h2>
          <h2 className='hero-title'>FACTOR TABLE</h2>
          <p>Highly configurable Factor Tables coordinate with Factor Chairs and unite clean lines, simple geometry, and go-anywhere versatility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel frames with a durable powdercoat finish</li>
              <li>Tops of FSC® 100% Cumaru or FSC® 100% Teak hardwood slats or powdercoated aluminum with or without perforations</li>
              <li>Standard table size is 42" square</li>
              <li>Freestanding with adjustable levelers or surface mount</li>
              <li>Optional umbrella hole</li>
              <li>Highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/factor-table" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={factorTable3} bgColor='#3f4448'>
          <h2 className='hero-title mobile-title'>FACTOR TABLE</h2>
          <h2 className='hero-title'>FACTOR TABLE</h2>
          <p>Highly configurable Factor Tables coordinate with Factor Chairs and unite clean lines, simple geometry, and go-anywhere versatility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Stainless steel frames with a durable powdercoat finish</li>
              <li>Tops of FSC® 100% Cumaru or FSC® 100% Teak hardwood slats or powdercoated aluminum with or without perforations</li>
              <li>Standard table size is 42" square</li>
              <li>Freestanding with adjustable levelers or surface mount</li>
              <li>Optional umbrella hole</li>
              <li>Highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/factor-table" target="_NEW">LEARN MORE</a></p>
        </div>
      </div>
      <div
      label="FACTOR CHAIR"
      heroId="factor-chair"
      >
        <div bigImage={factorChair1} bgColor='#8c4131'>
          <h2 className='hero-title mobile-title'>FACTOR CHAIR</h2>
          <h2 className='hero-title'>FACTOR CHAIR</h2>
          <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Tubular <u>stainless steel</u> frames with a durable powdercoat finish</li>
              <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC® 100% Cumaru or FSC® 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
              <li>Optional armrests</li>
              <li>Generally stackable to four high</li>
              <li>Chairs with and without arms can be stacked together</li>
              <li>Freestanding; black nylon glides on chair feet</li>
              <li>High recycled content; highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/factor-chair" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={factorChair2} bgColor='#3f4448'>
          <h2 className='hero-title mobile-title'>FACTOR CHAIR</h2>
          <h2 className='hero-title'>FACTOR CHAIR</h2>
          <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Tubular <u>stainless steel</u> frames with a durable powdercoat finish</li>
              <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC® 100% Cumaru or FSC® 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
              <li>Optional armrests</li>
              <li>Generally stackable to four high</li>
              <li>Chairs with and without arms can be stacked together</li>
              <li>Freestanding; black nylon glides on chair feet</li>
              <li>High recycled content; highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/factor-chair" target="_NEW">LEARN MORE</a></p>
        </div>
        <div bigImage={factorChair3} bgColor='#434a3e'>
          <h2 className='hero-title mobile-title'>FACTOR CHAIR</h2>
          <h2 className='hero-title'>FACTOR CHAIR</h2>
          <p>Highly configurable Factor Chairs coordinate with Factor Tables and unite clean lines, simple geometry, and go-anywhere versatility.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Tubular <u>stainless steel</u> frames with a durable powdercoat finish</li>
              <li>Seats and backs of powdercoated formed aluminum with or without perforations; or seats of FSC® 100% Cumaru or FSC® 100% Teak hardwood slats with backs of powdercoated cast aluminum</li>
              <li>Optional armrests</li>
              <li>Generally stackable to four high</li>
              <li>Chairs with and without arms can be stacked together</li>
              <li>Freestanding; black nylon glides on chair feet</li>
              <li>High recycled content; highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
            </ul>
          </div>
          <p><a href="https://www.forms-surfaces.com/factor-chair" target="_NEW">LEARN MORE</a></p>
        </div>
      </div>
      <div
      label="LINIA CHAIR"
      heroId="linia-chair"
      >
        <div bigImage={liniaChair1} bgColor='#c9c4b3'>
          <h2 className='hero-title mobile-title'>LINIA CHAIR</h2>
          <h2 className='hero-title'>LINIA CHAIR</h2>
          <p>PRODUCT PREVIEW | Linia is a versatile, durable, moveable chair defined by crisp lines, clean geometric forms, and the option to play with material finish combinations.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Solid stainless-steel rod frames with a polished or powdercoat finish</li>
              <li>Seats and backs of powdercoated formed stainless steel with or without perforations</li>
              <li>Generally stackable to four high; black nylon stacking bumpers protect seats and backs</li>
              <li>Freestanding; black nylon glides on chair feet</li>
              <li>High recycled content; highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
        <div bigImage={liniaChair2} bgColor='#29534f'>
          <h2 className='hero-title mobile-title'>LINIA CHAIR</h2>
          <h2 className='hero-title'>LINIA CHAIR</h2>
          <p>PRODUCT PREVIEW | Linia is a versatile, durable, moveable chair defined by crisp lines, clean geometric forms, and the option to play with material finish combinations.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Solid stainless-steel rod frames with a polished or powdercoat finish</li>
              <li>Seats and backs of powdercoated formed stainless steel with or without perforations</li>
              <li>Generally stackable to four high; black nylon stacking bumpers protect seats and backs</li>
              <li>Freestanding; black nylon glides on chair feet</li>
              <li>High recycled content; highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
        <div bigImage={liniaChair3} bgColor='#8c4131'>
          <h2 className='hero-title mobile-title'>LINIA CHAIR</h2>
          <h2 className='hero-title'>LINIA CHAIR</h2>
          <p>PRODUCT PREVIEW | Linia is a versatile, durable, moveable chair defined by crisp lines, clean geometric forms, and the option to play with material finish combinations.</p>
          <div className='heroTextInner'>
            <ul>
              <li>Solid stainless-steel rod frames with a polished or powdercoat finish</li>
              <li>Seats and backs of powdercoated formed stainless steel with or without perforations</li>
              <li>Generally stackable to four high; black nylon stacking bumpers protect seats and backs</li>
              <li>Freestanding; black nylon glides on chair feet</li>
              <li>High recycled content; highly recyclable</li>
              <li>Suitable for interior and exterior applications</li>
              <li>Launching in early 2021</li>
            </ul>
          </div>
          <p><a href="#contact">KEEP ME POSTED</a></p>
        </div>
      </div>
      </Heroes>
      <Contact
        id="contact"
        formTitle="Interested in our latest and upcoming outdoor products?"
        subtitle="Connect with a local Forms+Surfaces contact"
      />
    </Layout>
  </>
)
