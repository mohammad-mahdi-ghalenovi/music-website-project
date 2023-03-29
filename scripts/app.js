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

const swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// header
let bottomHeaderTitle = document.querySelector(".bottom-header__title");
let bottomHeaderImg = document.querySelector(".header-content__img");

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

const introSongsWrapper = document.querySelector(".intro-songs-wrapper");
const mainAudio = document.querySelector(".main-audio");
// music Player
const playerInfoImg = document.querySelector(".player-info__img img");
const playerInfoName = document.querySelector(".player-info__name");
const playerInfoArtist = document.querySelector(".player-info__artist");
const playerPlayBtn = document.querySelector(".fa-play-circle");
const playerControlDuration = document.querySelector(
  ".player-control__duration"
);
const playerControlCurrent = document.querySelector(".player-control__current");
const playerControlVolume = document.querySelector(
  ".player-control__volume input"
);
let playerPrograssBar = document.querySelector(".player-prograss__fit");
let isPlaying = false;
let i = 0;

introSongs.forEach(function (music) {
  i++;
  if (i < 5) {
    createIntroMuics(music);
  } else {
    console.log(i);
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

function loadMusic(muiscID) {
  muiscID = muiscID - 1;
  playerInfoName.textContent = introSongs[muiscID].musicName;
  playerInfoArtist.textContent = introSongs[muiscID].artist;
  playerInfoImg.setAttribute("src", introSongs[muiscID].cover);
  mainAudio.setAttribute("src", introSongs[muiscID].path);
  playMusic();
}

function playMusic() {
  mainAudio.play();
  isPlaying = true;
  playerPlayBtn.className = "fa fa-pause-circle";
}

function pauseMusic() {
  mainAudio.pause();
  isPlaying = false;
  playerPlayBtn.className = "fa fa-play-circle";
}

let musicDuration;
let musicCurrent;
let prograssBarPercent;
let currentMin;
let currentSeconde;
let durationMin;
let durationSeconde;
function updatePorgrassBar(e) {
  musicDuration = e.srcElement.duration;
  musicCurrent = e.srcElement.currentTime;
  // prograss percent
  prograssBarPercent = (musicCurrent / musicDuration) * 100;
  playerPrograssBar.style.width = prograssBarPercent + "%";
  // duration and current time set
  currentMin = Math.floor(musicCurrent / 60);
  durationMin = Math.floor(musicDuration / 60);
  durationSeconde = Math.floor(musicDuration % 60);
  currentSeconde = Math.floor(musicCurrent % 60);

  playerControlDuration.textContent = durationMin + " : " + durationSeconde;
  playerControlCurrent.textContent = currentMin + " : " + currentSeconde;

  if (durationSeconde < 10) {
    playerControlDuration.textContent =
      durationMin + " : " + 0 + durationSeconde;
  }
  if (currentSeconde < 10) {
    playerControlCurrent.textContent = currentMin + " : " + 0 + currentSeconde;
  }
}

playerPlayBtn.addEventListener("click", function () {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});
mainAudio.addEventListener("timeupdate", updatePorgrassBar);

window.onload = function () {
  bottomHeaderImg.classList.add("header-img-active");
  document.body.style.opacity = 1;
};
