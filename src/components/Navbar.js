import { Link } from "react-router-dom"
import './navbar.css'

export default function Navbar(){
    return(
        <div className="header">
          <div className="leftheader">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imdb" width="100px" /></Link>
            <Link to="movies/popular" >Popular</Link>
            <Link to="movies/top_rated">Top Rated</Link>
            <Link to="movies/upcoming">Upcoming</Link>
          </div>
        </div>
    )
}