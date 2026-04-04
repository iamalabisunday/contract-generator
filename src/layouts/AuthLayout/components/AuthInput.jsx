import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthInput({ label, type = "text", placeholder, icon: Icon, value, onChange, error }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col space-y-2 mb-5 w-full">
      <label className="text-base font-light text-textParagraph">{label}</label>
      <div className="relative flex items-center">
        {Icon && (
          <span className={`absolute left-4 ${error ? "text-red-500" : "text-textBody"}`}>
            <Icon className="text-base" />
          </span>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-14 sm:h-12 border rounded-xl text-sm font-light focus:ring-1 outline-none transition-colors ${error
            ? "bg-backgroundSecondary border-textError focus:border-textError focus:ring-textError text-textError"
            : "bg-backgroundSecondary border-borderLight focus:border-primary focus:ring-primary text-textParagraph"
            } ${Icon ? "pl-10" : "pl-4"} ${isPassword ? "pr-12" : "pr-4"}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute cursor-pointer right-4 text-textBody hover:text-textParagraph"
          >
            {showPassword ? <FiEyeOff className="text-base" /> : <FiEye className="text-base" />}
          </button>
        )}
      </div>
      {error && <span className="text-sm font-light text-[#cc0000]">{error}</span>}
    </div>
  );
}
