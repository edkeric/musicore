import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Join the Army</p>

        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='your email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Shows</h2>
            <Link to='/sign-up'>In Your City</Link>
            <Link to='/'>Dates</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Backline</Link>
            <Link to='/'>Support</Link>
          </div>

          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Links</h2>
              <Link to='/'>Bandcamp</Link>
              <Link to='/'>No Echo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
