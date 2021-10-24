import React, { Component } from 'react'
import styled from 'styled-components'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <ProgressWrapper>
      <div className="progress-wrapper">
        <div className="progress-bar">
          <span className="progress-bar-fill" style={{
            width: this.props.progress + '%'
          }}>{parseInt(this.props.progress)+' %'}</span>
        </div>
      </div>
      </ProgressWrapper>
    )
  }
}

const ProgressWrapper = styled.section`
  .progress-wrapper {
    width: 100%;
  }

  .progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    padding: 3px;
    border-radius: 0px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
  }

  .progress-bar-fill {
    display: block;
    height: 15px;
    background-color: #fff;
    border-radius: 0px;
    color: #666;
    overflow: hidden;
    transition: width 500ms ease-in-out;
  }
`

export default ProgressBar
