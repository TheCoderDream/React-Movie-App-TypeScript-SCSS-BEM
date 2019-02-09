import React from 'react';
import {Actor as ActorModel} from "../../Models/Actor";
import './Actor.scss';
import {getMoviePoster} from "../../helpers/pathMaper";

const Actor = (
    props: {actor: ActorModel}
) => {
    const {
        name,
        character,
        profile_path
    } = props.actor;
    return (
        <div className={'actor'}>
            <img className="actor__thumb" src={getMoviePoster(profile_path)}/>
            <span className="actor__name">{name}</span>
            <span className={'actor__character'}>{character}</span>
        </div>
    );
};

export default Actor;