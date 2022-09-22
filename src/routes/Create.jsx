import React from "react";
import { FcGoogle } from "react-icons/fc";
const Create = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="lg:w-2/5 bg-white rounded shadow-2xl md:w-2/5 sm:w-3/5 p-16 m-2">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
          Create an account
        </h1>

        <div className="justify-center flex flex-col space-y-2 ">
          <button className="bg-gray-200 hover:bg-gray-300  px-2 py-2 font-semibold text-black inline-flex items-center space-x-2 rounded">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
            >
              <FcGoogle />
            </svg>

            <span>Login Using Google</span>
          </button>
          <button className="bg-blue-500  hover:bg-blue-600  px-2 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            
            <span>Login Using Facebook</span>
          </button>
        </div>

        <form action="/" method="post">
         

          <div className="flex flex-col mb-3 mt-5">
            <label className="mb-2  text-lg text-gray-900" for="first_name">
              UserName or Email
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="User"
              id="fUser"
              placeholder="Username or Email"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 text-lg text-gray-900" for="last_name">
              Email
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="last_name"
              placeholder="Email Address"
              id="last_name"
              
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2  text-lg text-gray-900" for="email">
              New Password
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="email"
              name="email"
              id="email"
              placeholder="New Password"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2  text-lg text-gray-900" for="password">
              New Password (Repeat)
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="password"
              name="password"
              id="password"
              placeholder="Repeat Password"
            />
          </div>

          <button
            className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto mt-10 p-3 rounded"
            type="submit"
          >
            Create Account
          </button>

        </form>
        <a
          className="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
          href="/login"
        >
          Already have an account?
        </a>

      </div>
    </div>
  );
};

export default Create;
