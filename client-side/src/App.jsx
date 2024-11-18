import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navg from './components/navg/Navg'
import Add from './components/add/Add'
import Employee from './components/employee/Employee'
import Edit from './components/add/Edit'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navg/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/add' Component={Add}/>
      <Route path='/emp' Component={Employee}/>
      <Route path='/edit' Component={Edit}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
