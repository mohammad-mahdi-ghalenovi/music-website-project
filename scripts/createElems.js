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
    '<div class="release-content">  <div class="release-content__img">    <img src="' +
      music.cover +
      '" />    <i class="fa fa-play-circle release-play" onclick="loadMusic(' +
      music.id +
      ')"></i>  </div>  <div class="release-content__info">    <div class="release-name">' +
      music.musicName +
      '</div>    <div class="release-artist">' +
      music.artist +
      "</div>  </div></div> "
  );
  iconHovers();
}

// searched songs
function createSearchedSongs(relatedSongs) {
  searchedSongsWrapper.innerHTML = "";

  relatedSongs.forEach(function (music) {
    searchedSongsWrapper.insertAdjacentHTML(
      "beforeend",
      '<div class="searched-content">    <div class="searched__img">         <img src="' +
        music.cover +
        '" alt="">   </div>   <div class="searched-info">         <div class="searched__musicname">' +
        music.musicName +
        '</div>         <div class="searched__artist">' +
        music.artist +
        "</div>   </div></div> "
    );
  });
}

// release hovers
function iconHovers() {
  releaseContentImg = document.querySelectorAll(".release-content__img img");
  let targetIcon;

  releaseContentImg.forEach(function (song) {
    song.addEventListener("mouseover", function (event) {
      targetIcon = event.target.nextElementSibling;

      targetIcon.classList.add("release-icon-active");

      event.target.classList.add("release-img-active");
    });

    song.addEventListener("mouseout", function (event) {
      targetIcon.classList.remove("release-icon-active");

      event.target.classList.remove("release-img-active");
    });
  });
}
