import React from 'react'
import { AddMap } from '../AddMap/AddMap'

export const Card = ({teams,location,date,time,url}) => {
 
    return (
      <div className='card'>
          <div className='card-body'>
                  <h4 className='card-title'>
                    {teams}
                  </h4>
                  <p className='card-text text-secondary'>
                    {location}<br/>
                    {date}<br/>
                    {time}<br/>
                    <AddMap url = {url}/>
                  </p>
          </div>
      </div>
    )
  }