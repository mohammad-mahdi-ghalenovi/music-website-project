// intro songs
let i = 0;

songs.forEach(function (music) {
  i++;
  if (i < 5) {
    createIntroMuics(music);
  } else {
    createReleaseMusics(music);
  }
});

function createIntroMuics(music) {
  introSongsWrapper.insertAdjacentHTML(
    "beforeend",
    '<div class="intro-song-content swiper-slide "> <div class="intro-song__img">    <img src="' +
      music.cover +
      '" alt="" />  </div>  <div class="intro-song-infos">    <div class="intro-song__name">' +
      music.musicName +
      '</div>    <div class="intro-song__artist">' +
      music.artist +
      '</div>  </div>  <div class="intro-song-control">    <div class="intro-control__play"><i class="fa fa-play" onclick="loadMusic(' +
      music.id +
      ')"></i></div>     <div class="intro-control__like"><i class="fa fa-heart"></i></div>    <div class="intro-control__download"><i class="fa fa-download"></i></div>    <div class="intro-control__add"><i class="fa fa-plus"></i></div>  </div>  </div>'
  );
}

// new release

function createReleaseMusics(music) {
  releaseContentContainer.insertAdjacentHTML(
    "beforeend",
    ' <div class="release-content"><div class="release-content__img"><img src="' +
      music.cover +
      '" alt=""></div><div class="release-content__info">        <div class="release-name">' +
      music.musicName +
      '</div>        <div class="release-artist">' +
      music.artist +
      "</div></div></div> "
  );
}
