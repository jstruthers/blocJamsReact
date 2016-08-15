import React, { Component } from 'react'

import Point from './Point.jsx'

class SellingPoints extends Component {
  
  render() {
    return (
      <section className={ `${this.props.pointsClass} selling-points clearfix` }>
        { this.props.points.map((point, id) => {
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
}

export default SellingPoints
