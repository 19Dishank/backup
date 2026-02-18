import React from 'react';
import About from './About';

const Hero = () => {
    return (
        <div className='h-screen'>
            <div className='grid  grid-cols-2'>
                <div className='px-20  w-full bg-zinc-950 h-lvh flex flex-col justify-center text-slate-100'>
                    <div className='text-4xl'>
                        World Atlas
                    </div>
                    Get a blueprint of all countries of the world with 200+ maps. Explore the world atlas with political, satellite, and topographic maps.
                </div>
                <div className='w-full bg-zinc-950 h-lvh flex justify-center items-center'>
                    <img src="World-Atlas.png" alt="World-Atlas.png"  className='h-100 ' />
                </div>
            </div>
        </div>
    );
};

export default Hero;