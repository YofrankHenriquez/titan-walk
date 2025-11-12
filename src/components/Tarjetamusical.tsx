interface Props {
    song: {
        _id: string
        title: string
        albun: string
        author: string
        audio: {
            url: string
            id: string
            filename: string

        },
        image: {
            url: string
            id: string
            filename: string

        }

    }
}


export default function (
    { song }: Props
) {

function handlerclik(){
    
}



    return (
        <div className="flex items-center" onClick={handlerclik} >
            <img className ="w-16 reunded-full"src={song.image.url} alt="" />
            <div>
                <h3>{song.title}</h3>
                <p>{song.author}</p>
            </div>
        </div>

    )
}

