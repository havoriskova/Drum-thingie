function playSound(e) {
        console.log(e); // it shows OBJECT every time you press a key-button
         // - in the object is props "keyCode", which is a number - 65 for A, 70 for F,...
         console.log("this shows the keyCode only: " + e.keyCode); // so this shows only the number

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        console.log(audio); // this shows the selected audio-element
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // = if there´s no audio (null), the function stops running
    
    audio.currentTime=0; // without this line the event has no effect when you press the button multipletimes
    audio.play(); 
    key.classList.add(`playing`);
}


function removeTransition(e) { // for CSS changing
    if (e.propertyName !== `transform`) return;
    e.target.classList.remove(`playing`); 
}


const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
window.addEventListener(`keydown`, playSound);