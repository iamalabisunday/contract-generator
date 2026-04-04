import { useState } from "react";
import AuthLayoutFooter from "../components/AuthLayoutFooter";
import SocialAuth from "../components/SocialAuth";
import SwitchAuth from "../components/SwitchAuth";
import { useNavigate } from "react-router-dom";

export default function Verify() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const CODE = "123456";

    const handleCode = (e, index) => {
        const value = e.target.value;
        if (!/^\d$/.test(value) && value !== "") return;

        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
        setError(""); // Clear error on new input

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`code-input-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !inputs[index] && index > 0) {
            const prevInput = document.getElementById(`code-input-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleVerify = () => {
        const fullCode = inputs.join("");

        if (fullCode.length < 6) {
            setError("Please enter all 6 digits.");
            return;
        }

        if (fullCode === CODE) {
            setIsLoading(true);
            setTimeout(() => navigate("/overview"), 1000); // slight delay for UX
        } else {
            setError("Invalid code. Please try again.");
            setInputs(["", "", "", "", "", ""]);
            document.getElementById("code-input-0")?.focus();
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center min-h-full py-2">
            <div className="w-full max-w-[420px] flex flex-col justify-center">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-medium text-textHeader mb-3">
                        Welcome 👋! Let's Get Started
                    </h1>
                    <p className="text-textBody text-base px-2 font-light">
                        Kindly enter the six digit code sent to your registered email to verify your account
                    </p>
                </div>

                {/* OTP Inputs */}
                <div className="flex justify-between gap-3 mb-3">
                    {inputs.map((value, index) => (
                        <input
                            key={index}
                            id={`code-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleCode(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-14 sm:w-14 sm:h-14 text-center text-xl font-medium border border-borderLight rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-textBody transition-colors"
                        />
                    ))}
                </div>

                {/* Error message — now OUTSIDE the flex row */}
                {error && (
                    <p className="text-textError text-sm mb-3 text-center font-light">{error}</p>
                )}

                {/* Verify Button */}
                <button
                    onClick={handleVerify}
                    disabled={isLoading}
                    className="w-full cursor-pointer bg-primary hover:bg-primaryDark text-white py-3.5 rounded-full font-medium transition-colors flex items-center justify-center space-x-2 mt-4 mb-8"
                >
                    <span>{isLoading ? "Verifying..." : "Verify Account"}</span>
                    {isLoading && (
                        <svg
                            className="animate-spin h-5 w-5 text-white/70"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                    )}
                </button>

                <SocialAuth />
                <SwitchAuth text="Already have an account?" to="/login" />
            </div>

            <div className="flex justify-center space-x-8 w-full absolute bottom-8 left-0 right-0">
                <AuthLayoutFooter />
            </div>
        </div>
    );
}