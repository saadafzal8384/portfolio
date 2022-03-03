import React from 'react'
import './header.css'
import CTA from './CTA'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Saad Afzal</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />

        <div className="me">
          <img src="" alt="" />
        </div>

      </div>
    </header>
  )
}

export default Header