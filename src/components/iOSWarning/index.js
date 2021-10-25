import React, { Component } from 'react'
import closeIcon from '../WebvrShowroom/img/close-icon.svg'
import styled from "styled-components"

class iOSWarning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayVisible: true,
      lightboxVisible: true
    }
  }

  onEnter = () => {
    this.props.onClose()
  }

  render() {

    return (
      <WarningWrapper>
        <button onClick={this.onEnter} className='close-button'>
          <img src={closeIcon} />
        </button>
        <div className='warning-wrapper'>
          <h1>IOS 15 DEVICE DETECTED</h1>
          <p>Unfortunately, based on your current IOS version, we are not able to operate our Virtual Booth on your mobile device.</p>
          <p>You can still enter our Instagram Giveaway on your desktop or laptop computer. Just go to <a href="https://www.forms-surfaces.com/lineup">www.forms-surfaces.com/lineup</a> and use the desktop version of the Virtual Booth to submit your contest entries.</p>
          <p>We are sorry for the inconvenience and are actively working on alternate solutions for mobile users.</p>
          <p>Check back soon for updates.</p>
        </div>
        <div className='close-overlay' onClick={this.onEnter} />
      </WarningWrapper>
    )
  }
}

const WarningWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: #CE0E2DCC;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  z-index: 4;
  .warning-wrapper {
    text-align: left;
    color: #fff;
    padding: 2rem;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .close-button{
    background: transparent;
    outline: none;
    cursor: pointer;
    border: none;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .close-button img{
    width: 30px;
    height: 30px;
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
`

export default iOSWarning
