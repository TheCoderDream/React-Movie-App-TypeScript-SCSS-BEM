const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';


export const getBackdropImage = (path: string): string => {
    return `${IMAGE_BASE_URL}${BACKDROP_SIZE}${path}`;
};

export const getMoviePoster = (posterPath: string): string  => {
    return `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`;
};