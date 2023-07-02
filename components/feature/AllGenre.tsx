import Instance from "@/utils/Instance"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

export default function AllGenre() {
    // define type
    const  router = useRouter()


    interface SearchResults {
        id : number;
        name : string;
        picture_big : string;
    }


    const [res , setRes ] = useState([
       {
            id : 0,
            name : '',
            picture_big : '',
       }
    ]);
    useEffect(()=>{
        Instance.get(`genre.php`)
        .then(res => {
            if(res.data.data && res.data.data.length > 0 ){
                setRes(res.data.data)
            }
        })
    },[])
    return (  
        <>  
        <div className="flex flex-wrap -mx-4 justify-center">
            <div className="px-4 py-3 grid grid-cols-6 gap-4 w-full container">
                {
                    res.map((dat , indx )=>{
                        return<div onClick={()=> { router.push("/genre/"+dat.id) } } key={indx} className="p-5 cursor-pointer bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                        <img src={dat.picture_big} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-full h-50 w-50 shadow-lg shadow-gray-500/25" />
                            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">{dat.name}</h5>
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