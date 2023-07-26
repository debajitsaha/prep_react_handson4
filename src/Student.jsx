import React, { useState } from 'react'
import './App.css'

function Student() {
  const [data]= useState([
    {
        Name:"EA19",
        Age:22,
        Course:"Mern",
        Batch:"November",
        Change:"Edit"
        
    },
     {
        Name:"EA20",
        Age:20,
        Course:"Mean",
        Batch:"December",
        Change:"Edit"
        
    },
     {
        Name:"EA21",
        Age:21,
        Course:"Mern",
        Batch:"January",
        Change:"Edit"
        
    },
     {
        Name:"EA22",
        Age:22,
        Course:"Mern",
        Batch:"Febuary",
        Change:"Edit"
        
    },
     {
        Name:"EA23",
        Age:23,
        Course:"Mern",
        Batch:"March",
        Change:"Edit"
        
    },
    {
      Name:"EA24",
      Age:24,
      Course:"Mern",
      Batch:"April",
      Change:"Edit"
      
  },
    
    ])

  return (
    <div>
      <h1 className='h1'>Student Details</h1>
      <button type='button'> Add New Student</button>
      <table width="100%"  >
        <tr height="80px" >
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      {data.map((item,index)=>{
        return(
          <tr key={index} height="60px">
            <td>
              {item.Name}
            </td>
            <td>
              {item.Age}
            </td>
            <td>
              {item.Course}</td>
              <td>
              {item.Batch}
            </td>
            <td className='edit'>
              {item.Change}
            </td>
          </tr>

        )
      })}
      </table>
    </div>
  )
}

export default Student
