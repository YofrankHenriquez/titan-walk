import { useSong } from "../store"
import type { Song } from "../types/song"

interface Props {
    song: Song
}


export default function (
    { song }: Props
) {

const {updateSong} =useSong ()


function handlerclik(){
  
    updateSong (song)
}





    return (
        <div className="flex items-center gap-2" onClick={handlerclik} >
            <img className ="w-16 rounded-full"src={song.image.url} alt="" />
            <div>
                <h3>{song.title}</h3>
                <p>{song.author}</p>
            </div>
        </div>


    )
}

