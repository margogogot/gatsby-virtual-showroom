import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import VisibilitySensor from 'react-visibility-sensor'

class Hero extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  onChange = (isVisible) => {
    this.setState({
      visible: isVisible
    })
  }

  render() {
    const {
      props: { content, label, heroId, bigImage, children, index },
      state: { visible },
    } = this
    let sliderChildren = []
    let visibleClass = ''
    if(visible){
      visibleClass = ' visible'
    }
    let backgroundPosition = 'calc(100vh * -'+index+')'
    console.log(backgroundPosition)
    if(children){
      if(children.length > 1){
        sliderChildren = children.map(function(child, i){
          console.log(child)
          return(
            <div className={'heroSlide'} key={i} style={{
              'backgroundColor': child.props.bgColor
            }}>
              <div className={'heroesBackground'} style={{
                backgroundPositionY: backgroundPosition
              }}/>
              <div className={'slideImage'}>
                <img src={child.props.bigImage} />
              </div>
              <div className={'slideText'}>
                {child.props.children}
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
          <div className={'slideImage'}>
            <img src={children.props.bigImage} />
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
      <VisibilitySensor onChange={this.onChange} partialVisibility={true} offset={{top:500}} minTopValue={500}>
      <div id={heroId} className={'hero'+visibleClass}>
        {sliderChildren}
      </div>
      </VisibilitySensor>
    )
  }
}

export default Hero
