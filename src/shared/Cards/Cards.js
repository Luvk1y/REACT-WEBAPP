import React from 'react'
import { Card } from './Card'

export const Cards = () => {
  
  return (
    <div className='container'>
      <div className='row'>
          <div className='col-md-3'>
              <Card></Card>
          </div>
          <div className='col-md-3'>
              <Card></Card>
          </div>
          <div className='col-md-3'>
              <Card></Card>
          </div>
      </div>
    </div>
  )
}