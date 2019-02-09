export class Api {
    private static API_URL = 'https://api.themoviedb.org/3/';
    private static API_KEY = 'de2ce901ec120769d784410335f67638';

    public static getMovies(): Promise<any> {
        return fetch(`${Api.API_URL}movie/popular?api_key=${Api.API_KEY}&language=en-US&page=1`)
            .then(data => data.json());
    }

    public static getMovie(movieId: string): Promise<any> {
        return fetch(`${Api.API_URL}movie/${movieId}?api_key=${Api.API_KEY}&language=en-US`)
            .then(data => data.json());
    }

    public static getActors(movieId: string): Promise<any> {
        return fetch(`${Api.API_URL}movie/${movieId}/credits?api_key=${Api.API_KEY}`)
            .then(data => data.json());
    }

    public static getMoviesByPage(page: number): Promise<any> {
        return fetch(`${Api.API_URL}movie/popular?api_key=${Api.API_KEY}&language=en-US&page=${page}`)
            .then(data => data.json());
    }

    public static searchMovies(searchTerm: string): Promise<any> {
        return fetch(`${this.API_URL}search/movie?api_key=${this.API_KEY}&language=en-US&query=${searchTerm}`)
            .then(data => data.json());
    }
}