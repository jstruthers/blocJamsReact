import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateStyle, handleClick, handleDrag } from '../../helpers'

class PositionControl extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      fillStyle: null,
      thumbStyle: null,
      dragging: false
    }

    this.handleDrag = handleDrag.bind(this)
    this.handleClick = handleClick.bind(this)
  }
  
  componentWillMount() {
    this.handleStyles(this.props.currentFill, this.props.totalFill)
  }
  
  componentWillReceiveProps(nextProps) {
    this.handleStyles(nextProps.currentFill, nextProps.totalFill)
  }
  
  handleStyles(currentFill, totalFill) {
    let styles = updateStyle(currentFill, totalFill)
    this.setState({
      fillStyle: styles[0],
      thumbStyle: styles[1]
    })
  }
  
  handleMouseDown() {
    this.setState({ dragging: true })
    document.addEventListener('mousemove', this.handleDrag)
  }
  
  handleMouseUp() {
    this.setState({ dragging: false })
    document.removeEventListener('mousemove', this.handleDrag)
  }      
  
  render() {
    return (
      <div className="seek-bar"
           ref={(c) => this._bar = c}
           onClick={ this.handleClick.bind(this) }>
        <div className="fill"
             style={ this.state.fillStyle }></div>
        <div className="thumb"
             ref={(c) => this._thumb = c}
             onMouseDown={ this.handleMouseDown.bind(this) }
             onMouseMove={ this.handleDrag.bind(this) }
             onMouseUp={ this.handleMouseUp.bind(this) }
             style={ this.state.thumbStyle }></div>
      </div>
    )
  }
}

export default connect()(PositionControl)
