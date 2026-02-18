import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { displayCountry } from "../APIs/PostApi";

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // States for Search, Sort, and Filter
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [region, setRegion] = useState("all");

    const fetchCountries = async () => {
        try {
            const res = await displayCountry();
            setCountries(res.data);
        } catch (error) {
            console.error("Fetch failed", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchCountries(); }, []);

    // Logic: Combined Filter and Sort
    const filteredCountries = countries
        .filter((country) => {
            const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
            const matchesRegion = region === "all" || country.region === region;
            return matchesSearch && matchesRegion;
        })
        .sort((a, b) => {
            return sortOrder === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        });

    if (loading) return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
            <h1 className="text-slate-500 text-2xl font-black tracking-[0.5em] animate-pulse">LOADING</h1>
        </div>
    );

    return (
        <div className="bg-slate-950 min-h-screen w-full px-6 py-10">
            <div className="max-w-7xl mx-auto">
                
                {/* --- Enhanced Toolbar --- */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
                    
                    {/* Search Input */}
                    <div className="relative w-full lg:max-w-md">
                        <input 
                            type="text" 
                            placeholder="SEARCH BY NAME..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-600 font-bold text-[11px] tracking-widest"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto justify-between">
                     
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Region:</span>
                            <select 
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-xl focus:outline-none cursor-pointer font-bold text-[10px] tracking-widest uppercase hover:text-white transition-colors"
                            >
                                <option value="all">All</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">Americas</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </div>

                      
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sort:</span>
                            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800">
                                <button 
                                    onClick={() => setSortOrder("asc")}
                                    className={`px-4 py-2 text-[10px] font-black rounded-lg transition-all ${sortOrder === 'asc' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    ASC
                                </button>
                                <button 
                                    onClick={() => setSortOrder("desc")}
                                    className={`px-4 py-2 text-[10px] font-black rounded-lg transition-all ${sortOrder === 'desc' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    DESC
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <CountryCard key={country.name.official} country={country}/>
                        ))
                    ) : (
                        <div className="col-span-full py-32 border border-slate-900 bg-slate-900/20 rounded-3xl flex flex-col items-center justify-center gap-4">
                            <svg className="w-12 h-12 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <p className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[10px]">No territories found for this filter</p>
                        </div>
                    )}
       