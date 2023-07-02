import AllGenre from "@/components/feature/AllGenre";
import MainLayout from "@/components/layout/MainLayout";

export default function Genre({}) {
  return (
    <MainLayout title="Home" description="Home page">
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
                            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white font-black">Genre</h1>
                        </div>
                    </div>
                </div>
            </div>

      <AllGenre />
    </MainLayout>  
  );
}
