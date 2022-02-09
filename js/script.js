// Complete Day 1 goals here
let songName = ["Jonny Boy", "Baby shark"];
let songArtist = ["kite", "Kids Songs"];
let images = [
  "https://townsquare.media/site/812/files/2020/05/Illustrated-album-covers.jpg?w=1200",
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121542017/original/ba92daef74bce708b9d431b4d421ac3a542a0a4a/do-elegant-album-cover-art-single-or-cd-cover-design.jpg",
];
let links = [
  "https://www.youtube.com/watch?v=XqZsoesa55w",
  "https://www.youtube.com/watch?v=XqZsoesa55w",
];
let length = ["3:47", "2:16"];
function displaySongInfo() {
  images.forEach(function (cover) {
    $(".images ").append(`<p><img src="${cover}"></p>`);
  });

  songName.forEach(function (name) {
    $(".songs ").append(`<p>${name}</p>`);
  });

  songArtist.forEach(function (singer) {
    $(".artists ").append(`<p>${singer}</p>`);
  });

  length.forEach(function (lengths) {
    $(".lengths ").append(`<p>${lengths}</p>`);
  });

  links.forEach(function (link) {
    $(".links ").append(`<p><a href="${link}">Link</a></p>`);
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
