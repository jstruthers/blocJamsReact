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
      
      return {...state, ...newState}
    case 'PLAY_SONG':

      newState.currentSong.playback = 'PLAYING'
      
      return {...state, ...newState}
    case 'PAUSE_SONG':
 
      newState.currentSong.playback = 'PAUSED'
      
      return {...state, ...newState}
    case 'STOP_SONG':
 
      newState.currentSong.playback = 'STOPPED'
      
      return {...state, ...newState}
    case 'GET_SONG_STATUS':

      newState.currentSong.volume = action.status.volume
      newState.currentSong.position = action.status.position

      return state
    case 'SEEK':

      return state
    case 'UPDATE_SEEK_BAR':
      
      return {...state, ...newState}
    case 'SET_VOLUME':

      newState.volume = action.volume
      
      return {...state, ...newState}
    default:
      return state
  }
}