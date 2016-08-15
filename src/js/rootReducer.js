export default function rootReducer (state = [], action) {

  let newState = {}
  newState.currentSong = state.currentSong
  
  switch(action.type) {
    case 'SET_CURRENT_ALBUM':
      
      newState.currentAlbum = action.album
      newState.currentSong.data = action.album.songs[0]
      
      return {...state, ...newState}
    case 'SET_SONG':

      newState.currentSong.data = action.song
      newState.currentSong.duration = action.song.duration * 1000
      newState.currentSong.position = 0
      
      return {...state, ...newState}
    case 'PLAY_SONG':

      newState.currentSong.playback = 'PLAYING'
      
      return {...state, ...newState}
    case 'PAUSE_SONG':
 
      newState.currentSong.playback = 'PAUSED'
      
      return {...state, ...newState}
    case 'STOP_SONG':
 
      newState.currentSong.playback = 'STOPPED'
      newState.currentSong.position = 0
      
      return {...state, ...newState}
    case 'GET_SONG_STATUS':

      newState.currentSong.volume = action.status.volume
      newState.currentSong.position = action.status.position

      return {...state, ...newState}
    case 'SET_POSITION':
      
      newState.currentSong.position = action.position

      return {...state, ...newState}
    case 'SET_VOLUME':

      newState.currentSong.volume = action.volume
      
      return {...state, ...newState}
    default:
      return state
  }
}