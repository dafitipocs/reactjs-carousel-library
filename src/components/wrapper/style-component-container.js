import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
padding:4em.
background-color: grey;
`
export default class Container extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Meu primeiro styled-component</h1>
      </Wrapper>
    )
  }
}
