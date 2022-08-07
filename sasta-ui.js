const playBtn = document.querySelector('.play-btn')
const playlistBtn = document.querySelector('#playlistBtn')

playBtn.addEventListener('click', ()=>{
    const svgImg = document.querySelector('.play-btn img')
    if(playBtn.classList.contains('paused')){
        svgImg.src = 'src/img/pause-btn.svg'
        // pause button UI
        svgImg.classList.remove('padding-3')
        svgImg.parentElement.classList.remove('padding-3')
        playBtn.classList.replace('paused', 'playing')
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
