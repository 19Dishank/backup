import React from 'react';
import { Form } from 'react-router-dom';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.currentTarget);
        const contactData = Object.fromEntries(formData);
        console.log(contactData);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <div className="md:col-span-2 bg-blue-600 p-5 flex flex-col justify-between text-white">
                    <div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70">Contact</span>
                        <h2 className="text-4xl font-black mt-2 mb-6 leading-tight uppercase tracking-tighter">
                            Get in <br /> Touch
                        </h2>
                    </div>
                </div>
                <Form onSubmit={handleSubmit} className="md:col-span-3 p-5 md:p-10 bg-slate-900">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div className="relative group">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block group-focus-within:text-blue-500 transition-colors">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                placeholder="John Doe"
                                className="w-full bg-slate-950 border-b-2 border-slate-800 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                            />
                        </div>
                        <div className="relative group">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block group-focus-within:text-blue-500 transition-colors">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder="john@example.com"
                                className="w-full bg-slate-950 border-b-2 border-slate-800 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                            />
                        </div>
                    </div>

                    <div className="relative group mb-10">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block group-focus-within:text-blue-500 transition-colors">
                            Your Message
                        </label>
                        <textarea
                            rows="4"
                            id='msg'
                            name='msg'
                            placeholder="How can we help you?"
                            className="w-full bg-slate-950 border-b-2 border-slate-800 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-slate-700"
                        ></textarea>
                    </div>

                    <button type='submit' className="group relative w-full md:w-auto px-10 py-4 bg-white text-slate-950 font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                        <span className="relative z-10">Send Message</span>
                        <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </Form>

            </div>
        </div>
    );
};

export default Contact;