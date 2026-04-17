import { Routes, Route } from 'react-router-dom'

import NavBarComponent from './components/NavBarComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'  


import HomePage from './pages/HomePage.jsx'
import KelasPage from './pages/KelasPage.jsx'
import TestimonialPage from './pages/TestimonialPage.jsx'
import FAQPage from './pages/FaqPage.jsx'
import TOCPage from './pages/TOCPage.jsx' 


function App() {
  return (
    <div>
      <NavBarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/toc" Component={TOCPage} /> 
      </Routes>
       
      <FooterComponent /> 
    </div>
  )
} 
export default App
