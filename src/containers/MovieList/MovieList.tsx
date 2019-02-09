import React, {Component} from 'react';
import Slider from "../../components/Slider/Slider";
import SearchBar from "../../components/SearchBar/SearchBar";
import Spinner from "../../components/Spinner/Spinner";
import {Api} from "../../helpers/api";
import MovieB from "../../components/Movie/Movie";
import {Movie} from "../../Models/Movie";


class MovieList extends Component {
    state = {
        movies: [],
        moviesClone: [],
        currentPage: 1,
        searchTerm: '',
        loading: false
    }

    setTimeoutID = null;
    count = 0;
    scrollFetchDisabled = false;

    componentDidMount() {
        this.setState({loading: true});
        Api.getMovies().then(data => {
            this.setState({
                loading: false,
                movies: data.results,
                moviesClone: data.results.slice(),
                currentPage: data.page
            })
        });


        window.addEventListener('scroll', () => {
            if (!this.scrollFetchDisabled) {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    this.scrollFetchDisabled = true;
                    this.setState({loading: true});

                    setTimeout(() => {
                        Api.getMoviesByPage(this.state.currentPage + 1).then(data => {
                            this.scrollFetchDisabled = false;
                            this.setState(
                                {
                                    loading: false,
                                    movies: [...this.state.movies, ...data.results]
                                }
                            );
                        })
                    }, 2000)

                }
            }
        })
    }

    handleSearchTermChange = (val: string): void => {
        this.setState({
            movies: [],
            loading: true,
            searchTerm: val
        });

        if (!val) {
            Api.getMovies().then(data => {
                this.setState({
                    loading: false,
                    movies: data.results,
                    currentPage: data.page
                })
            });
        } else {
            Api.searchMovies(val).then(data => {
                this.setState({
                    loading: false,
                    movies: data.results,
                    currentPage: data.page,
                    searchTerm: val
                })
            })
        }

    }

    render() {

        return (
            <React.Fragment>
                <Slider movies={this.state.moviesClone}/>
                <SearchBar searchTermChanged={this.handleSearchTermChange}/>
                <h1 className="heading">{this.state.searchTerm ? 'Search Result' : 'Popular Movies'}</h1>
                <div className="row">
                    {this.state.movies.map((movie: Movie) => (
                        <div className="col" key={movie.id}>
                            <MovieB movie={movie}/>
                        </div>
                    ))}
                </div>
                {this.state.loading ? <Spinner/> : null}
            </React.Fragment>
        );
    }
}

export default MovieList;