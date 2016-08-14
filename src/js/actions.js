export function setCurrentAlbum (album) {
  return {
    type: 'SET_CURRENT_ALBUM',
    album
  }
}

export function setSong (song) {
  return {
    type: 'SET_SONG',
    song
  }
}

export function playSong () {
  return {
    type: 'PLAY_SONG'
  }
}

export function pauseSong () {
  return {
    type: 'PAUSE_SONG'
  }
}

export function stopSong () {
  return {
    type: 'STOP_SONG'
  }
}

export function getSongStatus (status) {
  return {
    type: 'GET_SONG_STATUS',
    status
  }
}

export function setPosition (position) {
  return {
    type: 'SET_POSITION',
    position
  }
}

export function updateSeekBar (volume) {
  return {
    type: 'UPDATE_SEEK_BAR',
    volume
  }
}

export function setVolume (volume) {
  return {
    type: 'SET_VOLUME',
    volume
  }
}
