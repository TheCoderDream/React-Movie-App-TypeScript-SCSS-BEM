import React from 'react';
// @ts-ignoren
import {Link} from "react-router-dom";
import {Movie} from "../../Models/Movie";
import {getMoviePoster} from "../../helpers/pathMaper";
import './Movie.scss';
import {getGenreListAsString} from "../../pipes/getGenreListAsString";
import {overviewShorter} from "../../pipes/overviewShorter";

const MovieB = (
    props: {movie: Movie}
) => {

    const {movie} = props;
    return (
        <Link to={`/movies/${movie.id}`}>
            <div className={'movie'}>
                <div className="movie__rate">
                    <i
                        style={{
                            color: 'white', fontSize: '1.2rem'
                        }}
                        className={'far fa-star'}/> {movie.vote_average}</div>
                <div className="movie__genres">{getGenreListAsString(movie.genre_ids)}</div>
                <img src={getMoviePoster(movie.poster_path)} alt={movie.title} className="movie__image"/>
                <p className="movie__overview">{overviewShorter(movie.overview)}</p>
            </div>
        </Link>

    );
};

export default MovieB;