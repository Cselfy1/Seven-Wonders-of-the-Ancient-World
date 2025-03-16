import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import First from './components/Wonders/First'
import Home from './components/Home' // Import the Home component
import Second from './components/Wonders/Second'
import Third from './components/Wonders/Third'
import Fourth from './components/Wonders/Fourth'
import Fifth from './components/Wonders/Fifth'
import Sixth from './components/Wonders/Sixth'
import Seventh from './components/Wonders/Seventh'

// npm i styled-components !!!!!! 
function App() {

  return (
    <>
      <div className='App'>
        <header className='header'>
          <h1>Seven Wonders of the Ancient World</h1>
          <Menu />
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/first' element={<First />}></Route>
            <Route path='/second' element={<Second />}></Route>
            <Route path='/third' element={<Third />}></Route>
            <Route path='/fourth' element={<Fourth />}></Route>
            <Route path='/fifth' element={<Fifth />}></Route>
            <Route path='/sixth' element={<Sixth />}></Route>
            <Route path='/seventh' element={<Seventh />}></Route>
            <Route path='*' element={<NotFound  />}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App