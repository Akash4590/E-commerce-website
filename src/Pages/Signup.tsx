import { useState } from "react";
import AnnouncementBar from "../Components/Announcementbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {assets} from '../assets/assets'

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnnouncementBar />
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

          {/* Left — Banner Image */}
          <div className="hidden md:block relative bg-sky-100 overflow-hidden">
            <img
              src={assets.sign_up}
              alt="Sign Up Banner"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>

          {/* Mobile image */}
          <div className="block md:hidden bg-sky-100 h-56">
            <img
              src="/images/signup-banner.png"
              alt="Sign Up Banner"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>

          {/* Right — Form */}
          <div className="flex items-center justify-center px-8 sm:px-16 md:px-20 py-16">
            <div className="w-full max-w-md">
              {/* Heading */}
              <h1 className="text-3xl font-medium text-gray-900 mb-3">
                Create an account
              </h1>
              <p className="text-sm text-gray-600 mb-8">Enter your details below</p>

              {/* Form Fields */}
              <div className="flex flex-col gap-6">
                {/* Name */}
                <div className="border-b border-gray-300 focus-within:border-gray-900 transition-colors">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full pb-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
                  />
                </div>

                {/* Email or Phone */}
                <div className="border-b border-gray-300 focus-within:border-gray-900 transition-colors">
                  <input
                    type="text"
                    name="emailOrPhone"
                    value={form.emailOrPhone}
                    onChange={handleChange}
                    placeholder="Email or Phone Number"
                    className="w-full pb-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
                  />
                </div>

                {/* Password */}
                <div className="border-b border-gray-300 focus-within:border-gray-900 transition-colors">
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full pb-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 mt-8">
                {/* Create Account */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-medium rounded transition-colors"
                >
                  Create Account
                </button>

                {/* Sign up with Google */}
                <button className="w-full py-3.5 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 text-gray-800 text-sm font-medium rounded flex items-center justify-center gap-3 transition-colors">
                  {/* Google Icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                    <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                  Sign up with Google
                </button>
              </div>

              {/* Login link */}
              <p className="text-sm text-gray-600 text-center mt-6">
                Already have account?{" "}
                <a
                  href="/login"
                  className="text-gray-800 font-medium underline underline-offset-4 hover:text-black transition-colors"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;