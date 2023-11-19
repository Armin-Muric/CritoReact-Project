import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './Website-pages/Home'
import Contact from './Website-pages/Contact'
import Notfound from './Website-pages/Notfound'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/Home' element={<Home/> } />
          <Route path='/Contact' element={<Contact/> }/>
          <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
