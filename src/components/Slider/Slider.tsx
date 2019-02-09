import React, {Component} from 'react';
import {Movie} from "../../Models/Movie";
import Banner from "../Banner/Banner";
import './Slider.scss';

interface sliderInterface {
    movies: Movie[];
}

class Slider extends Component<sliderInterface> {
    constructor(props: sliderInterface) {
        super(props);
        this.state = {
            movies: props.movies.slice()
        }
    }

    imageRotate = (reverse: boolean) => {
        // @ts-ignore
        const newArr = [...this.state.movies];
        if(reverse) {
            newArr.unshift(newArr.pop());
        } else {
            newArr.push(newArr.shift());
        }
        this.setState({
            movies: newArr
        });
    }

    componentWillReceiveProps(props: any) {
        // @ts-ignore
        if(this.state.movies.length === 0) {
            this.setState((prevState => ({movies: props.movies })))
        }
    }



    render() {

        // @ts-ignore
        const movieForBanner = this.state.movies.map((movie: Movie) => (
           <Banner
                key={movie.id}
               movie={movie}/>
        ));

        return (
            <div className="slider">
                {movieForBanner}
                <a
                    onClick={() => {this.imageRotate(true)}}
                    className="slider__btn-left">&#10094;</a>
                <a
                    onClick={() => {this.imageRotate(false)}}
                    className="slider__btn-right">&#10095;</a>
            </div>
        );
    }
}

export default Slider;