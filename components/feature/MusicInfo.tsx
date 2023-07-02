import { Music } from "@/types/index";
import MusicPlayer from "./MusicPlayer";
import CountryList from "./ContryList";
import Image from "next/image";

type Props = {
    music: Music;
};
const MusicInfo: React.FC<Props> = ({ music }) => {
    return(
        <>
            <div className=" flex flex-col h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full  bg-cover bg-center"
                    style={{
                        backgroundImage : `url(${music.album.cover_big})`
                    }}
                >
                </div>
                <div className="absolute top-0 h-full w-full bg-black/80 bg-cover bg-center">
                </div>
                <div className="max-w-8xl  w-full flex mt-20 container relative">
                    <div className="w-1/5">
                        <div className="bg-gray-100 rounded-lg">
                            <Image width={500} height={500} className="h-100 rounded w-full object-cover object-center mb-6" src={music.album.cover_big} alt="content" />
                        </div>
                    </div>
                    <div className="w-4/5 mx-5 text-white">
                        <div className="flex justify-between items-end mb-5">
                            <h1 className="text-5xl">{music.title}</h1>
                            <span>Released : {music.release_date} </span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-end mt-5 mb-10">
                            <h1 className="text-xl">{music.artist.name} </h1>
                            <span>Duration : {music.duration} min </span>
                        </div>
                        <MusicPlayer 
                            src={music.preview}
                        />
                        <div className="mt-5 flex items-center">
                            <h1>Contributors : </h1>
                            {
                                music.contributors.map((cont, index) => {
                                    return (
                                    <div className="mx-3" key={index}>
                                        <div className="relative group">
                                            <Image width={500} height={500} src={cont.picture} className="w-10 rounded" alt="" />
                                            <span className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {cont.name}
                                            </span>
                                        </div>
                                    </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                   
                </div>
                <div className="max-w-8xl w-full mt-20 container relative">
                        <div className="h-full bg-zinc-100 p-2 rounded-lg overflow-hidden  relative">
                            <h1 className="font-bold">More Description</h1>
                            <div className="my-3 flex justify-between">
                                <span className="mr-3">Rank : <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">{music.rank}</span></span>
                                <span className="mx-3">BPM : <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">{music.bpm}</span></span>
                                <span className="mx-3">Explicit Lyric :
                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                                        { music.explicit_lyrics?"Yes":"No"  }
                                    </span>
                                </span>
                                <span className="mx-3">Gain : <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/10">{music.gain}</span></span>
                                <span className="mx-3">Track Position : <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">{music.track_position}</span></span>
                            </div>
                            <h5 className="font-bold mb-3">Available Contries</h5>
                            <CountryList 
                                countryCodes = {music.available_countries}
                            />
                        </div>
                    </div>
                
                <div className="w-full absolute text-white bottom-0 z-60">
                <div className="w-full pointer-events-none overflow-hidden h-70-px">
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-white fill-current" style={{color : "#f3f4f6"}} points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            </div>
        </>
    )
}

export default MusicInfo