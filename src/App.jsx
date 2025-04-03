import React from 'react'
import MainPage from './Components/MainPage'
import{Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
    </Routes>     
    </>
  )
}

export default App