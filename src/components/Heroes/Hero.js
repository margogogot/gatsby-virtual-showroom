import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './heroes.module.css'
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
      state: { activeTab },
    } = this

    let sliderChildren = []
    if(children){
      if(children.length >1){
        sliderChildren = children.map(function(child, i){
          console.log(child)
          return(
            <div className={`${styles[`heroSlide`]}`} key={i}>
              <div className={`${styles[`slideImage`]}`}>
                <img src={child.props.bigImage} />
              </div>
              <div className={`${styles[`slideText`]}`}>
                {child.props.children}
              </div>
            </div>
          )
        })
      }else{
        sliderChildren = <div className={`${styles[`heroSlide`]}`} key={0}>
          <div className={`${styles[`slideImage`]}`}>
            <img src={children.bigImage} />
          </div>
          <div className={`${styles[`slideText`]}`}>
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
      <div id={heroId} className={`${styles[`hero`]}`}>
        <h2>{label}</h2>
        {sliderChildren}
      </div>
    )
  }
}

export default Hero
