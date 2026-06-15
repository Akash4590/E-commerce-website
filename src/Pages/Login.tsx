import { useState } from "react";
import AnnouncementBar from "../Components/Announcementbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { assets } from "../assets/assets";

const Login = () => {
  const [form, setForm] = useState({
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
      <Navbar showIcons={false} />

      {/* Main Content */}
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] pt-12">

          {/* Left — Banner Image */}
          <div className="hidden md:block relative bg-sky-100 overflow-hidden">
            <img
              src={assets.Log_in}
              alt="Login Banner"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>

          {/* Mobile image */}
          <div className="block md:hidden bg-sky-100 h-56">
            <img
              src={assets.Log_in}
              alt="Login Banner"
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
                Log in to Exclusive
              </h1>
              <p className="text-sm text-gray-600 mb-8">Enter your details below</p>

              {/* Form Fields */}
              <div className="flex flex-col gap-6">
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

              {/* Log In + Forget Password row */}
              <div className="flex items-center justify-between mt-8 gap-4">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-medium rounded transition-colors"
                >
                  Log In
                </button>

                <a
                  href="/forgot-password"
                  className="text-sm text-red-500 hover:text-red-600 transition-colors whitespace-nowrap"
                >
                  Forget Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;