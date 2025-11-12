import { use, useState } from "react"

export default function () {

const [isPley,setlsPlay] = useState(false)

function handlerPlay() {
setlsPlay(!isPley)
}

    return (
        <div>

            <img src="" alt="" />
            <div className="tex-center">
                <h2 className="tex-4x1 font-bold" >titulo de la cancion </h2>
                <p className="opacity-50">album</p>
                <p className ="font-semibold opacity-80">author</p>

            </div>
         </div>
    )

}