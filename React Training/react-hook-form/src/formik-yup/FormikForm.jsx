import React from 'react'

const FormikForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">

            <div className="mb-4">
              <label for="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="full-name" name="name" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="John Doe" />

              <p className="mt-2 text-sm text-red-600 hidden" id="name-error">Please enter your full name.</p>
            </div>


            <div className="mb-4">
              <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
              <input id="email-address" name="email" type="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-red-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" placeholder="you@example.com" />

              <p className="mt-2 text-sm text-red-600" id="email-error">That email address is already in use.</p>
            </div>


            <div className="mb-4">
              <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" name="password" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="••••••••" />
              <p className="mt-2 text-sm text-red-600 hidden" id="password-error">Password must be at least 8 characters.</p>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default FormikForm
