import React, { Component } from 'react'
import styled from 'styled-components'
import touchIcon from './img/touch-icon-01.svg'

class ClickAnimation extends Component {
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

  render() {
    let animation = <AnimationWrapper>
    <div className="click-area" onClick={this.onEnter}>
      <img src={touchIcon} onClick={this.onEnter} />
    </div>
    </AnimationWrapper>
    if(!this.state.overlayVisible){
      animation = null
    }

    return (
      <>
      {animation}
      </>
    )
  }
}

const AnimationWrapper = styled.section`
  .click-area{
    z-index: 2;
    max-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: grab;
    position: absolute;
    background: rgba(0,0,0,0.2);
    color: #fff;
  }
  img {
    left: 50%;
    width: 130px;
    bottom: 50%;
    height: 60px;
    padding: 7px 16px;
    opacity: 1;
    z-index: 2;
    position: absolute;
    animation: hand-hint-animation 2.5s infinite ease-in-out;
    transition: opacity 0.4s;
    text-align: center;
    background: rgba(0,0,0,0.2);
    margin-bottom: -30px;
    border-radius: 20px;
    stroke: #fff;
    color: #fff;
  }
`

export default ClickAnimation
