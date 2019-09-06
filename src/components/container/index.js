import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SlideshowContainer = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`

class ContainerCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { children } = this.props
    return <SlideshowContainer>{children}</SlideshowContainer>
  }
}

ContainerCarousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContainerCarousel
