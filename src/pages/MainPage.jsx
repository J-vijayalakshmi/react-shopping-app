import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents } from '../data.js'
import { Ladies } from '../data.js'
import WomenCollection from '../components/WomenCollection.jsx'

const MainPage = () => {

    const [gentsFashion] = useState(Gents)
    const [ladiesFashion] = useState(Ladies)

    console.log(Gents)
    console.log(Ladies)

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion = {gentsFashion} />
      <WomenCollection ladiesFashion = {ladiesFashion}/>
      <Footer />

    </div>
  )
}

export default MainPage
