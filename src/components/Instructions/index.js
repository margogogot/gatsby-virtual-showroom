import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
      <div>
      </div>
    )
  }
}

const BannerWrapper = styled.section`
  position: relative;

  @media only screen and (min-width: 900px) {

  }
  @media only screen and (min-width: 2000px){

  }
`

export default Instructions
