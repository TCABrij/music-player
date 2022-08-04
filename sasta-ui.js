const playBtn = document.querySelector('.play-btn')
const playlistBtn = document.querySelector('#playlistBtn')

playBtn.addEventListener('click', ()=>{
    const svgImg = document.querySelector('.play-btn img')
    if(playBtn.classList.contains('paused')){
        svgImg.src = 'src/img/pause-btn.svg'
        playBtn.classList.replace('paused', 'playing')
    }
    else{
        svgImg.src = 'src/img/play-btn.svg'
        playBtn.classList.replace('playing', 'paused')
    }

})

playlistBtn.addEventListener('click', ()=>{
    
    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal-window')
    modal.innerHTML = 
    `<div class="container modal-pop">
    <section class="search-section">
        <input type="text" class="search-field" autofocus placeholder="Search">
    </section>
    <section class="music-list-section">
        <div class="track">
            <h3 class="title">Alan walker - Sing me to sleep</h3>
            <p class="artist">Artist: Alan Walker</p>
        </div>
        <div class="track">
            <h3 class="title">Alan walker - Sing me to sleep</h3>
            <p class="artist">Artist: Alan Walker</p>
        </div>
        <div class="track">
            <h3 class="title">Alan walker - Sing me to sleep</h3>
            <p class="artist">Artist: Alan Walker</p>
        </div>
    </section>
</div>`

    document.body.appendChild(modal)
    
    document.querySelector('.modal-window').addEventListener('click', e=>{

        if(e.target.classList.contains('modal-window')){
            modal.firstChild.classList.replace('modal-pop', 'modal-closed')
            modal.firstChild.addEventListener('animationend', ()=>{
                modal.remove()
            })
        }
    })
})
