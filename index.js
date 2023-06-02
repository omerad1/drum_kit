
for(var i=0 ; i< document.querySelectorAll(".drum").length ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnitmation(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnitmation(event.key);

});


function makeSound(key){
  switch (key) {
    case "w":
        var audio_1 = new Audio('./sounds/crash.mp3');
        audio_1.play();
      break;
    case "a":
        var audio_2 = new Audio('./sounds/kick-bass.mp3');
        audio_2.play();
      break;
    case "s":
        var audio_3 = new Audio('./sounds/snare.mp3');
        audio_3.play();
      break;
    case "d":
        var audio_4 = new Audio('./sounds/tom-1.mp3');
        audio_4.play();
      break;
    case "j":
        var audio_5 = new Audio('./sounds/tom-2.mp3');
        audio_5.play();
      break;
    case "k":
        var audio_6 = new Audio('./sounds/tom-3.mp3');
        audio_6.play();
      break;
    case "l":
        var audio_7 = new Audio('./sounds/tom-4.mp3');
        audio_7.play();
      break;
    default:
      console.log(key);
      }
}

function buttonAnitmation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}
