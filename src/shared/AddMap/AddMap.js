import React from 'react'
const url = "http://www.youtube.com/embed/xDMP3i36naA"
export const AddMap = ({url}) => {
  return (
    <div className="google-map-code">
    <iframe src={url} width="300" height="225" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
  </div>
  )
}