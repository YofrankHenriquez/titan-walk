export interface Song {
    _id: string
    title: string
    author: string
    album: string
    image: {
        id: string
        url: string
        filename: string
    }
    audio: {
        id: string
        url: string
        filename: string
    }
}