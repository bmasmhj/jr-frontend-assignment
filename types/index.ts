
type AvailableCountry = string;
type Contributers = {
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
}
type Music = {
    id: number;
    title: string;
    duration: number;
    track_position: number;
    disk_number: number;
    rank: number;
    release_date: string;
    explicit_lyrics: boolean;
    preview: string;
    bpm: number;
    gain: number;
    available_countries: AvailableCountry[];
    contributors: Contributers[];
    md5_image: string;
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
    album: {
        id: number;
        title: string;
        link: string;
        cover: string;
        cover_small: string;
        cover_medium: string;
        cover_big: string;
        cover_xl: string;
        md5_image: string;
        release_date: string;
        tracklist: string;
        type: string;
    };
    type: string;
};

export type { Music };