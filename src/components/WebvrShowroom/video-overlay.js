import React, { Component } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { withCookies, Cookies } from 'react-cookie'
import closeIcon from './img/close-icon.svg'

class VideoOverlay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayVisible: true
    }
  }

  onEnter = () => {
    this.setState({
      overlayVisible: false
    })
  }

  dontShow = () => {
    const { cookies } = this.props
    // cookies.set('hideVideo', true, { path: '/' })
    this.onEnter()
  }

  render() {
    let video = <VideoWrapper>
      <div class={'videoOverlay'}>
        <div className='content-wrapper'>

          <div className='col'>
            <h2>WHILE YOU ARE WAITING...</h2>
            <p>...for the application to load, why don’t you take a peek at our video tour of the Virtual Showroom?</p>
            <p>The F+S Virtual Showroom uses WebGL technology to maximize your interactive experience. Consequently, the loading time for the application might vary depending of your device, web browser and internet speed.</p>
            <label><input type='checkbox' onChange={this.dontShow}/> Don't show again.</label>
          </div>
          <div className='col'>
            <video controls autoPlay="true">
              <source src={'https://virtual-showroom.forms-surfaces.net/video/tour.mp4'}
                      type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <button onClick={this.onEnter} className='close-button'>
            <img src={closeIcon} />
          </button>
        </div>
      </div>
    </VideoWrapper>
    if(!this.state.overlayVisible){
      video = null
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
  label {
    cursor: pointer;
  }
  .content-wrapper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    max-width: 1000px;
    height: auto;
    max-height: 500px;
    flex-flow: column;
    font-size: .8rem;
  }
  .content-wrapper .col:first-child{
    padding-bottom: 20px;
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
    position: absolute;
    top: -40px;
    right: 0px;
    background: transparent;
    outline: none;
    cursor: pointer;
    border: none;
  }
  .close-button img{
    width: 30px;
    height: 30px;
  }
  @media only screen and (min-width: 760px) {
    .content-wrapper{
      /* flex-flow: row;
      flex-wrap: wrap; */
    }
    .content-wrapper .col{
      /* width: 50%; */
    }
    .content-wrapper .col:first-child{
      padding-right: 20px;
      display: flex;
      align-items: flex-start;
      flex-flow: column;
    }
  }
`

export default withCookies(VideoOverlay)
