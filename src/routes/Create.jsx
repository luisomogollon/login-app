import React from 'react';

const Create = () => {
    return (
        <div class="flex justify-center items-center  bg-gray-100">
        <div class="lg:w-2/5 bg-white rounded shadow-2xl md:w-2/5 sm:w-3/5 p-16 m-2">
            <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Create an account</h1>
            <form action="/" method="post">
                <div class="flex flex-col mb-4">
                    <label class="mb-2  text-lg text-gray-900" for="first_name">Username or Email</label>
                    <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name"/>
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2 text-lg text-gray-900" for="last_name">Email</label>
                    <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name"/>
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2  text-lg text-gray-900" for="email">New Password</label>
                    <input class="border py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2  text-lg text-gray-900" for="password">New Password (Repeat)</label>
                    <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"/>
                </div>
                <button class="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto mt-10 p-3 rounded" type="submit">Create Account</button>
            </form>
            <a class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" href="/login">Already have an account?</a>
        </div>
    </div>
    );
};

export default Create;