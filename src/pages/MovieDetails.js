import { useEffect, useState } from 'react'
import { getFetch } from '../services/getFetch';
import {useParams} from "react-router-dom";
import stylesLoading from "./spinner.module.css"
import styles from './movieDetails.module.css';

export const MovieDetails = () => {

    const {id} = useParams();
    
    const [movie, setMovie] = useState();
    
    useEffect(() => {
        getFetch(`movie/${id}`).then( m => setMovie(m))
    },[]);
    
    const imageUrl = "https://image.tmdb.org/t/p/w300";
    
    return (
        <>
        {
            movie ?

            <div className={styles.detailsContainer}>
                <img className={`${styles.col} ${styles.movieImage}` } src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
                <div className={ `${styles.col} ${styles.movieDetails}` }>
                    <p className={styles.firstItem}>
                        <strong>Title: </strong>{movie.title}
                    </p>
                    <p>
                        <strong>Genres: </strong>{movie.genres.map(g => g.name).join(", ")}
                    </p>
                    <p>
                        <strong>Description: </strong>{movie.overview}
                    </p>
                </div> 
            </div> 
            : 
            <div className={stylesLoading.containerLoading}> 
                    <div className={stylesLoading.ldsSpinner}><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div>
                    </div><div></div><div></div><div></div><div></div>
                    <div></div></div>
            </div>
        } 
        </>
    )
}
