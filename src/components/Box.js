import React from 'react'
import BoxItem from './BoxItem'
import './Box.css'

function Box() {
  return (
    <div className='box'>
      <h1>Check</h1>
      <div className='box__container'>
        <div className='box__wrapper'>
          <ul className='box__items'>
            <BoxItem
              src='images/img-8.jpg'
              text='Arrgh'
              label='soad'
              path='/news'
            />
            <BoxItem
              src='images/img-2.jpg'
              text='Yeah'
              label='rrrr'
              path='/news'
            />
          </ul>
          <ul className='box__items'>
            <BoxItem
              src='images/bor8.jpg'
              text='Arrgh'
              label='soad'
              path='/news'
            />
            <BoxItem
              src='images/img-1.jpg'
              text='Yeah'
              label='rrrr'
              path='/news'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Box
