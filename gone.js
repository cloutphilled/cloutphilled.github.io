var noise;
var song;


function preload() {
    // Load a sound file
    noise = loadSound("white.mp3");
    song = loadSound("05. I_ve been gone for so long premix.mp3");
  }

function setup() {
    createCanvas(1, 1);
    noise.play();
    noise.setVolume(0.1);
  }


  function createSound(file) {
    var song = new Audio(file);
  
    return {
      start: function() {
        song.play();
      },
      stop: function() {
        song.pause();
        song.currentTime = 0;
      }
    };
  }

  var aNatural = createSound("05. I_ve been gone for so long premix.mp3");

document.onkeydown = function() {
  // ...
  aNatural.play();
  // ...
}

document.onkeyup = function() {
  // ...
  aNatural.stop();
  // ...
}

