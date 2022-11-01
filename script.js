var totalButton=document.querySelectorAll(".button").length;

for(var i=0;i<totalButton;i++){
  document.querySelectorAll(".button")[i].addEventListener("click",
   function(){
   var buttonCode=this.innerHTML;
   playSound(buttonCode);
   }
   );
}

document.addEventListener("keydown",function(event){
  var code=event.key;
    playSound(code)
  
})
function playSound(key){
  key=key.toUpperCase();
  switch (key) {
    case "A":
      var tom1=new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;
    case "E":
        var tom2=new Audio("sounds/tom-2.mp3")
        tom2.play();
        break;
      case "R":
      var tom3=new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;
      case "G":
      var tom4=new Audio("sounds/tom-4.mp3")
      tom4.play();
      break; 
      case "J":
      var kickBass=new Audio("sounds/kick-bass.mp3")
      kickBass.play();
      break;
      case "I":
      var snare=new Audio("sounds/snare.mp3")
      snare.play();
      break;
      case "P":
      var crash=new Audio("sounds/crash.mp3")
      crash.play();
      break;  
  }
}

