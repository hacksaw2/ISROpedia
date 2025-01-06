import React from 'react'
import { useState,useEffect } from 'react'


function Spacecraft(){
  const [info2, setInfo2] = useState([])


  

  useEffect(() => {

    const fetchSpacecraft =  (async()=>{

    
    let url = 'https://isro.vercel.app/api/spacecrafts'
    let data = await fetch(url);
     let parseddata2 = await data.json()
     console.log(parseddata2)
     setInfo2(parseddata2.spacecrafts)

  })
  fetchSpacecraft();

  

   
  
   
  }, [])
  return (

    <>  


    
    
     <div>
      <div className="container2 flex flex-column flex-wrap justify-center gap-6 mt-2 ">

        {info2.map((element) => {
          return <div className="element card h-40 w-40 bg-yellow-500 rounded-xl shadow-lg shadow-gray-500 hover:bg-yellow-300 hover:h-44 hover:w-44 transition-all duration-400   " key={element.id}>
            <div className="image flex justify-center mt-4">
             <img className='h-20 w-20' src='https://www.isro.gov.in/media_isro/image/media/Missions/PSLV_C54/15.jpg.webp' />
             </div>
           <p className='text-center mt-2'> {element.name}</p>
           
            
          </div>
        })}

      </div>
    </div>

    </>

  )
}

export default Spacecraft
