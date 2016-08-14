import React from 'react'

import Point from './Point.jsx'

const SellingPoints = ({ points }) => {
  
  return (
    <section className="selling-points clearfix">
      { points.map((point, id) => {
          return (<Point
                    key={ `point${id}`}
                    icon={ point.icon }
                    title={ point.title }
                    description={ point.description} />)
        })
      }
    </section>
  )
}

export default SellingPoints
