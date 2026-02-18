import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryIndData } from '../APIs/PostApi';

const CountryDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCountry = async () => {
        try {
            const res = await getCountryIndData(params.id);
            setCountry(res.data[0] || res.data);
        } catch (error) {
            console.error("Fetch failed", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountry();
    }, [params.id]);

    const handleBack = () => navigate(-1);

    if (loading) return (
        <div className="bg-slate-950 min-h-screen flex items-center justify-center">
            <h1 className="text-white text-2xl font-black tracking-widest animate-pulse">LOADING...</h1>
        </div>
    );

    if (!country) return null;

    return (
        <div className="bg-slate-950 min-h-screen text-white">
            <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
                <div className="w-full max-w-2xl mb-6 flex justify-start">
                    <button
                        onClick={handleBack}
                        className='group flex items-center gap-2 px-5 py-2 border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white rounded-full transition-all duration-300 bg-slate-900/50 backdrop-blur-sm'
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">Back</span>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row w-full max-w-2xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 transition-all duration-300 hover:border-slate-700">

                    
                    <div className="relative w-full md:w-80 shrink-0">
                        <img
                            src={country.flags?.svg || country.flags?.png}
                            alt={country.name?.common}
                            className="w-full h-full object-cover aspect-video md:aspect-auto"
                        />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col">
                        <div>
                            <div className="flex flex-col mb-4">
                                <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                                    {country.region} • {country.subregion}
                                </span>
                                <h3 className="text-white text-3xl md:text-4xl font-black uppercase italic leading-tight mb-2">
                                    {country.name?.common}
                                </h3>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold italic">
                                    <span>Tld: {country.tld?.[0]}</span>
                                    <span className="text-emerald-400 not-italic">Pop: {country.population?.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3 border-l-2 border-indigo-500/30 pl-4">
                                <p className="text-xs font-bold tracking-wide">
                                    <span className="text-slate-100 uppercase mr-2 opacity-60">Capital:</span>
                                    <span className="text-slate-300">{country.capital?.[0]}</span>
                                </p>
                                <p className="text-xs font-bold tracking-wide">
                                    <span className="text-slate-100 uppercase mr-2 opacity-60">Languages:</span>
                                    <span className="text-slate-300">
                                        {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
                                    </span>
                                </p>
                            </div>

                            <p className="mt-6 text-slate-400 text-sm leading-relaxed italic">
                                {country.flags?.alt || `The official name of this territory is ${country.name?.official}.`}
                            </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-800 ">
                            <p className="text-xs font-bold tracking-wide">
                                <span className="text-indigo-400 uppercase mr-2">Currencies:</span>
                                <span className="text-slate-400 font-medium">
                                    {country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;