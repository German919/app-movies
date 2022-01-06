import {useState, useEffect} from 'react'
import { MoviesCard } from './MoviesCard';
import { getFetch } from '../services/getFetch';
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./movies.module.css";

export const Movies = ({search}) => {

    const [movies, setMovies] = useState([]);

    const [pages, setPages] = useState(1);

    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        const searhUrl = search ? `search/movie?query=${search}&page=${pages}` 
        : `discover/movie?page=${pages}`   
        getFetch(searhUrl).then( data => {
            search ? setMovies(data.results) : setMovies((prev)=> prev.concat(data.results))
            // setHasMore(data.pages < data.total_pages)
        }) 
    },[search, pages])
    
    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={()=> setPages((prev) => prev + 1)} 
        >
            <ul className={styles.movieGrid}>
                {
                    movies.map( movie => (
                        <MoviesCard key={movie.id} movie={movie} />
                    ))
                }
            </ul>
        </InfiniteScroll>  
    )
}
