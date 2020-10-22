import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import { Link, animateScroll as scroll } from 'react-scroll'
import VisibilitySensor from 'react-visibility-sensor'

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

  onChange = (isVisible) => {
    this.setState({
      visible: isVisible
    })
  }

  onClickHeroItem = hero => {
    this.setState({ activeHero: hero })
  }

  render() {
    const {
      onClickHeroItem,
      props: { children },
      state: { activeHero, visible },
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
    heroesList.unshift(
      <Link
          activeClass="active"
          to={'virtual-showroom'}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          key={99}
      >Virtual Showroom</Link>
    )
    let visibleClass = ''
    if(visible){
      visibleClass = ' visible'
    }
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true} offset={{top:500}} minTopValue={500}>
      <div className={'heroes'+visibleClass}>
        <div className={'heroesList'}>
        <div className={'heroesListInner'}>
        {heroesList}
        </div>
        </div>
        <div className={'heroesContent'}>
        {children.map((child, i) => {
          const { label, heroId, bigImage, bgColor, children } = child.props

          return (
            <Hero
              heroId={heroId}
              bgColor={bgColor}
              label={label}
              bigImage={bigImage}
              children={children}
              key={i}
            />
          )
        })}
        </div>
      </div>
      </VisibilitySensor>
    )
  }
}

export default Heroes
