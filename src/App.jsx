import './App.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Home } from './pages/home'
import {Routes, Route} from 'react-router'
import { NewsAndStories } from './pages/news'
import { About } from './pages/about'
import { ServiceDetail } from './pages/servicedetail'
import { Services } from './pages/services'
import { Contact } from './pages/contact'
function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col w-full">
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/news' element={<NewsAndStories />}/>
    <Route path='/about/business' element={<About />}/>
    <Route path='/services' element={<Services/>} />
    <Route path="/services/:slug" element={<ServiceDetail />} />
    <Route path='/contact' element = {<Contact />} />
  </Routes>
  <Footer />
</div>

    </>
  )
}

export default App
