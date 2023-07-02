import { Music } from "@/types/index";
import { useRouter } from "next/router";
type Props = {
    music: Music[];
};
const Genre: React.FC<Props> = ({ music }) => {
    const router = useRouter();
    return(
        <>
        {
            music.map((dat , indx)=>{
                return<div onClick={()=> { router.push("/music/"+dat.id) } } key={indx} className="p-5 cursor-pointer bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
                <img src={dat.album.cover_big} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-full h-50 w-50 shadow-lg shadow-gray-500/25" />
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">{dat.title}</h5>
                <div className="mx-auto mt-5">
                </div>
            </div> 
            })
        }
        </>
    )
}

export default Genre