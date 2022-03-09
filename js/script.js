// Complete Day 1 goals here
// let songName = ["Jonny Boy", "Baby shark"];
// let songArtist = ["kite", "Kids Songs"];
// let images = [
//   "https://townsquare.media/site/812/files/2020/05/Illustrated-album-covers.jpg?w=1200",
//   "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121542017/original/ba92daef74bce708b9d431b4d421ac3a542a0a4a/do-elegant-album-cover-art-single-or-cd-cover-design.jpg",
// ];
// let links = [
//   "https://www.youtube.com/watch?v=XqZsoesa55w",
//   "https://www.youtube.com/watch?v=XqZsoesa55w",
// ];
// let length = ["3:47", "2:16"];

let song1 = {
  name: "Jonny Boy",
  singer: "Kite",
  image:
    "https://townsquare.media/site/812/files/2020/05/Illustrated-album-covers.jpg?w=1200",
  link: "https://www.youtube.com/watch?v=XqZsoesa55w",
  lengths: "3:47",
};

let song2 = {
  name: "Baby Shark",
  singer: "Kids Songs",
  image:
    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121542017/original/ba92daef74bce708b9d431b4d421ac3a542a0a4a/do-elegant-album-cover-art-single-or-cd-cover-design.jpg",
  link: "https://www.youtube.com/watch?v=XqZsoesa55w",
  lengths: "3:47",
};





let getUp = [song1, song2,];

function displaySongInfo() {
  getUp.forEach(function (songer) {
    $(".images ").append(`<p><img src="${songer.image}"></p>`);
    $(".songs ").append(`<p>${songer.name}</p>`);
    $(".artists ").append(`<p>${songer.singer}</p>`);
    $(".lengths ").append(`<p>${songer.lengths}</p>`);
    $(".links ").append(`<p><a href="${songer.link}">Link</a></p>`);
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

  let song3 = {
  
};
  

  let imagez = $(".image").val();
  song3.image= imagez;

  let namer = $(".title").val();
  song3.name= namer;

  let creator = $(".artist").val();
  song3.singer= creator;

  let linker = $(".links").val();
  song3.link= linker;

  let lengther = $(".length").val();
   song3.length= lengther;
  
  getUp.push(song3);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
