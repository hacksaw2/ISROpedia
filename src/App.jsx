import './App.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'



function App() {
  const navigate   = useNavigate();

  const tour = (e)=>{
     let item = e.target.value;
    if(item === "centres"){
navigate('/centres');
    } else if (item === "spacecrafts"){
      navigate('/spacecraft')
    }else if (item === "satellites" ){
      navigate('/satellites')
    }
  }
  
  
  

  return (
    <>

    <div className="navbar h-16 w-[100vw] bg-red-600 p-3 justify-around  flex ">

      <div className="icon w-[70vw] flex ">
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
      <h1 className='text-lg font-bold text-white font-serif mt-1 ml-1'>ISROpedia</h1>
      </div>
   

      <div className="select w-[20vw] lg:hidden">
        <select onChange={tour} className='w-20'>
          <option value=''  className='text-bold font-serif bg-pink-400'>Choose </option>
          <option value='centres' >Centres</option>
          <option value='spacecrafts'>Spacecrafts</option>
          <option value='satellites'>Satellites</option>
        </select>
        </div>

        <div className="sidenav hidden lg:block">
          <ul className='flex gap-16 font-bold text-white  '>
            <NavLink className={({isActive})=>`${isActive ?  "border-white border-2 p-1 text-gray-800 bg-red-500 transition-all duration-400 "  : ""}`}  to='/spacecraft'><li className=''>Spacecrafts</li></NavLink>
            <NavLink className={({isActive})=>`${isActive ?  "border-white border-2 p-1 text-gray-800 bg-red-500 transition-all duration-400"  : ""}`} to='/centres'><li className=''>Centres</li></NavLink>
            <NavLink className={({isActive})=>`${isActive ? "border-white border-2 p-1 text-gray-800 bg-red-500 transition-all duration-400" : ""}`} to='/satellites'><li className=''>Satellites</li></NavLink>
          </ul>
        </div>


      </div>


    <Outlet/>
      
      

     
    </>
  )
}

export default App
