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
      <React.Fragment>
        <h1>essa div abaixo esta com style component</h1>
        <ContainerComponent />
      </React.Fragment>
    )
  }
}

Wrapper.propTypes = {}

export default Wrapper
