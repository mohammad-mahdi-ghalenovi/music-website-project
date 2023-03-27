var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// songs
let introSongs = [
  {
    id: 1,
    artist: "Poobon",
    musicName: "Tigh",
    path: "musics/Jason_Derulo_Savage_Love_320.mp3",
    cover: ".png",
  },
  {
    id: 2,
    artist: "021 - KID",
    musicName: "Baby Bad",
    path: ".mp3",
    cover: ".png",
  },
  {
    id: 3,
    artist: "Koroush",
    musicName: "Shahkare",
    path: ".mp3",
    cover: ".png",
  },
  {
    id: 4,
    artist: "Billie Illish",
    musicName: "No Time To Die",
    path: ".mp3",
    cover: ".png",
  },
];

let introSongsWrapper = document.querySelector(".intro-songs-wrapper");
let mainAudio = document.querySelector(".main-audio");

introSongs.forEach(function (music) {
  createIntroMuics(music);
});

function createIntroMuics(music) {
  introSongsWrapper.insertAdjacentHTML(
    "beforeend",
    '<div class="intro-song-content swiper-slide"> <div class="intro-song__img">    <img src="' +
      music.cover +
      '" alt="" />  </div>  <div class="intro-song-infos">    <div class="intro-song__name">' +
      music.musicName +
      '</div>    <div class="intro-song__artist">' +
      music.artist +
      '</div>  </div>  <div class="intro-song-control">    <div class="intro-control__play"><i class="fa fa-play" onclick="loadMuisc(' +
      music.id +
      ')"></i></div>     <div class="intro-control__like"><i class="fa fa-heart"></i></div>    <div class="intro-control__download"><i class="fa fa-download"></i></div>    <div class="intro-control__add"><i class="fa fa-plus"></i></div>  </div>  </div>'
  );
}

function loadMuisc(muiscID) {
  
}
