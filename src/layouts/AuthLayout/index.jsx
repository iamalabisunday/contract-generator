import { Outlet } from "react-router-dom";
import illustration from "../../assets/illustration/illustration.svg";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center bg-primaryLighter p-12">
        <div className="max-w-md text-center flex flex-col items-center">
          <img src={illustration} alt="Illustration" className="w-full max-w-lg h-auto mb-10" />

          {/* Carousel Indicators */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primaryLight rounded-full"></div>
            <div className="w-2 h-2 bg-primaryLight rounded-full"></div>
          </div>

          <h2 className="text-[2rem] leading-tight font-medium text-gray-800 mb-2 whitespace-nowrap">
            Fast, Efficient & Made for You
          </h2>
          <p className="text-gray-500 text-base px-2 font-light">
            Save time, avoid mistakes, and get contracts tailored to your needs in under 90 minutes.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-6 sm:p-12 relative">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
