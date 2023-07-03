import MainLayout from "@/components/layout/MainLayout";
import Instance from "@/utils/Instance";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ArtistDetail({}) {

    // data type
    interface Artist {
        id: number;
        name: string;
        picture: string;
        picture_small: string;
        picture_medium: string;
        picture_big: string;
        picture_xl: string;
        radio: boolean;
        tracklist: string;
        type: string;
    }

    // define type


    const router = useRouter();
    const { id } = router.query;
    const [genre , setGenre] = useState({
        id: 0,
        name: '',
    })

    const [artist, setArtist] = useState([{
        id: 0,
        name: 'Loading...',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
        picture_small: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
        picture_medium: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
        picture_big: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
        picture_xl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
        radio: false,
        tracklist: '',
        type: '',
    }]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (id) {
            Instance.get(`genre_music.php?id=https://api.deezer.com/genre/${id}`)
            .then(res => {
                if(res.data){
                    setGenre(res.data)
                }
            })
            setLoading(true);
            Instance.get(`genre_music.php?id=https://api.deezer.com/genre/${id}/artists`)
            .then(res => {
                if(res.data.data){
                    setArtist(res.data.data)
                }
                setLoading(false)
            })
        }
    }, [id]);





  return (
    <MainLayout title="Artist" description="Artist Detail">
             <div className=" flex h-96 content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-2/5 w-full  bg-cover bg-center"
                    style={{
                        backgroundImage : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOkwYjoxoD8xA01W1bvveFKS-KAqhoE9vUg&usqp=CAU')"

                    }}
                >
                </div>
                <div className="absolute top-0 h-2/5 w-full bg-black/75 bg-cover bg-center">
                </div>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white font-black">{genre.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-7 ">
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="px-4 relative w-full text-center">
                <h2 className="text-4xl font-bold mt-3 mb-1 text-blueGray-700">Artist</h2>
                <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">Listen Music of Popular artist</p>
            </div>
            <div className="px-4  grid grid-cols-6 gap-4 w-full container">
                {
                    artist.map((dat , indx)=>{
                        return<div onClick={()=> { router.push("/artist/"+dat.id) } } key={indx} className="p-5 cursor-pointer bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                        <Image src={dat.picture_big} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-full h-50 w-50 shadow-lg shadow-gray-500/25" width={200} height={200} />
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">{dat.name}</h5>
                        <div className="mx-auto mt-5">
                        </div>
                    </div> 
                    })
                }     
            </div>
            </div>
            <div className="text-center">
            </div>
        </div>


    </MainLayout>  
  );
}
