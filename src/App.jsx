import './App.css'
import { Haeader } from './components/header'
import { Footer } from './components/footer'
import { Home } from './components/home'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Haeader/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
