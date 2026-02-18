import React from 'react';
import countryData from '../APIs/CountryData.json'
const About = () => {
    return (
        <div>
            <h1 className='text-slate-50 text-3xl text-center pt-4 capitalize font-sans italic'>here are the interesting facts about some countries</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-10 py-10 max-w-7xl mx-auto'>
                {countryData.map((ele) => {
                    return (
                        <div key={ele.id} className="group relative flex flex-col w-full h-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">

                            <div className="grow p-8">
                                <div className="flex flex-col gap-1 mb-8">

                                    <h2 className="text-3xl font-black text-white tracking-tight leading-none uppercase">{ele.countryName}</h2>

                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"></path></svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold">Capital</p>
                                            <p className="text-sm text-slate-200 font-medium">{ele.capital}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold">Population</p>
                                            <p className="text-sm text-slate-200 font-medium">{ele.population}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-slate-800"></div>
                                    <p className="text-sm leading-relaxed text-slate-400 font-light italic pl-4">
                                        "{ele.interestingFact}"
                                    </p>
                                </div>
                            </div>


                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default About;