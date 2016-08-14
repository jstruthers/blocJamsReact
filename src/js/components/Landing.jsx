import React, { Component } from 'react'
import { connect } from 'react-redux'

import Hero from '../sub_components/Hero.jsx'
import SellingPoints from '../sub_components/selling_points/SellingPoints.jsx'

class Landing extends Component {
  
  render() {
    return (
      <div className="landing">
        <Hero />
        <SellingPoints points={ this.props.sellingPoints } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sellingPoints: state.sellingPoints }
}

export default connect(mapStateToProps, null)(Landing)
