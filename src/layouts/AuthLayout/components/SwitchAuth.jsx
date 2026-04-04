import { Link } from "react-router-dom";

export default function SwitchAuth({ text, to }) {
    return (
        <div className="text-center mt-8">
            <p className="text-textBody text-sm font-light">
                {text}
                <Link to={to} className="text-primary font-normal hover:text-primaryDark ml-1">
                    {to === "/login" ? "Log In" : "Sign Up"}
                </Link>
            </p>
        </div>
    )
}
