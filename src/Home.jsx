import React, { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import movieImage from "./assets/arrow.webp"

const Home = () => {

  const [movies, setMovies] = useState([
    {
      movieTitle: "The God Father",
      movieImage: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2gfPjlZZz6NlkpIEG2YB5XZS4fR.jpg",
      releaseDate: "12021-10-02",
      rating: 9.7
    },

    {
      movieTitle: "The Wolf Of Wall Street",
      movieImage: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
      releaseDate: "1-2-1997",
      rating: 2.1
    },

    {
      movieTitle: "Top Boy",
      movieImage: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/iBqgEMnbleoeLqdadlvBGDxVvKb.jpg",
      releaseDate: "1-2-1997",
      rating: 8.1
    },

    {
      movieTitle: "Suit",
      movieImage: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vQiryp6LioFxQThywxbC6TuoDjy.jpg",
      releaseDate: "1-2-1997",
      rating: 10
    }
  ])

  return (
    <div className=''>
      <Nav />
      <Hero />

      <section className='text-white container mx-auto mt-10'>

        <header className="flex justify-between items-center">
          <h2 className='text-2xl font-bold'>Popular Movies</h2>

          <p className='flex gap-2 items-center text-primary cursor-pointer'>See More <FaArrowAltCircleRight /></p>
        </header>

        <div className='my-6 grid grid-cols-4 gap-6'>


          {/* Single movie card */}
          {movies.map((movie) => (
            <div className="movie-card">
            <img src={movie.movieImage} className='rounded' alt="" />
            <div className='mt-2'>
              <p className='text-lg font-semibold'>{ movie.movieTitle }</p>
              <p className='text-gray-200'>{ movie.releaseDate }</p>
              <p className='text-gray-200'>Rating: { movie.rating } </p>
            </div>
          </div>
          ))}
          
        </div>

      </section>
    </div>
  )
}

export default Home