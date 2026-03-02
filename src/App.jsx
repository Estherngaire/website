import { Routes,Route } from 'react-router-dom'
import Footer from './Components/layout/Footer'
import Header from './Components/layout/Header'
import About from './Components/section/About'
import Contact from './Components/section/Contact'
import Home from './Components/section/Home'
import ProductShowcase from './Components/section/ProductShowcase'
import Services from './Components/section/Services'

function App() {
  return(
    <div className='h-screen'>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/> 
         <Route path="/about" element={<About/>}/> 
         <Route path="/services" element={<Services/>}/> 
         <Route path="/projects" element={<ProductShowcase/>}/> 
         <Route path="/contact" element={<Contact/>}/> 
      </Routes>
      <Footer/>
    </div>
    
  )};
  

export default App
