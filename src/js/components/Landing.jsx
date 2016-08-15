import React, { Component } from 'react'
import { connect } from 'react-redux'
import { revealPoints } from '../helpers'

import Hero from '../sub_components/Hero.jsx'
import SellingPoints from '../sub_components/selling_points/SellingPoints.jsx'

class Landing extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      pointsClass: 'hide-points',
      introStyle: { height: 0 }
    }
    
    this.handleReveal = (event) => {
      this.setState({
        pointsClass: revealPoints(event)
      })
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleReveal)
    this.setState({ introStyle: { height: '600px' } })
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleReveal)
  }
  
  render() {
    return (
      <div className="landing"
           onScroll={ this.handleReveal }>
        <Hero introStyle={ this.state.introStyle } />
        <SellingPoints pointsClass={ this.state.pointsClass }
                       points={ this.props.sellingPoints } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sellingPoints: state.sellingPoints }
}

export default connect(mapStateToProps, null)(Landing)
