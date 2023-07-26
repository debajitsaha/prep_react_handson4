import React from 'react'
import Student from './Student';
import Contact from './Contact';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LinkCompo from './LinkCompo';
function RouteCompo() {
  return (
    <div>
        <BrowserRouter>
        <LinkCompo/>
       <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/student' element={<Student/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       </Routes>

        </BrowserRouter>
    </div>
  )
}

export default RouteCompo
