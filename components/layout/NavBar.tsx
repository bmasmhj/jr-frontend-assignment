
import { useState , useEffect} from "react";
import Modal from "../common/Modal";
import SearchBar from "../common/SearchBar";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
    const [nav, setNav] = useState(false);
    const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(nav);
  }, [nav]);

    return (
      <header className={scroll ? 'fixed bg-white text-black w-full p-0 top-0 z-50' : 'absolute text-white w-full p-0 top-0 z-50'} id="header">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image width={500} height={500} className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button 
              onClick={() => { 
                setNav(!nav);
              }
              }
            
            type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold leading-6 ">Home</Link>
            <Link href="/artist" className="text-sm font-semibold leading-6 ">Artist</Link>
            <Link href="/genre" className="text-sm font-semibold leading-6 ">Genre</Link>
            <SearchBar  />
          </div>
      
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Modal />
          </div>
        </nav>
        <div className={nav ? "lg:hidden hidden" : "lg:hidden"} role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10"></div>
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image width={500} height={500} className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </Link>
                <button 
                 onClick={() => { 
                  setNav(!nav);
                }
                }
                type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link href="/" className="  -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 text-black">Home</Link>
                    <Link href="/artist" className="  -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 text-black">Artist</Link>
                    <Link href="/genre" className="  -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 text-black">Genre</Link>
                    <SearchBar  />
                  </div>
                  <div className="py-6">
                    <Modal />
                  </div>
                </div>
              </div>
            </div>
        </div>
      
      </header>
    );
  }
  
