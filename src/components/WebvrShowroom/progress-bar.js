import React, { Component } from 'react'
import styled from 'styled-components'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const ProgressWrapper = styled.section`
      .progress-wrapper {
        width: 100%;
      }

      .progress-bar {
        width: 100%;
        padding: 0;
        border-radius: 0px;
      }

      .progress-bar-fill {
        display: block;
        height: 18px;
        border-radius: 0px;
        color: #fff;
        overflow: hidden;
        padding: 2px;

        transition: width 500ms ease-in-out;
        background: rgb(206,14,45);
        background: linear-gradient(90deg, rgba(206,14,45,1) 0%, rgba(255,255,255,0) ${this.props.progress}%, rgba(255,255,255,0) 100%);
      }
    `
    return (
      <ProgressWrapper>
      <div className="progress-wrapper">
        <div className="progress-bar">
          <span className="progress-bar-fill">Progress: {parseInt(this.props.progress) + '%'}</span>
        </div>
      </div>
      </ProgressWrapper>
    )
  }
}
export default ProgressBar
