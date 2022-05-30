var song;
var noise;
song.loop = false;

function preload() {
  // Load a sound file
  song = loadSound("05 I_VE BEEN GONE FOR SO LONG MIX7.wav");
  noise = loadSound("white.mp3");
}

function setup() {
  createCanvas(1, 1);
  noise.play();
  noise.setVolume(0.1);
}

 function draw() 
{
  background(1);

  if (keyIsPressed) 
  {
    song.play();
    noise.stop();
  }
  
  
} 




/* function keyIsPressed() {
  if(keyIsPressed = 85) {
    song.play();
    noise.stop();
  }
  else {
    song.pause();
  }
} */
