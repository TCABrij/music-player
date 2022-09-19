/* File consists app functionalities
    - Playling media 
    - Searching tracks 
*/

const audio = document.querySelector('audio')
const audioSrc = document.querySelector('source')
const nextBtn = document.querySelector('.next-btn')
const previousBtn = document.querySelector('.previous-btn')

// Player Object
const player = {
    track_name: '',
    track_artist: '',
    track_thumbnail: '',
    track_src: '',
    track_duration: 0,
    track_current_progress: 0,
    updateDOM: function(){
        document.querySelector('.art').src = this.track_thumbnail
        document.querySelector('marquee').textContent = this.track_name
        document.querySelector('h3.artist').textContent = this.track_artist

    },
    audioPlayer: function(){
        audioSrc.src = this.track_src
    }
}

playBtn.addEventListener('click', playMusic)
nextBtn.addEventListener('click', playNext)

// Load Track to Player Object
document.addEventListener('DOMContentLoaded', loadTracks)


function loadTracks(){
    
    // Get a track info object
    let track = getTrack()
    player.track_name = track.name
    player.track_artist = track.artist
    player.track_thumbnail = track.thumbnail
    console.log(player.track_thumbnail)
    player.track_src = track.src

    // update Player DOM and Audio Player
    player.updateDOM()
    player.audioPlayer()
}

function getTrack(){
    return tracks[0]
}

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
    audioSrc.src = '/src/audio/3.m4a'
    audio.load()
    audio.play()
}



