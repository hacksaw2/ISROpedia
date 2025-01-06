import React from 'react'
import { useState,useEffect } from 'react'

function Centres(){

    const [info, setInfo] = useState([])



    useEffect( () => {
        const fetchData = (async ()=>{
    
        
      let url = "https://isro.vercel.app/api/centres"
      let data  = await  fetch(url);
      let parseddata = await data.json()
      // console.log(parseddata)
      setInfo(parseddata.centres)
    })
    fetchData();
    
      
      },[])
      
  return (
    <div>

<div className="container flex justify-center bg-red-500 w-[100vw] mb-2 mt-2">
        <div className="x  ">
    
             <div className="element" >
        <div className="table   w-[80vw] p-1 ">
          <div className="container grid-item bg-blue-400 rounded-xl h-12 p-2 text-center 
            text-2xl font-bold text-gray-700">Name</div>
          <div className="container2 grid-item bg-orange-400 h-12 rounded-xl p-2 text-center text-2xl font-bold text-gray-700">Place</div>
          <div className="container3 grid-item bg-pink-400 h-12 rounded-xl p-2 text-center text-2xl font-bold text-gray-700">State</div>
        </div>
        </div>
        
       
              
              
       </div>  
            
      </div>


      
        <div className="container flex justify-center bg-[#fffacd] w-[100vw]">
        <div className="x  ">
      {
          info.map((element)=>{
            return <div className="element" key={element.id}>
        <div className="table   w-[80vw] p-1 ">
          <div className="container hero grid-item bg-blue-400 rounded-xl h-12 p-3 text-center 
           text-[0.6rem] lg:text-[0.8rem] overflow-auto ">{element.name}</div>
          <div className="container2 grid-item bg-orange-400 h-12 rounded-xl p-3 text-center">{element.Place}</div>
          <div className="container3 grid-item bg-pink-400 h-12 rounded-xl p-3 text-center text-[0.8rem] overflow-auto">{element.State}</div>
        </div>
        </div>
          })
        }
       
              
              
       </div>  
            
      </div>
      
    </div>
  )
}

export default Centres
