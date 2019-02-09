import React from 'react';
import {Movie} from "../../Models/Movie";
import './Banner.scss';
import {getBackdropImage} from "../../helpers/pathMaper";

const Banner = (
    props: {movie: Movie}
) => {
    const { movie } = props;

    const bannerStyle = {
        backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%), url('+getBackdropImage(movie.backdrop_path)+') '
    };

    return (
        <div className="banner" style={bannerStyle}>
            <div className="banner__content">
                <div className="banner__text-container">
                    <h1 className="banner__heading">{movie.title}</h1>
                    <p className="banner__overview">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;