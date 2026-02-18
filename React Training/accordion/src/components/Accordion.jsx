import React, { useEffect, useState } from 'react';
import FAQ from '../API/faq.json'
import FAQcard from './FAQcard';
const Accordion = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false)
    useEffect(() => {
        setData(FAQ);
    }, []);

    const handleToggle = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id)
        )
    }
    return (
        <div className='grid grid-cols-1 place-items-center py-5'>
            <header className='capitalize underline font-bold text-xl text-slate-100'>The Accordion</header>
            <div className='gap-2 flex flex-col mt-5 py-5'>
                {data.map((curElem) =>
                    <FAQcard
                        key={curElem.id}
                        curElem={curElem}
                        isActive={activeId === curElem.id}
                        onToggle={() => { handleToggle(curElem.id) }}
                    />)}
            </div>
        </div>
    );
};

export default Accordion;