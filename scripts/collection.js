var collectionItemTemplate =
    '<div class="collection-album-container column fourth">'
  + '  <img src="assets/images/album_covers/01.png" alt="Album Cover">'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a href="album.html" class="album-name"> The Colors </a>'
  + '      <br/>'
  + '      <a href="album.html"> Pablo Picasso </a>'
  + '      <br/>'
  + '      X Songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'
  ;

window.onload = function () {
  
  var collectionContainer = document.getElementsByClassName('album-covers')[0];
  
  collectionContainer.innerHTML = '';
  
  for (var i = 0; i < 12; i += 1) {
    collectionContainer.innerHTML += collectionItemTemplate;
  }
}