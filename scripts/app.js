let swiper = new Swiper(".mySwiper", {
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

let swiper2 = new Swiper(".mySwiper2", {
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

// 460
window.addEventListener("resize", function () {
  if (window.innerWidth < 460) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
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
  } else {
    swiper = new Swiper(".mySwiper", {
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
  }
});

// header
let bottomHeaderTitle = document.querySelector(".bottom-header__title");
let bottomHeaderImg = document.querySelector(".header-content__img");

// songs
let songs = [
  {
    id: 1,
    artist: "Billie Eilish ",
    musicName: "No time to Die",
    path: " https://files.musicfeed.ir/2020/02/Billie-Eilish-No-Time-To-Die-musicfeed.ir_.mp3?128kb",
    cover: "images/1.jpg",
  },
  {
    id: 2,
    artist: "Billie Eilish ",
    musicName: "Everything i Wanted",
    path: " https://files.musicfeed.ir/2019/11/Billie-Eilish-everything-i-wanted-128.mp3",
    cover: "images/2.jpg",
  },
  {
    id: 3,
    artist: "Billie Eilish ",
    musicName: "Happier Than ever",
    path: " https://files.musicfeed.ir/dir/2021/7/Billie%20Eilish%20-%20Happier%20Than%20Ever/Billie%20Eilish%20Happier%20Than%20Ever.mp3",
    cover: "images/3.jpg",
  },
  {
    id: 4,
    artist: "Billie Eilish ",
    musicName: "Listen Before i go",
    path: " http://bayanbox.ir/download/9131075167424378680/Billie-Eilish-listen-before-i-go.mp3",
    cover: "images/4.jpg",
  },
  {
    id: 5,
    artist: "Billie Eilish",
    musicName: "Bad Guy",
    path: " https://dl.baarzesh.net/music/2021/11/Billie_Eilish-_Bad_Guy_320.mp3",
    cover: "images/5.jpg",
  },
  {
    id: 6,
    artist: "Olivia Rodrigo",
    musicName: "Drivers License",
    path: " https://files.musicfeed.ir/dir/2021/5/Olivia%20Rodrigo%20drivers%20license-128.mp3",
    cover: "images/6.jpg",
  },
  {
    id: 7,
    artist: "Parsalip",
    musicName: "Adam Barfi",
    path: " https://dl.melonmusic.ir/1401/Parsalip%20-%20Adam%20Barfi%20[128].mp3",
    cover: "images/7.jpg",
  },
  {
    id: 8,
    artist: "021 - Kid",
    musicName: "Baby Bad",
    path: "https://soundcloud.com/021kid/baby-bad",
    cover: "images/8.jpg",
  },
  {
    id: 9,
    artist: "Poobon",
    musicName: "Bimarefat",
    path: " https://dl.my-ahangha.ir/up/2019/Poobon%20Ft%20Behzad%20Leito%20-%20Bi%20Marefat%20128.mp3",
    cover: "images/9.jpg",
  },
  {
    id: 10,
    artist: "Koorosh",
    musicName: "Shahkare",
    path: " http://dl.shahreahang.com/radiojavan/dey-98/Koorosh-Shahkar%20(Ft%20Sami%20Low%20andamp;%20Pedi%20I)-320.mp3",
    cover: "images/10.jpg",
  },
  {
    id: 11,
    artist: "Billie Illish",
    musicName: "No Time To Die",
    path: ".mp3",
    cover: "images/11.jpg",
  },
  {
    id: 12,
    artist: "Billie Illish",
    musicName: "No Time To Die",
    path: ".mp3",
    cover: "images/12.jpg",
  },
  {
    id: 13,
    artist: "Billie Illish",
    musicName: "No Time To Die",
    path: ".mp3",
    cover: "images/13.jpg",
  },
  {
    id: 14,
    artist: "Billie Illish",
    musicName: "No Time To Die",
    path: ".mp3",
    cover: "images/14.jpg",
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
const playerControlVolume = document.querySelector(".player-control__volume i");
const volumeInputElem = document.querySelector(".volume__input ");
const settingsSpeedElem = document.querySelector(".settings-speed-container");
let playerPrograssBar = document.querySelector(".player-prograss__fit");
const musicplayerNextBtn = document.querySelector(
  ".music-player-icons .fa-forward"
);
const musicplayerPrevBtn = document.querySelector(
  ".music-player-icons .fa-backward"
);
const musicplayerRepeatBtn = document.querySelector(
  ".music-player-icons .fa-repeat"
);
const musicplayerRandomBtn = document.querySelector(
  ".music-player-icons .fa-random"
);
const musicplayerSettingBtn = document.querySelector(
  ".player-control__setting .fa-gear"
);
const speedItemsElem = document.querySelectorAll(".speed-item");
let isPlaying = false;
let MusicCounter = null;
// release songs
const releaseContentContainer = document.querySelector(".new-released-wrapper");
let releaseContentImg = document.querySelectorAll(".release-content__img img");
// searchBar
const headerSearchInput = document.querySelector(".header-search__input");
const searchedSongsContainer = document.querySelector(".searched-songs");
const searchedSongsWrapper = document.querySelector(".searched-songs-wrapper");

// setPlayer details
function loadMusic(muiscID) {
  MusicCounter = muiscID;
  muiscID = muiscID - 1;
  playerInfoName.textContent = songs[muiscID].musicName;
  playerInfoArtist.textContent = songs[muiscID].artist;
  playerInfoImg.setAttribute("src", songs[muiscID].cover);
  mainAudio.setAttribute("src", songs[muiscID].path);
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

// increase prograss width and duration time
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

// volume  handler
function openVolumeHandler() {
  volumeInputElem.classList.toggle("controls-active");
}

let inputVolume;
function changeVolumeHanler() {
  inputVolume = volumeInputElem.value / 100;
  mainAudio.volume = inputVolume;
}

// next and Prev music handler
function nextMusicHandler() {
  MusicCounter = MusicCounter + 1;
  if (MusicCounter > songs.length) {
    MusicCounter = 0;
  }

  loadMusic(MusicCounter);
}

function PrevMusicHandler() {
  MusicCounter = MusicCounter - 1;
  if (MusicCounter - 1 < 0) {
    MusicCounter = songs.length;
  }

  loadMusic(MusicCounter);
}

// repeat music handler
function repeatMusicHandler() {
  mainAudio.currentTime = 0;
}

// play a random music
let randomNum;
function playRandomHandler() {
  randomNum = Math.floor(Math.random() * songs.length);
  loadMusic(randomNum);
}

// speed settings
function openSettingHandler() {
  settingsSpeedElem.classList.toggle("controls-active");
}

speedItemsElem.forEach(function (item) {
  item.addEventListener("click", function (event) {
    mainAudio.playbackRate = event.target.textContent.split("X")[0];
  });
});

// find searched songs
let relatedSongs;
function findRelatedSongs() {
  relatedSongs = songs.filter(function (music) {
    return music.musicName
      .toLowerCase()
      .includes(headerSearchInput.value.toLowerCase());
  });

  createSearchedSongs(relatedSongs);
}

function openRelatedSongs() {
  searchedSongsContainer.classList.add("related-songs-active");
}

function closeRelatedSongs() {
  searchedSongsContainer.classList.remove("related-songs-active");
}

// window events
window.onload = function () {
  bottomHeaderImg.classList.add("header-img-active");
  document.body.style.opacity = 1;
};

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    searchedSongsContainer.style.top = 0;
  } else {
    searchedSongsContainer.style.top = "4rem";
  }
});

playerPlayBtn.addEventListener("click", function () {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});
mainAudio.addEventListener("timeupdate", updatePorgrassBar);
playerControlVolume.addEventListener("click", openVolumeHandler);
volumeInputElem.addEventListener("input", changeVolumeHanler);
musicplayerNextBtn.addEventListener("click", nextMusicHandler);
musicplayerPrevBtn.addEventListener("click", PrevMusicHandler);
musicplayerRepeatBtn.addEventListener("click", repeatMusicHandler);
musicplayerRandomBtn.addEventListener("click", playRandomHandler);
musicplayerSettingBtn.addEventListener("click", openSettingHandler);
headerSearchInput.addEventListener("input", findRelatedSongs);
headerSearchInput.addEventListener("focus", openRelatedSongs);
headerSearchInput.addEventListener("blur", closeRelatedSongs);
