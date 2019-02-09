import React from 'react';
import {Movie} from "../../Models/Movie";
import {getBackdropImage, getMoviePoster} from "../../helpers/pathMaper";
import './MovieInfo.scss';
const MovieInfo = (
    props: {movie: Movie | any, directors: Object }
) => {
    const {movie, directors} = props;
    const movieInfoStyle = {
        backgroundImage: 'url(' + getBackdropImage(movie.backdrop_path)+ ')'
    };
    return (
        <div
            style={movieInfoStyle}
            className={'movie-info'}>
            <div className={'movie-info__content'}>
                <div className={'movie-info__thumb'}>
                    <img
                        style={{
                            width: '100%', height: '100%'
                        }}
                        src={getMoviePoster(movie.poster_path)}
                        alt=""/>
                </div>
                <div className="movie-info__text">
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <h3>IMDB RATING</h3>
                    <div className="movie-info__rating">
                        <meter min={0} max={100} optimum={100} low={40} high={70}
                               value={movie.vote_average *10}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieInfo.defaultProps = {
    directors: []
}

export default MovieInfo;