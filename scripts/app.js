var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    1025: {
      slidesPerView: 2,
    },
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
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
});

// header
let bottomHeaderTitle = document.querySelector(".bottom-header__title");
let bottomHeaderImg = document.querySelector(".header-content__img");
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

  createSearchedSongs(relatedSongs); //  createElement.js
}

function openRelatedSongs() {
  searchedSongsContainer.classList.add("related-songs-active");
}

function closeRelatedSongs() {
  searchedSongsContainer.classList.remove("related-songs-active");
}

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

// 🔴  Create all songs
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

// Intro Musics
function createIntroMuics(music) {
  introSongsWrapper.innerHTML += `<div class="intro-song-content swiper-slide prevent-select ">
        <div class="intro-song__img">    
              <div class="img" style="background-image : url(${
                music.cover
              } )" alt="" ></div>
        </div>
    <div class="intro-song-infos"> 
        <div class="intro-song__name">${(music, musicName)}</div>  
       <div class="intro-song__artist">${music.artist}</div>  
    </div>  
         
       <div class="intro-song-control">
               <div class="intro-control__play"><i class="fa fa-play" onclick="loadMusic(${
                 music.id
               })"></i></div> 
               <div class="intro-control__like"><i class="fa fa-heart"></i></div>  
                <div class="intro-control__download"><i class="fa fa-download"></i></div>   
                <div class="intro-control__add"><i class="fa fa-plus"></i></div>  
       </div> 
    </div>`;
}

// new release
function createReleaseMusics(music) {
  releaseContentContainer.innerHTML += `
  <div class="release-content prevent-select">  

        <div class="release-content__img">   
              <img src="${music.cover}" /> 
              <i class="fa fa-play-circle release-play" onclick="loadMusic(${music.id})"></i>    
        </div> 

       <div class="release-content__info">    
               <div class="release-name">${music.musicName}</div>  
                <div class="release-artist">${music.artist}</div>
         </div>
         
  </div>`;

  iconHovers();
}

// searched songs
function createSearchedSongs(relatedSongs) {
  searchedSongsWrapper.innerHTML = "";

  relatedSongs.forEach(function (music) {
    searchedSongsWrapper.innerHTML += `
    <div class="searched-content prevent-select">    
          <div class="searched__img">         
              <img src="${music.cover}" alt="">   
          </div>  
    
         <div class="searched-info">
                <div class="searched__musicname">${music.musicName}</div>
                <div class="searched__artist">${music.artist}</div>
             </div>
             
     </div> `;
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

// 🔴 window events and Responsive
window.onload = function () {
  bottomHeaderImg.classList.add("header-img-active");
  document.body.style.opacity = 1;
  // if (window.innerWidth < 460) {
  //   //swiper onload template
  //   swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   });
  // } else {
  //   swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   });
  // }
  // if (window.innerWidth < 675) {
  //   document
  //     .querySelector(".header-content__img")
  //     .setAttribute("src", "images/header-bg3.jpg");
  // } else {
  //   document
  //     .querySelector(".header-content__img")
  //     .setAttribute("src", "images/header-bg2.jpg");
  // }
};

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
