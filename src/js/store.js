import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

//middleware
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger({
  predicate: (getState, action) => action.type !== 'GET_SONG_STATUS'
});

const middleware = [logger, thunk]

const store = createStore(
  rootReducer,
  {
    sellingPoints: [
      {
        icon: "ion-music-note",
        title: "Choose your music",
        description: ["The world is full of music;", "Why should you have to listen to music that someone else chose?"]
      },
      {
        icon: "ion-radio-waves",
        title: "Unlimited, streaming, ad-free",
        description: ["No arbitrary limits. No distractions."]
      },
      {
        icon: "ion-iphone",
        title: "Mobile enabled",
        description: ["Listen to your music on the go.", "This stream service is available on all mobile platforms."]
      }
    ],
    currentAlbum : null,
    currentSong: {
      data: null,
      volume: 80,
      playback: 'STOPPED',
      position: null,
      duration: null
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
      },
      {
        title: 'Album III',
        artist: 'Artist Three',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/14.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album IV',
        artist: 'Artist Four',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/04.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album V',
        artist: 'Artist Five',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/05.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album VI',
        artist: 'Artist Six',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/06.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album VII',
        artist: 'Artist Seven',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/07.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album VIII',
        artist: 'Artist Eight',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/13.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album IX',
        artist: 'Artist Nine',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/09.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album X',
        artist: 'Artist Ten',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/10.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album XI',
        artist: 'Artist Eleven',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/11.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
      {
        title: 'Album XII',
        artist: 'Artist Twelve',
        label: 'The Labelist',
        year: '1989',
        albumArtUrl: './images/album_covers/18.png',
        songs: [
          { title: 'Track 1', track: 1, duration: '1:01' },
          { title: 'Track 2', track: 2, duration: '5:01' },
          { title: 'Track 3', track: 3, duration: '3:21' },
          { title: 'Track 4', track: 4, duration: '3:14' },
          { title: 'Track 5', track: 5, duration: '2:15' }
        ]
      },
    ]
  },
  applyMiddleware(...middleware)
)

export default store;