import Artist from "@/components/feature/Artist";
import MusicInfo from "@/components/feature/MusicInfo";
import MainLayout from "@/components/layout/MainLayout";
import Instance from "@/utils/Instance";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Home({}) {
    const router = useRouter();
    const { id } = router.query;
    const [music, setMusic] = useState({
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
                name: 'Loading...',
                link: '',
                share: '',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
                picture_small: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
                picture_medium: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
                picture_big: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
                picture_xl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
                radio: false,
                tracklist: '',
                type: '',
            },
        ],
        md5_image: '',
        artist: {
    
            id: 0,
            name: 'Loading...',
            link: '',
            share: '',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            picture_small: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            picture_medium: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            picture_big: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            picture_xl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            radio: false,
            tracklist: '',
            type: '',
        },
        album: {
            id: 0,
            title: 'Loading...',
            link: '',
            cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            cover_small: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            cover_medium: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            cover_big: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            cover_xl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            md5_image: '',
            release_date: '0000-00-00',
            tracklist: '',
            type: '',
        },
        type: '',
    })
    useEffect(() => {
    if(id){
        Instance.get(`music.php?id=${id}`)
        .then(res => {

            setMusic(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    }, [id])
    


  return (
    <MainLayout title="Home" description="Home page">
      <MusicInfo 
        music = {music}
      />
      <Artist
        artist = {music.artist}
      />
    </MainLayout>  
  );
}
