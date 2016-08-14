import React from 'react'

const Point = ({ icon, title, description }) => {
  
  return (
    <div className="point column third">
      <span className={ icon }></span>
      <h5 className="point-title">{ title }</h5>
      <p className="point-description">{ description }</p>
    </div>
  )
}

export default Point
