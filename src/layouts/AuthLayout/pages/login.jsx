import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import AuthInput from "../components/AuthInput";
import SocialAuth from "../components/SocialAuth";
import AuthLayoutFooter from "../components/AuthLayoutFooter";
import SwitchAuth from "../components/SwitchAuth";


export default function LogIn() {
  const navigate = useNavigate();
  const signupDataString = localStorage.getItem("signup_data");
  const signupData = signupDataString ? JSON.parse(signupDataString) : null;

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const firstName = signupData?.name || "User";

  const handleChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!signupData) {
      newErrors.email = "No account found. Please sign up first.";
    } else {
      if (signupData.email !== formData.email) {
        newErrors.email = "Enter valid email";
      }
      if (signupData.password !== formData.password) {
        newErrors.password = "Enter valid password";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (signupData.email === formData.email && signupData.password === formData.password) {
      navigate("/overview");
    }
  };


  return (
    <div className="w-full min-h-full">
      {/* Main Form Content */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-medium text-textHeader mb-2">
            Welcome Back 👋! <span>{firstName}</span>
          </h1>
          <p className="text-textBody w-[90%] text-base px-2 font-light">
            Kindly fill in your correct details to log in to your account.
          </p>
        </div>

        <form className="w-full" onSubmit={handleLogin}>
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            icon={FiMail}
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
            error={errors.email}
          />
          <AuthInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={FiLock}
            value={formData.password}
            onChange={(e) => handleChange(e, "password")}
            error={errors.password}
          />

          {/* Login Button */}
          <button type="submit" className="w-full cursor-pointer bg-primary hover:bg-primaryDark text-white py-3.5 rounded-full font-light transition-colors mt-2 mb-8">
            Log In
          </button>
        </form>

        <SocialAuth />

        {/* Signup Link */}
        <div className="text-center mt-8">
          <SwitchAuth text="Dont have an account?" to="/signup" />
        </div>
      </div>

      {/* Footer */}
      <AuthLayoutFooter />
    </div>
  );
}

