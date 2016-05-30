var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14' },
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21' },
    { title: 'Magenta', duration: '2:15' }
  ]
},
albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in Your Pocket', duration: '3:21' },
    { title: 'Can You Hear Me Now?', duration: '3:14' },
    { title: 'Wrong Number', duration: '2:15' }
  ]
};

var createSongRow = function (songNumber, songName, songLength) {
  
  var template =
    '<tr class="album-view-song-item">'
  + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
  + '  <td class="song-item-title">' + songName + '</td>'
  + '  <td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;

  var $row = $(template);

  var onHover = function (event) {

    var $songNumberCell = $(this).find('.song-item-number'),
        songNumber = $songNumberCell.attr('data-song-number');

    if (songNumber !== currentlyPlayingSong) {
      $songNumberCell.html(playButtonTemplate);
    }
  };

  var offHover = function (event) {

    var $songNumberCell = $(this).find('.song-item-number'),
        songNumber = $songNumberCell.attr('data-song-number');

    if (songNumber !== currentlyPlayingSong) {
      $songNumberCell.html(songNumber);
    }
  };

  var clickHandler = function () {

    var songNumber = $(this).attr('data-song-number');

    console.log('clicked(outer)', currentlyPlayingSong);

    if (currentlyPlayingSong !== null) {
      $currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
      $currentlyPlayingCell.html(currentlyPlayingSong);

    }
    if (currentlyPlayingSong !== songNumber){
      $(this).html(pauseButtonTemplate);
      currentlyPlayingSong = songNumber;

    } else if (currentlyPlayingSong === songNumber) {
      $(this).html(playButtonTemplate);
      currentlyPlayingSong = null;

    }
  };

  $row.find('.song-item-number').click(clickHandler);

  $row.hover(onHover, offHover);

  return $row;
};

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>',
pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>',
currentlyPlayingSong = null;

var setCurrentAlbum = function (album) {
  
  var $albumTitle = $('.album-view-title'),
      $albumArtist = $('.album-view-artist'),
      $albumReleaseInfo = $('.album-view-release-info'),
      $albumImage = $('.album-cover-art'),
      $albumSongList = $('.album-view-song-list');
  
  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);
  
  $albumSongList.innerHTML = '';
  
  for (var i = 0; i < album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($newRow);
  }
};

$(document).ready(function () {
  
  setCurrentAlbum(albumPicasso);

});
