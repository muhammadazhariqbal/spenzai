import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Clock, PlusCircle, Camera, Settings } from 'lucide-react';
import navHome from '../assets/Navhome.png'
import navScan from '../assets/NavScan.png' 
import navChart from '../assets/Navchart.png'
import navProfile from '../assets/Navprofile.png'
const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-8 left-0 right-0 flex h-16 items-center justify-around bg-white border-t border-slate-200 shadow-md px-8                                                                                             mx-5 rounded-lg">
      <button
        onClick={() => navigate('/')}
        className={`flex flex-col items-center justify-center px-2 py-1 ${
          isActive('/') ? 'text-primary' : 'text-slate-600'
        }`}
      >
        {/* <Home size={24} /> */}
        <img src={navHome} alt="Logo" className='w-6 h-6'/>
        {/* <span className="mt-1 text-xs font-medium">Home</span> */}
      </button>
           <button
        onClick={() => navigate('/camera')}
        className={`flex flex-col items-center justify-center px-2 py-1 ${
          isActive('/camera') ? 'text-primary' : 'text-slate-600'
        }`}
      >
        {/* <Camera size={24} /> */}
        <img src={navScan} alt="Logo" className='w-6 h-6'/>
        {/* <span className="mt-1 text-xs font-medium">Scan</span> */}
      </button>
      <button
        onClick={() => navigate('/history')}
        className={`flex flex-col items-center justify-center px-2 py-1 ${
          isActive('/history') ? 'text-primary' : 'text-slate-600'
        }`}
      >
        <img src={navChart} alt="Logo" className='w-6 h-6'/>
        {/* <Clock size={24} /> */}
        {/* <span className="mt-1 text-xs font-medium">History</span> */}
      </button>
      
      {/* <button
        onClick={() => navigate('/add')}
        className="flex flex-col items-center justify-center -mt-5 bg-primary text-white rounded-full p-3 shadow-lg"
      >
        <PlusCircle size={28} />
      </button> */}
      
      
      <button
        onClick={() => navigate('/settings')}
        className={`flex flex-col items-center justify-center px-2 py-1 ${
          isActive('/settings') ? 'text-primary' : 'text-slate-600'
        }`}
      >
        <img src={navProfile} alt="Logo" className='w-6 h-6'/>
        {/* <Settings size={24} /> */}
        {/* <span className="mt-1 text-xs font-medium">Settings</span> */}
      </button>
    </nav>
  );
};

export default Navigation;