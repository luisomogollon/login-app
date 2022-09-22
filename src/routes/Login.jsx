import React from "react";
import { GiAndroidMask } from "react-icons/gi";

const Login = () => {
  return (
    <section className="w-full  bg-white">
      <body>
        <div className="flex items-center min-h-screen bg-gray-100">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-48 md:h-auto md:w-1/2">
              
                <section className="h-auto bg-white">
                  <div className="max-w-7xl mx-auto py-1 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
                    <h2 className="text-center font-semibold text-indig-600 tracking-wide uppercase">
                      L´ART
                    </h2>

                    <p className=" text-4xl text-center font-semibold text-gray-700 italic sm:text-5xl sm:tracking-tight lg:text-3xl">
                      New Here?
                    </p>

                    <div className="justify-center flex  ">
                      <button className="bg-blue-500 flex justify-center hover:bg-blue-700 text-white  font-semibold mt-9 py-1 px-2 rounded">
                        Sing up
                      </button>
                    </div>
                  </div>
                </section>

              </div>

              <div className="flex items-center bg-indigo-400 justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 text-gray-800"
                      fill="none"
                      viewBox="0 0 17 24"
                      stroke="currentColor"
                    >
                      <GiAndroidMask />
                    </svg>
                  </div>

                  <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
                    Login to Your Account
                  </h1>

                  <div class="flex flex-row items-center justify-center lg:justify-center">
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block p-3 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        class="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block p-3 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block p-3 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Email Address"
                    />
                  </div>

                  <div>
                    <label className="block mt-4 text-sm">Password</label>
                    <input
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Password"
                      type="password"
                    />
                  </div>

                  <button
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    href="#"
                  >
                    Sign in
                  </button>

                  <div className="mt-4 text-center">
                    <p className="text-sm">
                      Forgot your password ?{" "}
                      <a href="." className="text-blue-600 hover:underline">
                        Here.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </section>
  );
};

export default Login;
