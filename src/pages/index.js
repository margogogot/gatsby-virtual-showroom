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
        />
        <div
        label="Factor Table"
        bigImage={heroImage2}
        />
      </Heroes>
      <Contact
        id="contact"
        title="Contact Us"
        subtitle=""
      />
    </Layout>
  </>
)
