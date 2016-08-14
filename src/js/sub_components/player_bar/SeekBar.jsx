import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateStyle } from '../../helpers'

class PositionControl extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      fillStyle: null,
      thumbStyle: null,
      dragging: false
    }
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
  
  handleClick(event) {
    let { dispatch, totalFill, setCurrentFill } = this.props
    
    let clientRect = this._bar.getBoundingClientRect(),
        offsetX = event.clientX - clientRect.left,
        seekBarFillRatio = offsetX / clientRect.width

    dispatch(setCurrentFill(seekBarFillRatio * totalFill))
  }
//  
//  handleDrag(event) {
//    if (this.state.dragging) {
//      let { dispatch, totalFill, setCurrentFill } = this.props
//    
//      let clientRect = this._thumb.getBoundingClientRect(),
//          offsetX = event.clientX - clientRect.left,
//          seekBarFillRatio = offsetX / clientRect.width
//console.log(clientRect, offsetX, seekBarFillRatio)
//      dispatch(setCurrentFill(seekBarFillRatio * totalFill))
//    }
//  }
//  
//  handleMouseDown() {
//    this.setState({ dragging: true })
//  }
//  
//  handleMouseUp() {
//    this.setState({ dragging: false })
//  }
  
//             ref={(c) => this._thumb = c}
//             onMouseDown={ this.handleMouseDown.bind(this) }
//             onMouseMove={ this.handleDrag.bind(this) }
//             onMouseUp={ this.handleMouseUp.bind(this) }
  
  render() {
    return (
      <div className="seek-bar"
           ref={(c) => this._bar = c}
           onClick={ this.handleClick.bind(this) }>
        <div className="fill"
             style={ this.state.fillStyle }></div>
        <div className="thumb"
             style={ this.state.thumbStyle }></div>
      </div>
    )
  }
}

export default connect()(PositionControl)
