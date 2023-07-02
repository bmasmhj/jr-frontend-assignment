
import React from 'react';
import { Music } from "@/types/index";
type Props = {
    artist: {
        id: number;
        name: string;
        link: string;
        share: string;
        picture: string;
        picture_small: string;
        picture_medium: string;
        picture_big: string;
        picture_xl: string;
        radio: boolean;
        tracklist: string;
        type: string;
    };
};
const Artist: React.FC<Props> = ({ artist }) => {
    return (    
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src="/material-tailwind-kit-react/img/team-1.jpg" alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-500">Web Developer</p>
            <div className="mx-auto mt-5">
            </div>
        </div>

    )
}

export default Artist