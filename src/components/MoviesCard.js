import React from 'react'
import { Link } from 'react-router-dom';
import styles from './moviesCard.module.css';
import placeholder from "../placeholder.jpg";

export const MoviesCard = ({movie}) => {

    const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: placeholder
    
    return (
            <Link to={`/movie/${movie.id}`}>  
                <li className={styles.movieCard}>
                    <img  
                        className={styles.movieImage} 
                        src={imageUrl}
                        alt={movie.title}/>
                    <div className={styles.title}>{movie.title}</div>
                </li>
            </Link>
    )
}
