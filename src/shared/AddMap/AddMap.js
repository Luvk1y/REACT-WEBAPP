import React from 'react'

export const AddMap = ({url}) => {
  return (
    <div className="google-map-code">
    <iframe title="locations" src={url} width="300" height="225" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
  )
}