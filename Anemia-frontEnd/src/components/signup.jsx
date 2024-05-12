import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useMyContext } from "../MyContext";
import { Link } from "react-router-dom";

function Signup() {
  const { value, setValue } = useMyContext();

  const [params, setParams] = useState({
    name: { value: "", valid: false, error: "" },
    aadhar: { value: "", valid: false, error: "" },
    phone: { value: "", valid: false, error: "" },
    email: { value: "", valid: false, error: "" },
    gender: { value: "", valid: false, error: "" },
    password: { value: "", valid: false, error: "" },
    password2: { value: "", valid: false, error: "" },
  });

  const onsubmit = () => {
    const isValid = Object.values(params).every((field) => field.valid);

    if (!isValid) {
      // Update state to show error messages
      const updatedParams = {};
      Object.keys(params).forEach((key) => {
        if (!params[key].valid) {
          updatedParams[key] = {
            ...params[key],
            error: "This field is required.",
          };
        } else {
          updatedParams[key] = params[key];
        }
      });
      setParams(updatedParams);
      if (params.password.value !== params.password2.value) {
        console.log(params);
        return toast.error("Passwords do not match");
      } else if (params.password.value.length < 8)
        return toast.error("Passwords must be atleast 8 chareture");

      return;
    }
    const formData = {
      name: params.name.value,
      aadhar: params.aadhar.value,
      phone: params.phone.value,
      email: params.email.value,
      gender: params.gender.value,
      role: value.role,
      password: params.password.value,
      password2: params.password2.value,
    };
    console.log("done");

    axios
      .post("http://localhost:3006/auth/register", formData)
      .then((res) => {
        console.log(res);
        if (res.data.register?.errors.length > 0)
          toast.error(res.data.register?.errors[0]?.msg);
        else 
        toast.success(res.data.success_msg);
          
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (field, value) => {
    if (value.trim() === "") {
      setParams((prevParams) => ({
        ...prevParams,
        [field]: {
          value: value,
          valid: false,
          error: "This field is required.",
        },
      }));
    } else {
      setParams((prevParams) => ({
        ...prevParams,
        [field]: { value: value, valid: true, error: "" },
      }));
    }
    console.log(params);
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div class="bg-grey-lighter min-h-screen flex flex-col  ">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
            />
            {!params.name.valid && (
              <span className="text-red-500">{params.name.error}</span>
            )}

            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            {!params.email.valid && (
              <span className="text-red-500">{params.email.error}</span>
            )}
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="phone"
              placeholder="phone number"
            />
            {!params.phone.valid && (
              <span className="text-red-500">{params.phone.error}</span>
            )}
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="aadhar"
              placeholder="addhar number"
            />
            {!params.aadhar.valid && (
              <span className="text-red-500">{params.aadhar.error}</span>
            )}
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            {!params.password.valid && (
              <span className="text-red-500">{params.password.error}</span>
            )}
            <input
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password2"
              placeholder="Confirm Password"
            />
            {!params.password2.valid && (
              <span className="text-red-500">{params.password2.error}</span>
            )}
            <div>
              <div className="m-4 mb-8">
                <span className="gap mr-6">Gender:</span>
                <label class="inline-flex items-center mr-6">
                  <input
                    type="radio"
                    class="form-checkbox"
                    name="gender"
                    value="male"
                    checked={params.gender.value === "male"}
                    onChange={(e) =>
                      handleInputChange(e.target.name, e.target.value)
                    }
                  />
                  <span class="ml-2 text-gray-800">Male</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-checkbox"
                    name="gender"
                    value="female"
                    checked={params.gender.value === "female"}
                    onChange={(e) =>
                      handleInputChange(e.target.name, e.target.value)
                    }
                  />
                  <span class="ml-2 text-gray-800">Female</span>
                </label>
                <br />
                {!params.gender.valid && (
                  <span className="text-red-500">{params.gender.error}</span>
                )}
              </div>
            </div>

            <button
              onClick={() => onsubmit()}
              type="submit"
              class=" w-full block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <Link to={"/login"}>
              <button class="no-underline border-b border-blue text-blue">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
