import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useMyContext } from "../MyContext";

const Login = () => {
  const { value, setValue } = useMyContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onsubmit = () => {
    console.log("on submit sign in");
    axios
      .post("http://localhost:3006/auth/login", formData, {
        withCredentials: true, // include credentials
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data == "register") toast.success("Login failed");
        else {
          setValue({
            ...value,
            user: res.data.asha_login.user,
            token: res.data.asha_login.token,
          });
          navigate("/patient");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Login
          </h2>
          <Toaster toastOptions={{ duration: 4000 }} />
          <div class="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                name="email"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="password"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                name="password"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <button
              onClick={() => onsubmit()}
              class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Log in
            </button>

            {/* <div class="relative flex items-center justify-center">
              <span class="absolute inset-x-0 h-px bg-gray-300"></span>
              <span class="relative bg-white px-4 text-sm text-gray-400">
                Log in with social
              </span>
            </div>
            <div>
              <GoogleLogin
                class="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                clientId="730525504291-364glkh8qkqtl67l8sfeoaipfvu95qop.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onError={onErrorGoogle}
              />
            </div> */}
          </div>

          <div class="flex items-center justify-center bg-gray-100 p-4">
            <p class="text-center text-sm text-gray-500">
              Don't have an account?
              <Link
                href="#"
                class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                to={"/Signup"}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
