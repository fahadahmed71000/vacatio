import React from "react";
import Cr from "../../assets/cr.png";
import Google from "../../assets/google.png";
import Fb from "../../assets/fb.png";
import Apple from "../../assets/apple.png";

const Signup = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="login and img flex justify-evenly ">
            <div className="left pt-9">
              <img className="" src={Cr} alt="" />
            </div>

            <div className="right">
              <div className="flex justify-center items-center min-h-screen">
                <div className="shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-96">
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Create an Account
                    </h2>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email Or Mobile Number
                    </label>
                    <input
                      className="shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder=""
                    />
                    <div className="mb-5">
                      <label
                        className="block text-gray-700 mb-3"
                        htmlFor="password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder=""
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 w-44 mx-auto  hover:bg-blue-700 text-white font-bold p-1 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Registration
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-gray-600">-OR-</span>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <div className="logo flex gap-5">
                        <img src={Google} alt="" />
                        <img src={Fb} alt="" />
                        <img src={Apple} alt="" />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <a
                        href="#"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      >
                        Already have an account? Login{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
