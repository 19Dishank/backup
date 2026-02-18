import React, { useState } from 'react';

const FAQcard = ({ curElem, onToggle, isActive }) => {

    const { question, answer, id } = curElem;

    const handleToggle = (id) => {

    }
    return (
        <div className='w-150  rounded-xs  border border-l-4 border-slate-100 border-l-purple-500 px-2 py-4 flex flex-row justify-between'  >
            <div className='flex flex-col  '>
                <p className='text-slate-100 text-sm '>
                    {question}
                </p>
                <p className='text-slate-100 text-sm pt-2 ' id='ans'>
                    {isActive && answer}
                </p>
            </div>
            <div >
                <button
                    onClick={onToggle}
                    className={`border rounded-xs px-2 text-slate-100 ${isActive ? 'border border-red-600' : 'border border-green-600'}`} >

                    {isActive ? "Close" : "Show"}

                </button>
            </div>
        </div>
    );
};

export default FAQcard;