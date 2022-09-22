import React from "react";


const Login = () => {
  return (
    <section className="w-full  bg-white">
      <body className="">
        <div className="flex items-center min-w-screen min-h-screen bg-gray-100">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-60 md:h-auto md:w-1/2">
                <section className="h-auto bg-white">
                  <div className="max-w-7xl mx-auto py-1 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
                    <h2 className="text-center font-semibold text-gray-900  tracking-wide uppercase">
                      L´ART
                    </h2>

                    <p className=" italic text-3xl  text-center font-extrabold text-indigo-600  sm:text-1xl sm:tracking-tight lg:text-1xl">
                      New Here ?
                    </p>

                    <p className=" text-sm pt-6 text-center font-bold italic  text-gray-600  sm:text-1xl sm:tracking-tight lg:text-1xl">
                      Sign up and discover a great amout of new oppurtinities!
                    </p>

                    <div className="justify-center flex  ">
                      <button className="bg-indigo-500 flex justify-center   hover:bg-indigo-700 text-white  font-semibold mt-9 py-1 px-4 rounded-full">
                        Sing up
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              <div className="flex items-center bg-slate-500 justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <div className="flex justify-center"></div>

                  <h1 className="mb-10 text-2xl font-bold text-center text-gray-800">
                    Login to Your Account
                  </h1>

                 

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
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-indigo-700 border border-transparent rounded-lg active:bg-indigo-900 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue"
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
