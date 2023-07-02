import axios from "axios"
export default function Channels(){

    axios.get('https://api.deezer.com/artist/27')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })


    return(
        <div>
            <h1>Channels</h1>
        </div>
    )
}