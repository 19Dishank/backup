import React from 'react';
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';
// import { MoveLeft, Home } from 'lucide-react'; // Optional icons

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    
    // Log error for debugging
    console.error(error);

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className='min-h-screen bg-slate-950 flex flex-col justify-center items-center px-6 text-center overflow-hidden relative'>
            
            {/* Background Decorative Element */}
            <div className="absolute text-[20rem] font-black text-slate-900 select-none -z-10 opacity-40">
                {error.status || "!"}
            </div>

            <div className='max-w-md w-full'>
                {/* Visual Icon/Graphic */}
                <div className='text-6xl md:text-8xl mb-4'>🌍</div>
                
                <h1 className='text-4xl md:text-5xl font-black text-white mb-2 italic tracking-tighter'>
                     <span className='text-indigo-500'>ERROR</span>
                </h1>
                
                <p className='text-slate-400 text-lg mb-8'>
                    {error.status === 404 
                        ? "The Page You Are Looking For is Not Available" 
                        : `Oops! ${error.statusText || error.data || "Something went wrong."}`}
                </p>

                {/* Button Container - Stacks on small mobile, row on larger screens */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <button
                        onClick={handleBack}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all active:scale-95"
                    >
                        {/* <MoveLeft size={18} /> */}
                        Go Back
                    </button>

                    <NavLink 
                        to="/" 
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
                    >
                        {/* <Home size={18} /> */}
                        Home
                    </NavLink>
                </div>
            </div>

            {/* Subtle Technical Detail at bottom */}
            {error.status && (
                <div className='absolute bottom-10 font-mono text-xs text-slate-600'>
                    Error Code: {error.status}
                </div>
            )}
        </div>
    );
};

export default ErrorPage;