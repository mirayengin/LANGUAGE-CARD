import React from 'react'
import { Container } from 'react-bootstrap'

const Header = ({react}) => {
  return (
    <Container className='header text-center' >
      <img style={{ width: "25%", height: "25%" }} src={react} alt="logo"  />

    </Container>
  )
}

export default Header