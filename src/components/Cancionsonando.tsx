import {  useState } from "react"
import { useSong } from "../store"

export default function () {

const [isPley,setlsPlay] = useState(false)
const {song} = useSong ()

function handlerPlay() {
setlsPlay(!isPley)
}

    return (
        <div>

            <img src="" alt="" />
            <div className="tex-center">
                <h2 className="tex-4x1 font-bold" > {song?.title}</h2>
                <p className="opacity-50">{song?.album}</p>
                <p className ="font-semibold opacity-80">{song?.author}</p>

            </div>
         </div>
    )

}
