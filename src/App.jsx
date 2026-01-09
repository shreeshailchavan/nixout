import './App.css'
import { Haeader } from './components/header'
import { Footer } from './components/footer'
import { Home } from './pages/home'
import {Routes, Route} from 'react-router'
import { NewsAndStories } from './pages/news'
import { About } from './pages/about'
function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col w-full">
  <Haeader />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/news' element={<NewsAndStories />}/>
    <Route path='/aboutus' element={<About />}/>
  </Routes>
  <Footer />
</div>

    </>
  )
}

export default App
