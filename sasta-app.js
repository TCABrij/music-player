/* File consists app functionalities
    - Playling media 
    - Searching tracks 
*/

const audio = document.querySelector('audio')
const audioSrc = document.querySelector('source')
const nextBtn = document.querySelector('.next-btn')
const previousBtn = document.querySelector('.previous-btn')

playBtn.addEventListener('click', playMusic)
nextBtn.addEventListener('click', playNext)

function playMusic(){

    if(audio.dataset.paused == 'true')
    {
        audio.play()
        audio.dataset.paused = 'false'
    }
    else
    {
        audio.pause()
        audio.dataset.paused = 'true'   
    }
    console.log(audio.dataset.paused)
}

function playNext(){
    audioSrc.src = '/src/audio/Alan Walker - Darkside .m4a'
    audio.load()
    audio.play()
}