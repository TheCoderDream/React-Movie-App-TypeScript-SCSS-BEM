import React, {Component} from 'react';
import {MovieDetail as MovideDetailModel} from "../../Models/MovieDetail";
import {Actor as ActorModel} from "../../Models/Actor";
import {Api} from "../../helpers/api";
import './MovieDetail.scss';
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieInfoBar from "../../components/MovieInfoBar/MovieInfoBar";
import Spinner from "../../components/Spinner/Spinner";
import Actor from "../../components/Actor/Actor";


class MovieDetail extends Component {

    state = {
        movieId: null,
        movieDetail: null,
        actors: []
    }

    componentDidMount() {
        // @ts-ignore
         const movieId = this.props.match.params.id;
         this.setState({movieId});
         Api.getMovie(movieId).then(data => {
            this.setState({movieDetail: data})
         });

         Api.getActors(movieId).then(data => {
             console.log(data.cast);
             this.setState({actors: data.cast});
         })
    }

    render() {

        let content = null;
        console.log(this.state.movieDetail !== null && this.state.actors.length > 0);
        if(!(this.state.movieDetail && this.state.actors.length > 0)) {
            content = <Spinner/>;
        } else {
            content = (
                <div className="movie-detail">
                    <MovieInfo movie={this.state.movieDetail} />
                    <MovieInfoBar movie={this.state.movieDetail}/>
                    <h1 className="movie-detail__heading">Actors</h1>
                    <div className="row" style={{marginTop: '8rem'}}>
                        {
                            this.state.actors.map((actor: ActorModel) => (
                                <div className="col">
                                    <Actor actor={actor} key={actor.id}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }

        // @ts-ignore
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        );
    }
}

export default MovieDetail;