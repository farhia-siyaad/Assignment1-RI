import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import image from "./assets/pexels-porapak-apichodilok-346694.jpg"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Footer from './Components/Footer'
import Counter from './Components/Counter'


// function Sayhi() {
//   return <div className=' bg-orange-500 p-10'>
//  <h1>This is First Component</h1>
//  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ullam.</p>
//   </div>
  
// }



ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    
    
    {/* <Header/> */}
    {/* <Hero/> */}
    <Counter/>
    
    {/* <Footer/> */}

</div>
)
