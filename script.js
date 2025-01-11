const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

//console.log(recognition);

recognition.Lang = "eng-US"

const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    //recognition.start()

    // text to voice convert
    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command) {
        if (command.includes("open youtube")){
            speak("Youtube..., Khul, Gaya, hai")
        window.open("https://www.youtube.com/","_blank")
    } else if (command.includes("open facebook")){
        speak("facebook..., Khul, Gaya, hai")
    window.open("https://www.facebook.com/","_blank")

  } else if (command.includes("open instagram")){
    speak("instagram..., Khul, Gaya, hai")
window.open("https://www.instagram.com/","_blank")

} else if (command.includes("open whatsapp")){
    speak("whatsapp..., Khul, Gaya, hai")
window.open("https://www.whatsapp.com/","_blank")

} else if (command.includes("open google")){
    speak("google..., Khul, Gaya, hai")
window.open("https://www.google.com/","_blank")


} else if (command.includes("open linkedin")){
    speak("linkedin..., Khul, Gaya, hai")
window.open("https://in.linkedin.com/","_blank")

} else if (command.includes("open jiocinema")){
    speak("jiocinema..., Khul, Gaya, hai")
window.open("https://www.jiocinema.com/","_blank")

} else if (command.includes("open netflix")){
    speak("netflix..., Khul, Gaya, hai")
window.open("https://www.netflix.com/in/","_blank")                       

}else if (command.includes("open hotstar")){
    speak("hotstar..., Khul, Gaya, hai")
window.open("https://www.hotstar.com/in/","_blank")                       

}
else {
    speak("search on google...")
    window.open(`https://www.googel.com/search?q=${command}`,"_blank")
}
}
speak("NAMASTEE DOST AAPKA SWAGAT HAI")

setTimeout(()=>{
    btn.innerHTML = "Listening..."
    btn.style.backgroundColor = "red"
    recognition.start()
}, 13000);

recognition.onresult= (event)=>{
    const command = event.results[0][0].transcript.toLowerCase();
    //console.log(command)    
    handleCommands(command);

};
    recognition.onend = () => {
          btn.innerHTML = "Tap Me So That I Can Listen You..."
    btn.style.backgroundColor = "blue"
    }
});


