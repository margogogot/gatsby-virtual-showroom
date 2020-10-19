import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const WebvrShowroom = () => {

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerWrapper>
      <iframe src="https://www.eaxps.presentwel.com/vsr3da/v1/" />
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
  iframe {
    width: 100vw;
    height: 100vh;
    border: none;
    margin: 0px;
    display: block;
  }
`

export default WebvrShowroom
