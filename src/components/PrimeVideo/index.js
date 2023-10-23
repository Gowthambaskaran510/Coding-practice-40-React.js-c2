// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
const horrorMovie = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  const horrorMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === horrorMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
        <h1 className="movies-heading">Horror Movies</h1>
        <MoviesSlider moviesList={horrorMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
