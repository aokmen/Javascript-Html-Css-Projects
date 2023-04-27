const mySong =document.getElementById("mySong")
const icon =document.getElementById("icon")

icon.onclick = function() {
   // mySong.play()
   if (mySong.paused) {
        mySong.play();
        icon.src ="assets/pause.png"
   } else {
        mySong.pause();
        icon.src ="assets/play.png"
   }
}