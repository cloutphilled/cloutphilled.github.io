var song;
var button;
var noise;
var button2;
function preload(){
  song = loadSound("10 THRONE MIX7.wav");
  noise = loadSound("white.mp3");
}

function setup() {

  noise.play();
  noise.setVolume(0.1);
  
  button2 = createButton("1");
  button1 = createButton("2");
  button1 = createButton("3");
  button1 = createButton("4");
  button1 = createButton("5");
  button1 = createButton("6");
  button1 = createButton("7");
  button1 = createButton("8");
  button1 = createButton("9");
  button1 = createButton("10");
  button1 = createButton("11");
  button1 = createButton("12");
  button1 = createButton("13");
  button1 = createButton("14");
  button1 = createButton("15");
  button1 = createButton("16");
  button1 = createButton("17");
  button1 = createButton("18");
  button1 = createButton("19");
  button1 = createButton("20");
  button1 = createButton("21");
  button1 = createButton("22");
  button1 = createButton("23");
  button1 = createButton("24");
  button1 = createButton("25");
  button1 = createButton("26");
  button1 = createButton("27");
  button1 = createButton("28");
  button1 = createButton("29");
  button1 = createButton("30");
  button1 = createButton("31");
  button1 = createButton("32");
  button1 = createButton("33");
  button1 = createButton("34");
  button1 = createButton("35");
  button1 = createButton("36");
  button1 = createButton("37");
  button1 = createButton("18");
  button1 = createButton("19");
  button1 = createButton("40");
  button1 = createButton("41");
  button = createButton("42");
  button1 = createButton("43");
  button1 = createButton("44");
  button1 = createButton("45");
  button1 = createButton("46");
  button1 = createButton("47");
  button1 = createButton("48");
  button1 = createButton("49");
  button1 = createButton("50");
  button1 = createButton("51");
  button1 = createButton("52");
  button1 = createButton("53");
  button1 = createButton("54");
  button1 = createButton("55");
  button1 = createButton("56");
  button1 = createButton("57");
  button1 = createButton("58");
  button1 = createButton("59");
  button1 = createButton("60");
  button1 = createButton("61");
  button1 = createButton("62");
  button1 = createButton("63");
  button1 = createButton("64");
  button1 = createButton("65");
  button1 = createButton("66");
  button1 = createButton("67");
  button1 = createButton("68");
  button1 = createButton("69");
  button1 = createButton("70");
  button1 = createButton("71");
  button1 = createButton("72");
  button1 = createButton("73");
  button1 = createButton("74");
  button1 = createButton("75");
  button1 = createButton("76");
  button1 = createButton("77");
  button1 = createButton("78");
  button1 = createButton("79");
  button1 = createButton("80");
  button1 = createButton("81");
  button1 = createButton("82");
  button1 = createButton("83");
  button1 = createButton("84");
  button1 = createButton("85");
  button1 = createButton("86");
  button1 = createButton("87");
  button1 = createButton("88");
  button1 = createButton("89");
  button1 = createButton("90");
  button1 = createButton("91");
  button1 = createButton("92");
  button1 = createButton("93");
  button1 = createButton("94");
  button1 = createButton("95");
  button1 = createButton("96");
  button1 = createButton("97");
  button1 = createButton("98");
  button1 = createButton("99");
  button1 = createButton("100");
  button.mousePressed(togglePlaying);
  button2.mousePressed(toggleNoise);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    button.html("42");
    noise.stop();
  } 
}

function toggleNoise() {
  if (song.isPlaying()) {
    song.pause();
    noise.play();
    noise.setVolume(0.1);
    button2.html("1");
  }
}
