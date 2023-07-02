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
    })
    console.log(id);
    useEffect(() => {
    if(id){
        Instance.get(`music.php?id=${id}`)
        .then(res => {
            console.log(res.data)
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
