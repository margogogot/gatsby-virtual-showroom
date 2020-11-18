import React, { Component } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { withCookies, Cookies } from 'react-cookie'
import closeIcon from './img/close-icon.svg'
import ClickAnimation from './click-animation'

class VideoOverlay extends Component {
  constructor(props) {
    super(props)
    const { cookies } = props
    let hideVideo = cookies.get('hideVideo')
    let overlayVisible = true
    if(hideVideo){
      overlayVisible = false
    }
    this.state = {
      overlayVisible: overlayVisible
    }
  }

  onEnter = () => {
    this.setState({
      overlayVisible: false
    })
  }

  dontShow = () => {
    const { cookies } = this.props
    cookies.set('hideVideo', true, { path: '/' })
    this.onEnter()
  }

  render() {
    let video = <VideoWrapper>
      <div class={'videoOverlay'}>
        <div className='content-wrapper'>

          <div className='col'>
            <div className='align-right'>
              <button onClick={this.onEnter} className='close-button'>
                <img src={closeIcon} />
              </button>
            </div>
            <h2>WHILE YOU ARE WAITING...</h2>
            <p>...for the application to load, why don’t you take a peek at our video tour of the Virtual Showroom?</p>
            <p>The F+S Virtual Showroom uses WebGL technology to maximize your interactive experience. Consequently, the loading time for the application might vary depending of your device, web browser and internet speed.</p>
            <label><input type='checkbox' onChange={this.dontShow}/> Don't show again.</label>
          </div>
          <div className='col'>
            <video controls autoPlay="true">
              <source src={'https://virtual-showroom.forms-surfaces.net/video/tour-2.mp4'}
                      type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </div>
    </VideoWrapper>
    if(!this.state.overlayVisible){
      video = <ClickAnimation/>
    }

    return (
      <>
      {video}
      </>
    )
  }
}

const VideoWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  z-index: 3;
  label {
    cursor: pointer;
  }
  .content-wrapper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 700px;
    height: auto;
    flex-flow: column;
    font-size: .8rem;
    width: 90%;
  }
  .content-wrapper .col:first-child{
    padding-bottom: 40px;
  }
  .content-wrapper .col{
    position: relative;
  }
  .videoOverlay{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
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
  }
  @media only screen and (min-width: 760px) {
    .content-wrapper{
      width: 50%;
      margin: 60px 0px 20px;
    }
    .content-wrapper .col{
      height: 50vh;
    }
    .content-wrapper .col:first-child{
      padding-right: 0px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      flex-flow: column;
    }
    .videoOverlay{
      video {
        padding: 30px;
      }
    }
  }
`

export default withCookies(VideoOverlay)
