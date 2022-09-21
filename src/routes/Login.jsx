import React from "react";

const Login = () => {
  return (
    <div>
  <section class="h-full gradient-form bg-gray-100 md:h-screen">
  <div class="container py-12 px-6 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                 
                <h3 class="mb-20 text-2xl font-medium text-center">Login to your Account</h3>
                </div>
                <form>
                  
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                  
                    <button
                      class="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      
                    >
                      Log in
                    </button>
                   
                    <a class="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div class="flex justify-center pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    
                  </div>
                </form>
              </div>
            </div>
            <div
              class="lg:w-6/12 flex items-center bg-indigo-600 lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
          
            >
              <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 class="text-xl font-semibold mb-6"></h4>
                <p class="text-sm">
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Login;
