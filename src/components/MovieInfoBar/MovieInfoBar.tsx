import React from 'react';
import BudgetIcon from '../../SVGS/budget.svg';
import TimeIcon from '../../SVGS/time.svg';
import RevenueIcon from '../../SVGS/revenue.svg';
import './MovieInfoBar.scss';

const MovieInfoBar = (
    props: {movie: any}
) => {
    const {movie} = props;

    return (
        <div className="movie-info-bar">
            <div className="movie-info-bar__content">
                <div className="movie-info-bar__col">
                    <img src={TimeIcon} alt=""/>
                    <span className="movie-info-bar__info">Running time: {movie.runtime}</span>
                </div>
                <div className="movie-info-bar__col">
                    <img src={BudgetIcon} alt=""/>
                    <span className="movie-info-bar__info">Budget: {movie.budget}</span>
                </div>
                <div className="movie-info-bar__col">
                    <img src={RevenueIcon} alt=""/>
                    <span className="movie-info-bar__info">Revenue: : {movie.revenue}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieInfoBar;