import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiFileText, FiHelpCircle } from "react-icons/fi";
import AuthInput from "../components/AuthInput";
import SocialAuth from "../components/SocialAuth";
import AuthLayoutFooter from "../components/AuthLayoutFooter";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("signup_data");
    const initial = saved ? JSON.parse(saved) : null;
    return initial || { name: "", email: "", password: "" };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("signup_data", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateName(formData.name)) newErrors.name = "Enter your Full name!";
    if (!validateEmail(formData.email)) newErrors.email = "Enter a valid email!";
    if (!validatePassword(formData.password)) newErrors.password = "Enter a valid password!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/verify");
  };

  return (
    <div className="w-full min-h-full">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-medium text-textHeader mb-2">
            Welcome👋! Let's Get Started
          </h1>
          <p className="text-textBody w-[90%] md:w-[80%] text-base px-2 font-light">
            Kindly fill in your correct details to create a free account.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSignUp}>
          <AuthInput
            label="Name"
            type="text"
            placeholder="Enter your name"
            icon={FiUser}
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            error={errors.name}
          />
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

          <button type="submit" className="w-full cursor-pointer bg-primary hover:bg-primaryDark text-white py-3.5 rounded-full font-light transition-colors mt-2 mb-8">
            Create Account
          </button>
        </form>

        <SocialAuth />

        <div className="text-center mt-8">
          <p className="text-textBody text-sm font-light">
            Already have an account?
            <Link to="/login" className="text-primary font-normal hover:text-primaryDark ml-1">
              Log In
            </Link>
          </p>
        </div>
      </div>

      <AuthLayoutFooter />
    </div>
  );
}
