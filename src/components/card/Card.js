import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react';
import './card.css';
import { Link } from 'react-router-dom';


export default function Card({ movie }) {
    const [isloading, setIsloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 1500)
    }, [])

    return (
        isloading
            ?

            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444"  >
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>

            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:'none', color:'white'}}>
            <div className='cards'>
                <img className='cards_img' src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt='err' />
                <div className='cards_overlay'>
                    <div className='cards_tittle'>{movie ? movie.original_title : " "}</div>
                    <div className='cards_runtime'>
                        {movie ? movie.release_date : " "}
                        <span className='card_rating'>{<i class="fa-solid fa-star"></i>}</span>
                    </div>
                    {/* <div className='cards_discription'>{movie ? movie.overview : " "}</div> */}
                </div>
            </div>
            </Link>
    )

}