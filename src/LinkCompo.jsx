import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
function LinkCompo() {
  return (
    <div className='parent'>
      <Link to={'/'} className='navbar'>Home</Link>
      <Link to={'/student'  }className='navbar'>Student</Link>
      <Link to={'/contact'} className='navbar'>Contact</Link>
    </div>
  )
}

export default LinkCompo
