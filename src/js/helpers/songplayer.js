  function SongPlayer($rootScope, Fixtures) {

// Private Attributes
// ---
    
    // @attribute setSong
    // @description instance to return
    // @type {Object}
    //
    // @attribute currentBuzzObject
    // @description instance of buzz audio file loaded from the fixtures service
    // @type {Object}
    
    var songPlayer = {}, currentBuzzObject = null;
    
// Private Functions
// ---
    
    // @function setSong
    // @description Stops currently playing song and loads new audio file as currentBuzzObject
    // @parameter {Object} song
    
    function setSong(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        songPlayer.currentSong.playing = null;
      }
      
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      
      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
          songPlayer.currentTime = currentBuzzObject.getTime();
          songPlayer.volume = currentBuzzObject.getVolume();
        });
      });
      
      songPlayer.currentSong = song;
    }
    
    // @function getSongIndex
    // @description Get index of currently playing song in Fixtures.getAlbum
    // @parameter {Object} song
    
    function getSongIndex(song) {
      return songPlayer.currentAlbum.songs.indexOf(song);
    }
    
    // @function playSong
    // @description Play audio file and toggle
    //              or set .playing attribute on song parameter
    
    function playSong(song) {
      currentBuzzObject.play();
      song.playing = true;
    }
    
    // @function stopSong
    // @description Stop audio playback and toggle
    //              or set .playing attribute on song parameter
    
    function stopSong(song) {
      currentBuzzObject.stop();
      song.playing = null;
    }

// Public Attributes
// ---

    // @attribute currentSong
    // @description Song property of the Fixtures service
    // @type {Property}
    //
    // @attribute currentTime
    // @description Current playback time on current song
    //              (in seconds)
    // @type {Number}
    //
    // @attribute currentAlbum
    // @description Stores the current album
    // @type {Object}
    //
    // @attribute volume
    // @description Current song volume
    // @type {Number}
    
    songPlayer.currentSong = null;
    songPlayer.currentTime = null;
    songPlayer.currentAlbum = Fixtures.getAlbum();
    songPlayer.volume = 80;

// Public Functions
// ---
    
    // @function play
    // @description Check for song change.
    //              If playing new song then set song.
    //              Then play song.
    
    songPlayer.play = function (song) {
      song = song || songPlayer.currentSong;
      if (songPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
        
      } else if (songPlayer.currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          playSong(song);
        }
      }
    };
    
    // @function pause
    // @description pause currentBuzzObject, toggle pause icon
    // @parameter {Object} song
    
    songPlayer.pause = function (song) {
      song = song || songPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };
    
    // @function previous
    // @description Skip back and play the previous song
    
    songPlayer.previous = function () {
      var currentSongIndex = getSongIndex(songPlayer.currentSong),
        song = songPlayer.currentSong;
      currentSongIndex -= 1;
      
      if (currentSongIndex < 0) {
        stopSong(song);
      } else {
        song = songPlayer.currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
    
    // @function next
    // @description Skip forward and play the next song
    
    songPlayer.next = function () {
      var currentSongIndex = getSongIndex(songPlayer.currentSong),
          song = songPlayer.currentSong;
      currentSongIndex += 1;
      
      if (currentSongIndex > songPlayer.currentAlbum.songs.length - 1) {
        stopSong(song);
      } else {
        song = songPlayer.currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
    
    // @function setCurrentTime
    // @desctiption Update sound file to skip to the proper
    //              time in song when UI fires an event.
    // @parameter {Number} time
    
    songPlayer.setCurrentTime = function (time) {
      if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
      }
    };
    
    // @function setVolume
    // @description Update sound file to alter current volume.
    // @parameter {Number} volume
    
    songPlayer.setVolume = function (volume) {
      if (currentBuzzObject) {
        currentBuzzObject.setVolume(volume);
      }
    };
    
    return songPlayer;
  }