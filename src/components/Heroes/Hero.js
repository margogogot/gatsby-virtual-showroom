import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'

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
      props: { content, label, heroId, bigImage, children },
      state: {  },
    } = this
    let sliderChildren = []
    if(children){
      if(children.length >1){
        sliderChildren = children.map(function(child, i){
          console.log(child)
          return(
            <div className={'heroSlide'} key={i} style={{
              'backgroundColor': child.props.bgColor
            }}>
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
          'backgroundColor': children.bgColor
        }}>
          <div className={'slideImage'}>
            <img src={children.bigImage} />
          </div>
          <div className={'slideText'}>
            {children.children}
          </div>
        </div>
      }
    }
    if(sliderChildren.length > 1){
      sliderChildren = <Carousel showArrows={false} autoPlay={false} infiniteLoop={true} showThumbs={false} showStatus={false} dynamicHeight={false}>
          {sliderChildren}
        </Carousel>
    }
    return (
      <div id={heroId} className={'hero'}>
        {sliderChildren}
      </div>
    )
  }
}

export default Hero
