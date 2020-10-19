import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './heroes.module.css'

class Hero extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const {
      props: { content, label, bigImage },
      state: { activeTab },
    } = this

    return (
      <div className={`${styles[`hero`]}`} style={{
        'backgroundImage': 'url('+bigImage+')',
      }}>
        <h2>{label}</h2>
        {content}
      </div>
    )
  }
}

export default Hero
