import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/styles.css'

import Wrapper from '../components/wrapper'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text } = this.props

    return (
      <React.Fragment>
        <Wrapper />
        <div className={styles.test}>Example Component: {text}</div>
      </React.Fragment>
    )
  }
}
