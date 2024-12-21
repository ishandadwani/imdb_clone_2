import { BrowserRouter as Router , Routes , Route } from "react-router-dom";  
import './app.css'
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Movielist from "./components/movielist/Movielist";
import Movie from "./pages/movie_details/Movie";
function App() {
  return (
     <div className="app">
          <Router>
            <Navbar/>
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="movie/:id" element={<Movie/>}></Route>
              <Route path="movies/:type" element={<Movielist/>}></Route>
              <Route path="/*" element={<h1>ERROR</h1>}></Route>
            </Routes>
          </Router>
     </div>
  );
}

export default App;
