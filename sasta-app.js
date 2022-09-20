/* File consists app functionalities
    - Playling media 
    - Searching tracks 
*/

const audio = document.querySelector('audio')
const audioSrc = document.querySelector('source')
const nextBtn = document.querySelector('.next-btn')
const previousBtn = document.querySelector('.previous-btn')

// Load Track to Player Object
document.addEventListener('DOMContentLoaded', loadTracks)

// Player Object
const player = {
    track_name: '',
    track_artist: '',
    track_thumbnail: '',
    track_src: '',
    track_duration: 0,
    track_current_progress: 0,
    audioPlayer: function(){
        audioSrc.src = this.track_src
        audio.load()
    },
    updateDOM: function(){
        document.querySelector('.art').src = this.track_thumbnail
        document.querySelector('marquee').textContent = this.track_name
        document.querySelector('h3.artist').textContent = this.track_artist
        document.querySelector('.current-progress').textContent = this.track_current_progress
        document.querySelector('.total-duration').textContent = this.track_duration
    },
    updateBar: function(){
        let value = bar.value
        audio.currentTime = value
    }
}

playBtn.addEventListener('click', playMusic)
nextBtn.addEventListener('click', playNext)


function loadTracks(){
    
    // Get a track info object
    let track = getTrack()
    player.track_name = track.name
    player.track_artist = track.artist
    player.track_thumbnail = track.thumbnail
    player.track_src = track.src
    player.track_duration = audio.duration
    player.track_current_progress = audio.currentTime

    // update Player DOM and Audio Player
    player.audioPlayer()
    player.updateDOM()
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
}

function playNext(){
    audioSrc.src = '/src/audio/3.m4a'
    audio.load()
    audio.play()
}



