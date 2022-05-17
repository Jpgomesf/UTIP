import React from 'react'
import { AuthProvider } from '../context/auth'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
  


const Home = () => {

  return (
    <>
      <Navbar />
    </>
  )
}

export default Home;