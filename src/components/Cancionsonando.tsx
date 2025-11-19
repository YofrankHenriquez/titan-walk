import { useEffect, useRef } from "react"
import { useSong } from "../store"


export default function () {


    const { song, updateSong } = useSong()
    const referenciaAudio = useRef<HTMLAudioElement | null>(null)


    function handlerPlay() {
        if (referenciaAudio.current) {
            referenciaAudio.current.play()
        } else {
            referenciaAudio.current?.pause()
        }
    }
useEffect(function() {
        const cancionguardada = localStorage.getItem('song')

        if (cancionguardada) {
            updateSong(JSON.parse(cancionguardada))
        }
    }, [])

return (
    
    <div>

        <img src="" alt="" />
        <div className="tex-center">
            <h2 className="tex-4x1 font-bold" > {song?.title}</h2>
            <p className="opacity-50">{song?.album}</p>
            <p className="font-semibold opacity-80">{song?.author}</p>

        </div>

        <audio src={song?.audio.url}  autoPlay ref={referenciaAudio} />

    </div>
)

}
