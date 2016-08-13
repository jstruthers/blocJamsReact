export default function timecode(duration) {
  let seconds = Number.parseFloat(duration);

  if (Number.isNaN(seconds)) {
    return '-:--';
  }

  let wholeSeconds = Math.floor(seconds),
      minutes = Math.floor(wholeSeconds / 60),
      remainingSeconds = wholeSeconds % 60,

      output = minutes + ':'

  if (remainingSeconds < 10) {
    output += '0';
  }

  output += remainingSeconds;

  return output
}