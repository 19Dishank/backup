import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const From = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
        defaultValues: {
            username: "",
            lastname: "",
            age: "",
            dept: "",
            gender: ""

        }
    });
    const handleFromSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 5000))
        console.log(data);
        reset()
    }
    useEffect(() => {
        if (isSubmitSuccessful) {

            const timer = setTimeout(() => {
                reset();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isSubmitSuccessful, reset]);
    return (
        <>

            <h1 className='text-center text-2xl font-black py-3 capitalize'>React hook Form</h1>
            <form className="max-w-md mx-auto p-5 bg-white border border-gray-200 rounded-2xl shadow-sm" onSubmit={handleSubmit(handleFromSubmit)}>
                <h1>{isSubmitSuccessful && "form submitted"}</h1>
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-700">
                        Username
                    </label>
                    <input type="text" id="username" className={`w-full px-4 py-2.5 text-sm rounded-lg border transition-all focus:ring-2 focus:outline-none ${errors.username ? 'border-red-500 focus:ring-red-100' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'}`}
                        placeholder="Enter username"
                        {...register("username", {
                            required: { value: true, message: 'Field is required' },
                            minLength: { value: 3, message: 'minimum 3 characters required' },
                            maxLength: { value: 10, message: 'maximum 10 characters allowd' },
                            pattern: { value: /^[A-Za-z]+$/i, message: "no numbers or symbols allowd" }
                        })}
                    />
                    {errors.username && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.username.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="lastname" className="block mb-2 text-sm font-semibold text-gray-700">
                        Last name
                    </label>
                    <input
                        type="text"
                        id='lastname'
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border transition-all focus:ring-2 focus:outline-none ${errors.lastname ? 'border-red-500 focus:ring-red-100' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'}`}
                        placeholder="Enter last name"
                        {...register("lastname", {
                            required: { value: true, message: 'Field is required' },
                            minLength: { value: 3, message: 'minimum 3 characters required' },
                            maxLength: { value: 10, message: 'maximum 10 characters allowd' },
                            pattern: { value: /^[A-Za-z]+$/i, message: "no numbers or symbols allowd" }
                        })}
                    />
                    {errors.lastname && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.lastname.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="age" className="block mb-2 text-sm font-semibold text-gray-700">
                        Age
                    </label>
                    <input
                        type="number"
                        id='age'
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border transition-all focus:ring-2 focus:outline-none ${errors.age ? 'border-red-500 focus:ring-red-100' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'}`}
                        placeholder="Enter age"
                        {...register("age", {
                            required: { value: true, message: 'Field is required' },
                            min: { value: 18, message: 'minimum 18 age required' },
                            max: { value: 60, message: 'maximum 60 age allowd' },
                        })}
                    />
                    {errors.age && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.age.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="dept" className="block mb-2 text-sm font-semibold text-gray-700">Department</label>
                    <select
                        id='dept'
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white transition-all focus:ring-2 focus:outline-none ${errors.dept ? 'border-red-500 focus:ring-red-100' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'}`}
                        {...register("dept", {
                            required: { value: true, message: 'Field is required' },
                        })}>
                        <option value="" disabled>-- select department --</option>
                        <option value="JS">JS</option>
                        <option value="PHP">PHP</option>
                        <option value="AI">AI</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.dept && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.dept.message}</p>}
                </div>

                <div className="mb-6">
                    <span className="block mb-3 text-sm font-semibold text-gray-700">Gender</span>
                    <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer group">
                            <input {...register("gender", { required: { value: true, message: 'Field is required' } })}
                                value="male" type="radio" name="gender" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">Male</span>
                        </label>
                        <label className="flex items-center cursor-pointer group">
                            <input {...register("gender", { required: { value: true, message: 'Field is required' } })}
                                value="female" type="radio" name="gender" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">Female</span>
                        </label>
                    </div>
                    {errors.gender && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.gender.message}</p>}
                </div>

                <button
                    disabled={isSubmitting}
                    type='submit'
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md active:transform active:scale-[0.98] disabled:bg-gray-500 disabled:active:transform-none disabled:active:scale-[1]">
                    {isSubmitting ? "Submitting" : "Submit Application"}
                </button>
            </form>


        </>
    )
}

export default From
