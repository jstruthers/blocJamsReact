import React, { Component } from 'react'
import { connect } from 'react-redux'
import { revealPoints } from '../helpers'

import Hero from '../sub_components/Hero.jsx'
import SellingPoints from '../sub_components/selling_points/SellingPoints.jsx'

class Landing extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      pointsClass: 'hide-points'
    }
    
    this.handleReveal = (event) => {
      this.setState({
        pointsClass: revealPoints(event)
      })
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleReveal)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleReveal)
  }
  
  render() {
    return (
      <div className="landing"
           onScroll={ this.handleReveal }>
        <section className="hero-content">
          <h1 className="hero-title">Turn the music loud!</h1>
        </section>
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
