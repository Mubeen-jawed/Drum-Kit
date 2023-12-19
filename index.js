// for detecting mouse click

var numberOfDrumButtons = document.querySelectorAll(".drum").length; 

for (i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonText = this.innerText;
        document.querySelector("." + buttonText).classList.add("pressed");

        setTimeout(function() {
            document.querySelector("." + buttonText).classList.remove("pressed")
        },100);
        
        switch (buttonText) {           
            
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;


            default:
                alert("Error 101");
                break;
        }
    })

}

// for detecting keyboard press

document.addEventListener("keydown",keyBoardPress)
   
function keyBoardPress(event) {

    var keyboardKey = event.key
    document.querySelector("." + keyboardKey).classList.add("pressed")

    setTimeout(function() {
        document.querySelector("." + keyboardKey).classList.remove("pressed")

    }, 100)


    switch (keyboardKey) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;


        default:
            
            break;
    }
}
