const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const songs = [
    'ChillBill-RobtoneJDaviSpooks',
    'DoiBo-LeCatTrongLy',
    'Goosebumps-TravisScottKendrickLamar',
    'Hydrocodone-Cuco',
    'Isis-JoynerLucasLogic'
]

let songIndex = 1
loadSongs(songs[songIndex])

function loadSongs(song) {
    title.innerHTML = song
    audio.src = `/musics/${song}.mp3`
    cover.src = `/images/${song}.jpg`
    
}
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress.style.width = `${progressPercent}%`
}
function setProgress(e) {
    const width = this.offsetWidth
    const clickX = e.offsetX
    const duration = audio.duration
    
    audio.currentTime = (clickX/width) * duration

}
playBtn.onclick = () => {
    if (musicContainer.classList.contains('play')) {
        musicContainer.classList.remove('play')
        playBtn.querySelector('i.fas').classList.remove('fa-pause')
        playBtn.querySelector('i.fas').classList.add('fa-play')
        audio.pause()
    } else {
        musicContainer.classList.add('play')
        playBtn.querySelector('i.fas').classList.remove('fa-play')
        playBtn.querySelector('i.fas').classList.add('fa-pause')
        audio.play()
        
    }
    // const isPlaying = musicContainer.classList.contains('play')
}
function nextSong() {
    songIndex = (songIndex + 1) % 5
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    loadSongs(songs[songIndex])
    audio.play()

}
function prevSong() {
    songIndex = (songIndex - 1 + 5) % 5
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    loadSongs(songs[songIndex])
    audio.play()

}
nextBtn.onclick = nextSong
prevBtn.onclick = prevSong
audio.addEventListener('timeupdate', updateProgress)
audio.addEventListener('ended', nextSong)
progressContainer.addEventListener('click', setProgress)

