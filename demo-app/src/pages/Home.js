import React from 'react'
import '../assets/home/home.scss'
import Header from '../components/layout/Header'
import Main from '../components/main'







function Home() {
  return (
    <>
    <div className='container'>
    <header>
    <Header/>
    
    </header>
    <main>
      <Main/>
  
    </main>

    <footer></footer>
    </div>

    </>
  )
}

export default Home
