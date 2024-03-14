function managePlaylist (playList, newSong) {
    playList.shift()
    playList.unshift(newSong)
    return playList
}

const initialPlaylist = ['Llegamos a la disco', 'Aprovecha', 'Virtual Diabla', 'RX']
const newSongToAdd = 'Hooka'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Inicial Playlist: ', initialPlaylist);
console.log('Nueva musica agregada: ', newSongToAdd);
console.log('Updated Playlist: ', updatePlaylist);