/* File is responsible for UI
    - Player UI 
    - Buttons UI etc 
*/

const playBtn = document.querySelector('.play-btn')
const playlistBtn = document.querySelector('#playlistBtn')
const bar = document.querySelector('#bar')

// Listening to the Progress bar if user changes
bar.addEventListener('change', ()=>{
    player.updateBar()
})

playBtn.addEventListener('click', ()=>{
    const svgImg = document.querySelector('.play-btn img')
    if(playBtn.classList.contains('paused')){
        svgImg.src = 'src/img/pause-btn.svg'
        // pause button UI
        svgImg.classList.remove('padding-3')
        svgImg.parentElement.classList.remove('padding-3')
        playBtn.classList.replace('paused', 'playing')

        // player duration and current time
        setInterval( ()=>{

            document.querySelector('.current-progress').textContent = getCurrentDuration()
            document.querySelector('.total-duration').textContent = getTotalDuration()

            function getCurrentDuration(){
                let currentDuration = audio.currentTime
                let min = 0
                let seconds = Math.floor(currentDuration)
                if(currentDuration >= 60){
                    min = Math.floor(currentDuration/60)
                    seconds = Math.floor(currentDuration - min*60)
                }

                let bar = document.querySelector('#bar')
                bar.max = audio.duration
                bar.value = audio.currentTime

                return `0${min}:${seconds}`
            }

            function getTotalDuration(){
                let duration = audio.duration
                let min = Math.floor(duration/60) | 00
                let seconds = Math.floor(duration - min*60) | 00

                return `0${min}:${seconds}`
            }

        },10)
    }
    else{
        svgImg.src = 'src/img/play-btn.svg'
        svgImg.parentElement.classList.add('padding-3')
        playBtn.classList.replace('playing', 'paused')
    }

})

playlistBtn.addEventListener('click', openPlaylist)

function openPlaylist(){

    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal-window')
    modal.innerHTML = 
    `<div class="container modal-pop">
    <section class="search-section">
        <input type="text" class="search-field" autofocus placeholder="Search">
    </section>
    <section class="music-list-section">
        <div class="track">
            <h3 class="title">Alan walker - Ignite</h3>
            <p class="artist">Artist: Alan Walker</p>
        </div>
        <div class="track">
            <h3 class="title">Alan walker - Sing me to sleep</h3>
            <p class="artist">Artist: Alan Walker</p>
        </div>
        <div class="track">
            <h3 class="title">Alan walker - Play</h3>
            <p class="artist">Artist: Alan Walker</p>
        </div>
    </section>
</div>`

    document.body.appendChild(modal)

    // modal closing
    document.querySelector('.modal-window').addEventListener('click', closeModal)

    // close modal on clicking track 
    const musicTracks = document.querySelectorAll('.music-list-selection .track')
    musicTracks.forEach( track =>{
        track.addEventListener('click', closeModal)
    })

    function closeModal(e){
        if(e.target.classList.contains('modal-window') || e.target.classList.contains('track')){
            modal.firstChild.classList.replace('modal-pop', 'modal-closed')
            modal.firstChild.addEventListener('animationend', ()=>{
                modal.remove()
            })
        }
    }

}
