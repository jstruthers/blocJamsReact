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
    albumPicasso = {
      title: 'The Colors',
      artist: 'Pablo Picasso',
      label: 'Cubism',
      year: '1881',
      albumArtUrl: './assets/images/album_covers/01.png',
      songs: [
        { title: 'Blue', duration: 161.71, audioUrl: './assets/music/blue' },
        { title: 'Green', duration: 103.96, audioUrl: './assets/music/green' },
        { title: 'Red', duration: 268.45, audioUrl: '/.assets/music/red' },
        { title: 'Pink', duration: 153.14, audioUrl: '/.assets/music/pink' },
        { title: 'Magenta', duration: 374.22, audioUrl: '/.assets/music/magenta' },
        { title: 'Cerulean', duration: 203, audioUrl: '/.assets/music/cerulean' },
        { title: 'Yellow', duration: 194, audioUrl: '/.assets/music/yellow' },
        { title: 'Burgundy', duration: 251, audioUrl: '/.assets/music/burgundy' }
      ]
    },
    albumMarconi = {
      title: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      albumArtUrl: './assets/images/album_covers/20.png',
      songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in Your Pocket', duration: '3:21' },
        { title: 'Can You Hear Me Now?', duration: '3:14' },
        { title: 'Wrong Number', duration: '2:15' }
      ]
    }
  },
  applyMiddleware(...middleware)
)

export default store;