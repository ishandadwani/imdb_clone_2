import { useState,useEffect } from "react"
import './movielist.css'
import { useParams } from "react-router-dom"
import Card from "../card/Card"

export default function Movielist(){
    const {type} = useParams()
    const [movielist,setMovielist] = useState([])
 
    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=9391bc741665843d83e87fd02c21a4a8&language=en-US`)
        .then(response => response.json())
        .then(jsond => setMovielist(jsond.results))
    }

    useEffect(()=>{
          getData()
    },[])

    useEffect(()=>{
         getData()
    },[type])


    return(
        <div className="movie_list">
        <h2 className="list_title">{(type ? type : "popular").toUpperCase()}</h2>
        <div className="list_card">
             {movielist.map( movie =>(
                <Card movie={movie}/>
             ))}
        </div>
        </div>
    )
}