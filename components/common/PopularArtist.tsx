import Instance from "@/utils/Instance"
import Link from "next/link";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Image from "next/image";

export default function PopularArtist() {
    // define type
    const  router = useRouter()


    interface SearchResults {
        ART_PICTURE: {
            md5: string;
            format : string;
        };
        ART_NAME: string;
        ART_ID : number;
    }


    const [res , setRes ] = useState([
        {
            ART_PICTURE : {
                md5: "033d460f704896c9caca89a1d753a137",
                format : "jpg",
            },
            ART_NAME : "Loading...",
            ART_ID : 0,
        }
    ]);
    useEffect(()=>{
        Instance.get(`artist.php?limit`)
        .then(res => {
            if(res.data.results && res.data.results.length > 0 ){
                setRes(res.data.results)
            }
        })
    },[])
    return (  
        <>  
        <div className="flex flex-wrap -mx-4 justify-center">
            <div className="px-4 relative w-full text-center">
                <h2 className="text-4xl font-bold mt-3 mb-1 text-blueGray-700">Popular Artist</h2>
                <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">Listen Music of Popular artist</p>
            </div>
            <div className="px-4  grid grid-cols-6 gap-4 w-full container">
                {
                    res.map((dat , indx )=>{
                        return<div onClick={()=> { router.push("/artist/"+dat.ART_ID) } } key={indx} className="p-5 cursor-pointer bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                        <Image width={500} height={500} src={`https://e-cdns-images.dzcdn.net/images/artist/${dat.ART_PICTURE.md5}/242x242-000000-80-0-0.${dat.ART_PICTURE.format}`} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-full h-50 w-50 shadow-lg shadow-gray-500/25" />
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">{dat.ART_NAME}</h5>
                        <div className="mx-auto mt-5">
                        </div>
                    </div> 
                    })
                }
            </div>
        </div>   
        <div className="text-center pb-5">
            <Link href="/artist" >See More </Link>
        </div>
    </>
    )
}