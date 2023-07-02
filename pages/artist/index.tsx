import PopularArtist from "@/components/common/PopularArtist";
import SpaceOnly from "@/components/common/SpaceOnly";
import AllArtist from "@/components/feature/AllArtist";
import HeroSection from "@/components/feature/HeroSection";
import MainLayout from "@/components/layout/MainLayout";

export default function Artist({}) {
  return (
    <MainLayout title="Home" description="Home page">
      <div className=" flex h-96 content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-2/5 w-full  bg-cover bg-center"
                    style={{
                        backgroundImage : "url('https://images.wondershare.com/filmora/article-images/2022/aesthetic-background-music-2.jpg')"
                    }}
                >
                </div>
                <div className="absolute top-0 h-2/5 w-full bg-black/75 bg-cover bg-center">
                </div>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white font-black">Artist</h1>
                        </div>
                    </div>
                </div>
            </div>

      <AllArtist />
    </MainLayout>  
  );
}
