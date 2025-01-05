import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [info, setInfo] = useState([])
  const [info2, setInfo2] = useState([])


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

    <div className="navbar h-16 w-[100vw] bg-red-600 p-4  flex">
    <svg  className='h-10 w-10 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  
  <circle cx="100" cy="100" r="90" fill="#001f54" />
  
  
  <polygon points="90,50 110,50 100,20" fill="#ff6f61" />
  <rect x="90" y="50" width="20" height="50" fill="#ff6f61" />
  <polygon points="90,100 100,120 110,100" fill="#ff6f61" />
  

  <polygon points="95,120 105,120 100,140" fill="#ffc107" />
  <polygon points="97,140 103,140 100,160" fill="#ff9800" />
  
  
  <ellipse cx="100" cy="100" rx="80" ry="50" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="4 4" />
  
  
  <text x="50%" y="95%" fill="#ffffff" font-size="20" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">
    ISROpedia
  </text>
</svg>
      <h1 className='text-lg font-bold text-white font-serif'>ISROpedia</h1>
      


    </div>
      
      <div className="container">
        {
          info.map((element)=>{
            return <div className="element" key={element.id}>
              {element.name}
              {element.Place}
              {element.State}
            </div>
          })
        }
      </div>

      <div className="container2">

        {info2.map((element)=>{
          return <div className="element" key={element.id}>
            {element.name}
          </div>
        })}

      </div>
    </>
  )
}

export default App
