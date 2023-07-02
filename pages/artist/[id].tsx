import ArtistMusic from "@/components/common/ArtistMusics";
import SpaceOnly from "@/components/common/SpaceOnly";
import MainLayout from "@/components/layout/MainLayout";
import Instance from "@/utils/Instance";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ArtistDetail({}) {
    const router = useRouter();
    const { id } = router.query;
    const [nextpage , setNextpage] = useState('');
    const [musics , setMusics] = useState([{
        id: 0,
        title: '',
        duration: 0,
        track_position: 0,
        disk_number: 0,
        rank: 0,
        release_date: '2022-02-02' ,
        explicit_lyrics: false,
        preview: '',
        bpm: 0,
        gain: 0,
        available_countries: [],
        contributors: [
            {
                id: 0,
                name: '',
                link: '',
                share: '',
                picture: '',
                picture_small: '',
                picture_medium: '',
                picture_big: '',
                picture_xl: '',
                radio: false,
                tracklist: '',
                type: '',
            },
        ],
        md5_image: '',
        artist: {
    
            id: 0,
            name: '',
            link: '',
            share: '',
            picture: '',
            picture_small: '',
            picture_medium: '',
            picture_big: '',
            picture_xl: '',
            radio: false,
            tracklist: '',
            type: '',
        },
        album: {
            id: 0,
            title: '',
            link: '',
            cover: '',
            cover_small: '',
            cover_medium: '',
            cover_big: '',
            cover_xl: '',
            md5_image: '',
            release_date: '',
            tracklist: '',
            type: '',
        },
        type: '',
    }
    ]);
    const [artist, setArtist] = useState({
        id: 0,
        name: '',
        link: '',
        share: '',
        picture: '',
        picture_small: '',
        picture_medium: '',
        picture_big: '',
        picture_xl: '',
        radio: false,
        tracklist: '',
        type: '',
    });
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (id) {
            setLoading(true);
            Instance.get(`artist_music.php?id=https://api.deezer.com/artist/${id}`)
            .then(res => {
                if(res.data){
                    setArtist(res.data)
                    setNextpage(res.data.tracklist)
                    getNext(res.data.tracklist)
                }
                setLoading(false)
            })
        }
    }, [id]);

    function getNext(nextpages:string){
        console.log(nextpages)
        setLoading(true);
        Instance.get('artist_music.php?id='+nextpages)
        .then(res => {
            if(res.data){
                setMusics(res.data.data)
                setNextpage(res.data.next)
                console.log(nextpage)
            }
            setLoading(false)
        })
    }



  return (
    <MainLayout title="Artist" description="Artist Detail">
             <div className=" flex h-96 content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-2/5 w-full  bg-cover bg-center"
                    style={{
                        backgroundImage : `url('${artist.picture_big}')`
                    }}
                >
                </div>
                <div className="absolute top-0 h-2/5 w-full bg-black/75 bg-cover bg-center">
                </div>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white font-black">{artist.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-7 ">
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="px-4 relative w-full text-center">
                <h2 className="text-4xl font-bold mt-3 mb-1 text-blueGray-700">Music</h2>
                <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">Listen Music of Popular artist</p>
            </div>
            <div className="px-4  grid grid-cols-6 gap-4 w-full container">
                        <ArtistMusic
                            music ={musics}
                        />
                </div>
            </div>
            <div className="text-center">
            </div>
        </div>


    </MainLayout>  
  );
}