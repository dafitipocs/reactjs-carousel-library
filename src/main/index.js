import React, { Component } from 'react'
import CarouselWrapper from '../components/container'
import CarouselImages from '../components/images'

export default class Carousel extends Component {
  render() {
    return (
      <React.Fragment>
        <CarouselWrapper>
          <CarouselImages initialHeight={400} initialWidth={600}>
            <img src='https://www.w3schools.com/howto/img_lights_wide.jpg' />
            <img src='http://wowslider.com/sliders/demo-42/data1/images/lighthouse.jpg' />
            <img src='http://wowslider.com/sliders/demo-54/data1/images/dhowboat.jpg' />
          </CarouselImages>
        </CarouselWrapper>
      </React.Fragment>
    )
  }
}
