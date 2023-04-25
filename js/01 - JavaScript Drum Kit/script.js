
document.addEventListener("keydown", (event) => {
    let code = event.code;
    console.log(code);
    let dataKey;
    switch(code){
        case "KeyA":
            dataKey = "65";
            break;
        case "KeyS":
            dataKey = "83";
            break;
        case "KeyD":
            dataKey = "68";
            break;
        case "KeyF":
            dataKey = "70";
            break;
        case "KeyG":
            dataKey = "71";
            break;
        case "KeyH":
            dataKey = "72";
            break;
        case "KeyJ":
            dataKey = "74";
            break;
        case "KeyK":
            dataKey = "75";
            break;
        case "KeyL":
            dataKey = "76";
            break;
    }
    let key = document.querySelector('div[data-key = "' + dataKey + '"]');
    let audio = document.querySelector('audio[data-key = "' + dataKey + '"]');
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(() =>{
    key.classList.remove("playing");
    }, 70); 
});
