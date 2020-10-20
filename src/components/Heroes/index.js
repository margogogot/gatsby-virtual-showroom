import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import styles from './heroes.module.css'
import { Link, animateScroll as scroll } from 'react-scroll'

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
    let heroesList = children.map((child, i) => {
      const { label, bigImage, heroId } = child.props

      return (
        <Link
            activeClass="active"
            to={heroId}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            key={i}
        >{label}</Link>
      )
    })
    heroesList.push(
      <Link
          activeClass="active"
          to='header'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          key={99}
      >Virtual Showroom</Link>
    )
    return (
      <div className={`${styles[`heroes`]} ${this.state.tabClass}`}>
        <div className={styles['heroesList']}>
        <div className={styles['heroesListInner']}>
        {heroesList}
        </div>
        </div>
        <div className={styles['heroesContent']}>
        {children.map((child, i) => {
          const { label, heroId, bigImage, children } = child.props

          return (
            <Hero
              heroId={heroId}
              label={label}
              bigImage={bigImage}
              children={children}
              key={i}
            />
          )
        })}
        </div>
      </div>
    )
  }
}

export default Heroes
