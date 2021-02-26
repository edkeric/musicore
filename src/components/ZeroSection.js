import React from 'react'
import '../App.css'
import { Button } from './Button'
import './ZeroSection.css'

const ZeroSection = () => {
  return (
    <div className='zero-container'>
      <video src='/videos/festcrowd.mp4' autoPlay loop muted />
      <h1>See you in the pit</h1>
      <p>Jump in!</p>
      <div className='zero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GO
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Rawk')}
        >
          Play <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default ZeroSection
