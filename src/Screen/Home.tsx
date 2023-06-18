import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import GenereMovieList from '../Components/GenereMovieList'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <GenereMovieList/>
    </div>
  )
}

export default Home