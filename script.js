console.log("hello");

//intialize the variables
let songIndex = 0;
let audioElement = new Audio("1.m4a");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongPlay = document.getElementById("mastersongname");
let b = document.getElementById("b");
let songnames = document.getElementById("songnames");
let gif2 = document.getElementById("gif2");

let t = document.getElementsByClassName("t");
let songItem = Array.from(document.getElementsByClassName("songitem"));
// let songItemPlay= Array.from(document.getElementsByClassName("songitemplay"));
let songs = [
    { songName: "song name 1", filePath: "1.m4a", coverPath: "https://c.saavncdn.com/585/Naacho-Naacho-From-Rrr--Hindi-2021-20211110131007-500x500.jpg" },
    { songName: "song name 2", filePath: "2.mpeg", coverPath: "https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-500x500.jpg" },
    { songName: "song name 3", filePath: "3.mpeg", coverPath: "https://c.saavncdn.com/585/Naacho-Naacho-From-Rrr--Hindi-2021-20211110131007-500x500.jpg" },
    { songName: "song name 4", filePath: "4.mpeg", coverPath: "https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-500x500.jpg" },
    { songName: "song name 5", filePath: "5.mpeg", coverPath: "https://c.saavncdn.com/585/Naacho-Naacho-From-Rrr--Hindi-2021-20211110131007-500x500.jpg" },
    { songName: "song name 6", filePath: "6.mpeg", coverPath: "https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-500x500.jpg" },
    { songName: "song name 7", filePath: "7.mpeg", coverPath: "https://c.saavncdn.com/585/Naacho-Naacho-From-Rrr--Hindi-2021-20211110131007-500x500.jpg" }
]

songItem.forEach((element,i)=>{

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songName;

})

// songItemPlay.forEach((i)=>{
//     audioElement = new Audio(songs[i].filePath);
// })

// audioElement.play();

// handelplay/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("ri-play-circle-fill");
        masterPlay.classList.add("ri-pause-circle-fill");
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.add("ri-play-circle-fill");
        masterPlay.classList.remove("ri-pause-circle-fill");
        gif.style.opacity = 0;

    }
})

// listen to the events/
audioElement.addEventListener('timeupdate', () => {

    // update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
})

const songbanner = ()=>{
    b.src=songs[songIndex].coverPath;
    gif2.style.opacity=1;
    songnames.innerText=songs[songIndex+1].songName;
}

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('ri-pause-circle-fill');
        element.classList.add('ri-play-circle-fill');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('ri-play-circle-fill');
        e.target.classList.add('ri-pause-circle-fill');
        audioElement.src=`${songIndex+1}.m4a`
        audioElement.currentTime=0;
        masterSongPlay.innerText=songs[songIndex].songName;
      
        // b.src=songs[songIndex+1].coverPath;
        // gif2.style.opacity=1;
        // songnames.innerText=songs[songIndex].songName;




        audioElement.play();
        masterPlay.classList.remove("ri-play-circle-fill");
        masterPlay.classList.add("ri-pause-circle-fill");
        songbanner();
        // masterSongPlay.innerText=songs[songIndex].songName;

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=6
    }
    else{
        songIndex += 1;
    }
//     makeallplays();
//     songIndex.classList.remove('ri-play-circle-fill');
//   songIndex.classList.add('ri-pause-circle-fill');

    audioElement.src=`${songIndex+1}.m4a`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSongPlay.innerText=songs[songIndex].songName;
 

    // b.src=songs[songIndex+1].coverPath;
    // gif2.style.opacity=1;
    // songnames.innerText=songs[songIndex].songName;

    masterPlay.classList.remove("ri-play-circle-fill");
    masterPlay.classList.add("ri-pause-circle-fill");
    
    // masterSongPlay.innerText=songs[songIndex].songName;
    songbanner();

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }

    audioElement.src=`${songIndex+1}.m4a`;
    masterSongPlay.innerText=songs[songIndex].songName;
 
    // b.src=songs[songIndex+1].coverPath;
    // gif2.style.opacity=1;
    // songnames.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("ri-play-circle-fill");
    masterPlay.classList.add("ri-pause-circle-fill");
    songbanner();
    // masterSongPlay.innerText=songs[songIndex].songName;
})