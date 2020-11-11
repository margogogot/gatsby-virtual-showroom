import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import VisibilitySensor from 'react-visibility-sensor'
import { Link, animateScroll as scroll } from 'react-scroll'
class Hero extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      textVisible: true
    }
  }

  onChange = (isVisible) => {
    this.setState({
      visible: isVisible
    })
  }

  toggleText = () => {
    this.setState({
      textVisible: !this.state.textVisible
    })
  }

  render() {
    const {
      props: { content, label, heroId, bigImage, children, index },
      state: { visible, textVisible },
    } = this
    let sliderChildren = []
    let visibleClass = ''
    let textVisibleClass = ''
    if(visible){
      visibleClass = ' visible'
    }
    if(!textVisible){
      textVisibleClass = ' hideText'
    }
    let backgroundPosition = 'calc(100vh * -'+index+')'
    if(children){
      if(children.length > 1){
        sliderChildren = children.map(function(child, i){
          return(
            <div className={'heroSlide'} key={i} style={{
              'backgroundColor': child.props.bgColor
            }}>
              <div className={'heroesBackground'} style={{
                backgroundPositionY: backgroundPosition
              }}/>
              <div className={'slideImage '+child.props.classOverride} style={{
                backgroundImage: 'url('+child.props.bigImage+')'
              }}>
              </div>
              <div className={'slideText'}>
                <div className={'slideTextInner'}>
                {child.props.children}
                </div>
              </div>
            </div>
          )
        })
      }else{
        sliderChildren = <div className={'heroSlide'} key={0} style={{
          'backgroundColor': children.props.bgColor
        }}>
          <div className={'heroesBackground'} style={{
            backgroundPositionY: backgroundPosition
          }}/>
          <div className={'slideImage'} style={{
            backgroundImage: 'url('+children.props.bigImage+')'
          }}>
          </div>
          <div className={'slideText'}>
            <div className={'slideTextInner'}>
            {children.props.children}
            </div>
          </div>
        </div>
      }
    }
    if(sliderChildren.length > 0){
      sliderChildren = <Carousel showArrows={false} autoPlay={false} infiniteLoop={true} showThumbs={false} showStatus={false} dynamicHeight={false}>
          {sliderChildren}
        </Carousel>
    }

    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true} offset={{top:200}} minTopValue={200}>
      <div id={heroId} className={'hero'+visibleClass+textVisibleClass}>
        <button onClick={this.toggleText} className="text-toggle-button"></button>
        <Link
            to={'virtual-showroom'}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hero-home"
        >Home</Link>
        {sliderChildren}
      </div>
      </VisibilitySensor>
    )
  }
}

export default Hero
