import React from 'react'
import { useState,useEffect } from 'react'


function Satellites() {


  const [sat, setSat] = useState([])

useEffect(() => {

  const Sat =  (async()=>{

 
  let url = 'https://isro.vercel.app/api/customer_satellites'

  let data = await fetch (url)
  let parsedData =  await data.json();
  console.log(parsedData)
  setSat(parsedData.customer_satellites)
})

Sat();

  
}, [])



  return (
    <div className=' flex flex-wrap gap-4 justify-center mt-4'>
     
     {sat.map((element)=>{
      return <div className="x card bg-orange-500 mb-2 h-44 w-40 rounded-lg text-[0.7rem] shadow-xl shadow-gray-500 hover:bg-orange-600 hover:w-44 hover:h-48 transition-all duration-400" key={element.id}>
        <img className='p-1 rounded-lg' src='https://indbiz.gov.in/wp-content/uploads/2022/03/iStock-181075945-1.jpg' />
        
        <div className="1 flex ml-1 text-blue-600"><h1>Name:</h1>{element.id}</div>
        <div className="2 flex ml-1"><h1>Country:</h1>{element.country}</div>
        <div className="3 flex ml-1"><h1>Launch:</h1>{element.launch_date}</div>
       <div className="4 flex ml-1"><h1>Mass:</h1> {element.mass}</div>

      </div>
     })}
    </div>
  )
}

export default Satellites
