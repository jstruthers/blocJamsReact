import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

//middleware
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();

const middleware = [logger, thunk]

const store = createStore(
  rootReducer,
  {
    currentAlbum : null,
    currentSong: {
      data: null,
      volume: 80,
      playback: 'STOPPED',
      position: null
    },
    albums: [
      {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtUrl: './images/album_covers/01.png',
        songs: [
          { title: 'Blue', track: 1, duration: 161.71, audioUrl: './music/blue.mp3' },
          { title: 'Green', track: 2, duration: 103.96, audioUrl: './music/green.mp3' },
          { title: 'Red', track: 3, duration: 268.45, audioUrl: './music/red.mp3' },
          { title: 'Pink', track: 4, duration: 153.14, audioUrl: './music/pink.mp3' },
          { title: 'Magenta', track: 5, duration: 374.22, audioUrl: './music/magenta.mp3' },
          { title: 'Cerulean', track: 6, duration: 203, audioUrl: './music/cerulean.mp3' },
          { title: 'Yellow', track: 7, duration: 194, audioUrl: './music/yellow.mp3' },
          { title: 'Burgundy', track: 8, duration: 251, audioUrl: './music/burgundy.mp3' }
        ]
      },
      {
        title: 'The Telephone',
        artist: 'Guglielmo Marconi',
        label: 'EM',
        year: '1909',
        albumArtUrl: './images/album_covers/20.png',
        songs: [
          { title: 'Hello, Operator?', track: 1, duration: '1:01' },
          { title: 'Ring, ring, ring', track: 2, duration: '5:01' },
          { title: 'Fits in Your Pocket', track: 3, duration: '3:21' },
          { title: 'Can You Hear Me Now?', track: 4, duration: '3:14' },
          { title: 'Wrong Number', track: 5, duration: '2:15' }
        ]
      }
    ]
  },
  applyMiddleware(...middleware)
)

export default store;