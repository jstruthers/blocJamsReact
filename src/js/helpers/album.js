// Executed on page load
var setCurrentAlbum = function (album) {
  
  // Update currentAlbum variable
  currentAlbum = album;
  
  // grab elements by class name
  var $albumTitle = $('.album-view-title'),
      $albumArtist = $('.album-view-artist'),
      $albumReleaseInfo = $('.album-view-release-info'),
      $albumImage = $('.album-cover-art'),
      $albumSongList = $('.album-view-song-list');
  
  // Populate those elements
  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);
  
  // Empty any previous data from this element
  $albumSongList.innerHTML = '';
  
  // Create a new row for each song read in from the album parameter (JSON object)
  for (var i = 0; i < album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($newRow);
  }
};

function setSong (songNumber) {
  
  if (currentSoundFile) {
    currentSoundFile.stop();
  }
  
  currentlyPlayingSongNumber = songNumber;
  currentSongFromAlbum = songNumber === null ? null : currentAlbum.songs[songNumber - 1];
  currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
    formats: ['mp3'],
    preload: true
  });
}

function seek (time) {
  if (currentSoundFile) {
    currentSoundFile.setTime(time);
  }
}

function setVolume (volume) {
  if (currentSoundFile) {
    volume = Math.max(0, volume);
    volume = Math.min(100, volume);
    currentSoundFile.setVolume(volume);
  }
}

function updatePlayerBarSong () {
  $('.song-name').html(currentSongFromAlbum.title);
  $('.artist-name').html(currentAlbum.artist);
  $('.artist-song-mobile').html(currentSongFromAlbum.title + ' - ' + currentAlbum.artist);

  $('.main-controls .play-pause').html(playerBarPauseButton);
}

function updateSeekBarWhileSongPlays () {
  
  if (currentSoundFile) {
    currentSoundFile.bind('timeupdate', function(event) {
      
      var seekBarFillRatio = this.getTime() / this.getDuration(),
          $seekBar = $('.seek-control .seek-bar');
      
      updateSeekPercentage($seekBar, seekBarFillRatio);
    });
  }
}

function updateSeekPercentage ($seekBar, seekBarFillRatio) {
  var offsetXPercent = seekBarFillRatio * 100;
  offsetXPercent = Math.max(0, offsetXPercent);
  offsetXPercent = Math.min(100, offsetXPercent);
  
  var percentageString = offsetXPercent + '%';
  $seekBar.find('.fill').width(percentageString);
  $seekBar.find('.thumb').css({left: percentageString});
}

function setupSeekBars () {
  
  var $seekBars = $('.player-bar .seek-bar');
  
  $seekBars.click( function (event) {
    
    var offsetX = event.pageX - $(this).offset().left,
        barWidth = $(this).width(),
        seekBarFillRatio = offsetX / barWidth;
    
    if ($(this).parent().hasClass('seek-control')) {
      seek(seekBarFillRatio * currentSoundFile.getDuration());
    } else if ($(this).parent().hasClass('volume')) {
      setVolume(seekBarFillRatio * 100);
    }

    updateSeekPercentage($(this), seekBarFillRatio);
  });
  
  $seekBars.find('.thumb').mousedown( function (event) {
    
    var $seekBar = $(this).parent();
    
    $(document).bind('mousemove.thumb', function (event) {
      var offsetX = event.pageX - $seekBar.offset().left,
        barWidth = $seekBar.width(),
        seekBarFillRatio = offsetX / barWidth;
            
      if ($seekBar.hasClass('seek-control')) {
        seek(seekBarFillRatio * currentSoundFile.getDuration());
      } else if ($seekBar.hasClass('volume')){
        setVolume(seekBarFillRatio);
      }
      
      updateSeekPercentage($seekBar, seekBarFillRatio);
    });
    
    $(document).bind('mouseup.thumb', function (event) {
      $(document).unbind('mousemove.thumb');
      $(document).unbind('mouseup.thumb');
    });
  });
}

function $getSongNumberCell (number) {
  return $('.song-item-number[data-song-number="' + number + '"]');
}

function trackIndex (album, song) {
  return album.songs.indexOf(song);
}

function nextSong () {
  var index = trackIndex(currentAlbum, currentSongFromAlbum),
      albumLength = currentAlbum.songs.length,
      nextSongNumber = index + 1 === albumLength ? 1 : index + 2,
      prevSongNumber = index + 1 === 0 ? albumLength : index + 1;
  
  setSong(nextSongNumber);
  currentSoundFile.play();
  updateSeekBarWhileSongPlays();
  updateSeekPercentage($('.volume .seek-bar'), currentVolume);
  updatePlayerBarSong();
  
  $getSongNumberCell(prevSongNumber).html(prevSongNumber);
  $getSongNumberCell(currentlyPlayingSongNumber).html(pauseButtonTemplate);
}

function prevSong () {
  var index = trackIndex(currentAlbum, currentSongFromAlbum),
      albumLength = currentAlbum.songs.length,
      nextSongNumber = index === 0 ? albumLength : index,
      prevSongNumber = index === albumLength ? 1 : index + 1;
    
  setSong(nextSongNumber);
  currentSoundFile.play();
  updateSeekBarWhileSongPlays();
  updateSeekPercentage($('.volume .seek-bar'), currentVolume);
  updatePlayerBarSong();
  
  $getSongNumberCell(prevSongNumber).html(prevSongNumber);
  $getSongNumberCell(currentlyPlayingSongNumber).html(pauseButtonTemplate);
}

// Execute these functions when the DOM has loaded
$(document).ready(function () {
  
  setCurrentAlbum(albumPicasso);
  setupSeekBars();
  $previousButton.click(prevSong);
  $nextButton.click(nextSong);

});
