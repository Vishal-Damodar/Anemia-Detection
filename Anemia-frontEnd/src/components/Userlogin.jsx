import React from "react";
import { Link } from "react-router-dom";

const Userlogin = () => {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Login
          </h2>

          <form class="mx-auto max-w-lg rounded-lg border">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  for="email"
                  class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Addhar Number
                </label>
                <input
                  name="addhar"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Phone Number
                </label>
                <input
                  name="password"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Enter OTP
                </label>
                <input
                  name="OTP"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
