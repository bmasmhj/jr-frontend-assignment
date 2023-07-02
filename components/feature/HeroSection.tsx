export default function HeroSection(){
    return(
        <>
            <div className=" flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full  bg-cover bg-center"
                    style={{
                        backgroundImage : "url('https://www.indievisionmusic.com/wp-content/uploads/2019/09/BG-band-pic.jpg')"
                    }}
                >
                </div>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center">
                </div>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white mb-6 font-black">Unleash Your Musical Journey</h1>
                            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white opacity-80">Music is the universal language that bridges hearts and souls, expressing what words cannot. It has the power to evoke emotions, create memories, and inspire the human spirit.</p>
                        </div>
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