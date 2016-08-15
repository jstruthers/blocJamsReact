
/**************************************
*   TIMECODE
**************************************/
export function timecode(duration) {
  let seconds = Number.parseFloat(duration)

  if (Number.isNaN(seconds)) {
    return '-:--';
  }

  let wholeSeconds = Math.floor(seconds),
      minutes = Math.floor(wholeSeconds / 60),
      remainingSeconds = wholeSeconds % 60,
      output = minutes + ':'

  if (remainingSeconds < 10) {
    output += '0'
  }

  return output + remainingSeconds
}

/**************************************
*   UPDATE_SEEKBAR_STYLES
**************************************/

export function updateStyle(current, total) {
  
  let seekBarFillRatio = current / total,
      offsetXPercent = seekBarFillRatio * 100

  offsetXPercent = Math.max(0, offsetXPercent)
  offsetXPercent = Math.min(100, offsetXPercent)

  let percentageString = Math.floor(offsetXPercent) + '%'

  // [ class fill, class thumb ]
  return [{ width: percentageString }, { left: percentageString }]
}

/**************************************
*   HANDLE_CLICK
**************************************/

export function handleClick(event) {
  let { dispatch, totalFill, setCurrentFill } = this.props

  let clientRect = this._bar.getBoundingClientRect(),
      offsetX = event.clientX - clientRect.left,
      seekBarFillRatio = offsetX / clientRect.width

  dispatch(setCurrentFill(seekBarFillRatio * totalFill))
}

/**************************************
*    HANDLE_DRAGGING
**************************************/

export function handleDrag(event) {
  if (this.state.dragging) {
    let { dispatch, totalFill, setCurrentFill } = this.props

    let clientRect = this._bar.getBoundingClientRect(),
        offsetX = event.clientX - clientRect.left,
        seekBarFillRatio = offsetX / clientRect.width

    dispatch(setCurrentFill(seekBarFillRatio * totalFill))
  }
}

/**************************************
*   ANIMATE_POINTS
**************************************/

export function revealPoints(event) {
  let points = document.getElementsByClassName('selling-points')[0].getBoundingClientRect(),
      scrollDistance = (screen.height - points.top) + 200;
  if (screen.height > 960 || points.top >= scrollDistance) {
    return 'hide-points'
  } else {
    return 'show-points'
  }
}
