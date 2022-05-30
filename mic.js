let is_sound_playing = false;
let input;
let analyzer;
let song;

function preload(){
  song = loadSound("03 NEVER ME MIX7.wav");
  noise = loadSound("white.mp3");
}

function setup() {
  /* createCanvas(1240, 1080);
  background(255); */
  noise.play();
  noise.setVolume(0.1);
  input = new p5.AudioIn();
  input.start();
}

function draw() {
let volume = input.getLevel();
let threshold = 0.5;
  if (!is_sound_playing && (volume > threshold)){
    is_sound_playing = false;
    song.play();
    noise.stop();
    } 
  }

function stopSong() {
  background(1);
  if (keyIsPressed) 
    {
      song.pause();
    }
  }

  {
    stroke(0);
    fill(0, 100);
    rect(random(40, width), random(height), volume * 50, volume * 50);
  }
  
 /* {
  let y = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);
  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
} */
