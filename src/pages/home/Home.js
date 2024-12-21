import { useEffect, useState } from 'react'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';

export default function Home(){
    const [currentData,setCurrentData] = useState([]);
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9391bc741665843d83e87fd02c21a4a8&language=en-US')
        .then(response => response.json())
        .then(jsond => setCurrentData(jsond.results))
    }, [])
    return(
       <>
       <Carousel
      
       showThumbs={false}
       autoPlay={true}
       transitionTime={3}
       infiniteLoop={true}
       showStatus={false}
       
       > 
       {currentData.map( movie => (
        <Link style={{textDecoration : 'none' , color : 'white'}} to={`movie/${movie.id}`}>
            <div className='slideimage'>
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="err" />
            </div>

            <div className='posterImage_overlays'>
             <div className="posterTitle">{movie ? movie.original_title : " "}</div>
             <div className="posterImage_runtime">
                {movie ? movie.release_date : " "}
                <span className='posterImage_rating'>
                <i class="fa-solid fa-star"></i>
                </span>
             </div>
             <div className="posteImage_discription">{movie ? movie.overview : " "}</div>
            </div>
        </Link>
       ))}

       </Carousel>

       {
          currentData.map(movie => (
            <Card movie={movie}/>
          ))       
       }
       </>
        )
    
}