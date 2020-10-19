import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import styles from './heroes.module.css'

class Heroes extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeHero: '',
      tabClass: this.props.class,
    }
  }

  onClickHeroItem = hero => {
    this.setState({ activeHero: hero })
  }

  render() {
    const {
      onClickHeroItem,
      props: { children },
      state: { activeHero },
    } = this
    console.log(children)
    return (
      <div className={`${styles[`heroes`]} ${this.state.tabClass}`}>
        <div className={styles['heroesList']}>

        </div>
        <div className={styles['heroesContent']}>
        {children.map(child => {
          const { label, bigImage } = child.props

          return (
            <Hero
              label={label}
              bigImage={bigImage}
            />
          )
        })}
        </div>
      </div>
    )
  }
}

export default Heroes
