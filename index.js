function playSound(e) {
        console.log(e); // it shows OBJECT every time you press a key-button
         // - in the object is props "keyCode", which is a number - 65 for A, 70 for F,...
         console.log("this shows the keyCode only: " + e.keyCode); // so this shows only the number

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        console.log(audio); // this shows the selected audio-element

    if (!audio) return; // = if there´s no audio (null), the function stops running

    audio.play();

}



window.addEventListener(`keydown`, playSound);