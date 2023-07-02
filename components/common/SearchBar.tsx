import Instance from '@/utils/Instance'
import { useState } from 'react'
import { useRouter } from "next/router";
export default function SearchBar() {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [showres , setShowres] = useState(false)
    // define types 
    interface SearchResults {
        id: number;
        title: string;
        duration: number;
        artist: {
            name: string;
        };
        album: {
            cover: string;
        };
        type: string;
    }


    const [searchResults, setSearchResults] = useState([
        {
            id: 0,
            title: '',
            duration: 0,
            artist: {
                name: '',
            },
            album: {
                cover: '',
            },
            type: '',
        }
    ])
    const [loading, setLoading] = useState(false)
    const handleSearch = (val : string) => {
        setSearch(val)
        if (val.length > 0) {
            setLoading(true)
            setShowres(true)
            Instance.get(`search.php?q=${val}`)
            .then(res => {
                if(res.data.data && res.data.data.length > 0 ){
                    setSearchResults(res.data.data)
                }
                setLoading(false)
            })
                
          
        } else {
            setShowres(false)
        }
    }

    return (
        <>
        <div className="relative w-full min-w-[200px]">
             <input type="search" onChange={(e) => handleSearch(e.target.value) } placeholder='Search..' className=" border-0 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm border-blue-gray-200 focus:border-blue-500"/>
        <div className={showres ? "absolute  top-12 left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden z-10" : "hidden"}>
            <ul className="divide-y divide-gray-200 max-h-72 overflow-auto ">
                {
                    loading? (
                        <li className="px-4 py-3 cursor-pointer hover:bg-blue-50 transition-all">
                            <a href="#" className="flex items-center space-x-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-900">Loading...</span>
                                </div>
                            </a>
                        </li>
                    ) : (
                        searchResults.map((result, index) => (
                            <li key={index} onClick={()=> { router.push("/music/"+result.id) } } className="px-4 py-3 cursor-pointer hover:bg-blue-50 transition-all">
                                <a href={"/music/"+result.id} className="flex items-center space-x-4">
                                    <img className="w-10 h-10 rounded-full" src={result.album.cover} alt="Artist" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900">{result.title}</span>
                                        <span className="text-sm font-normal text-gray-500">{result.artist.name} min</span>
                                    </div>
                                </a>
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
        </div>
       {/* search results */}
        
        </>
    )
}