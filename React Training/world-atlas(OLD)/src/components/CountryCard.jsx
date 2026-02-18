import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
    const { common } = country.name;
    const { png } = country.flags;
    const { capital, population, region } = country;

    return (
       
        <div className="flex flex-col h-full w-full bg-slate-900 rounded-xl overflow-hidden group border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
            
            <div className="h-40 w-full overflow-hidden border-b border-slate-800">
                <img
                    src={png}
                    alt={common}
                    className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <div className="p-6 flex flex-col grow">
                <div className="mb-6">
                    <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] mb-1">{region}</p>
                    <h2 className="text-xl font-bold text-white tracking-tight leading-tight">{common}</h2>
                </div>

                
                <div className="space-y-3 grow">
                    <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-500 uppercase font-bold tracking-widest">Capital</span>
                        <span className="text-slate-200">{capital?.[0] || "N/A"}</span>
                    </div>

                    <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-500 uppercase font-bold tracking-widest">Population</span>
                        <span className="text-slate-200">{population.toLocaleString()}</span>
                    </div>
                </div>
                <NavLink to={`/country/${common}`}>
                <button className="mt-8 w-full py-3 bg-slate-950 hover:bg-blue-600 text-slate-400 hover:text-white text-[10px] font-black tracking-widest rounded-lg border border-slate-800 transition-all uppercase">
                    View Details
                </button>
                </NavLink>
            </div>
        </div>
    );
};

export default CountryCard;