import React from 'react'
import PropTypes from 'prop-types'
import ContainerComponent from './style-component-container'

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ContainerComponent>
        essa div Container esta com style component
      </ContainerComponent>
    )
  }
}

Wrapper.propTypes = {}

export default Wrapper
