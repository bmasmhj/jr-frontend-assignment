import React from 'react';
import { useState , useEffect } from 'react';
import Instance from '@/utils/Instance';
import ArtistMusic from '../common/ArtistMusics';
import Image from 'next/image';
type Props = {
    artist: {
        id: number;
        name: string;
        link: string;
        share: string;
        picture: string;
        picture_small: string;
        picture_medium: string;
        picture_big: string;
        picture_xl: string;
        radio: boolean;
        tracklist: string;
        type: string;
    };
};
const Artist: React.FC<Props> = ({ artist }) => {
    const [music , setMusics] = useState([{
        id: 0,
        title: 'Loading...',
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
            cover: '',
            cover_small: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            cover_medium: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            cover_big: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            cover_xl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            md5_image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
            release_date: '',
            tracklist: '',
            type: '',
        },
        type: '',
    }
    ]);
    useEffect(() => {
        if (artist) {
            Instance.get(`artist_music.php?id=${artist.tracklist}`)
            .then(res => {
                if(res.data.data){
                    setMusics(res.data.data)
                }
            })
        }
    }, [artist]);

    
    return (    
        <div className="container mx-auto">
            <div className="px-4 relative w-full text-center">
                <Image width={80} height={80} src={artist.picture_small} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full shadow-lg shadow-gray-500/25"/>
                <h2 className="text-4xl font-bold mt-3 mb-1 text-blueGray-700">{artist.name}</h2>
            </div>
            <div className="px-4  grid grid-cols-6 gap-4 w-full container">
                <ArtistMusic music={music} />
            </div>
        </div>
    )
}

export default Artist