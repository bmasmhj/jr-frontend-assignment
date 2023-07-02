import Instance from "@/utils/Instance"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Image from "next/image";

export default function AllArtist() {
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
                md5: "",
                format : "",
            },
            ART_NAME : "",
            ART_ID : 0,
        }
    ]);
    useEffect(()=>{
        Instance.get(`artist.php`)
        .then(res => {
            if(res.data.results && res.data.results.length > 0 ){
                setRes(res.data.results)
            }
        })
    },[])
    return (  
        <>  
        <div className="flex flex-wrap -mx-4 justify-center">
            <div className="px-4 py-3 grid grid-cols-6 gap-4 w-full container">
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
    </>
    )
}