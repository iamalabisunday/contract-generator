import { Link } from "react-router-dom";
import { ButtonHeader } from "../../../components/Button";
import Logo from "../../../assets/icons/logo.svg";

// Header Link
function HeaderLink({ to, text }) {
    return (
        <Link to={to} className="hover:text-primary">{text}</Link>
    )
}

export default function HeaderSection() {
    return (
        <section className="py-16 sm:py-24 lg:py-6 bg-primaryLighter">
            <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 border-b-[0.05rem] border-b-primary">
                <div className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" className="w-32" />
                    <div className="flex items-center gap-8 font-light text-sm text-textBody">
                        <HeaderLink to="/overview" text="Pricing" />
                        <HeaderLink to="/overview" text="Features" />
                        <HeaderLink to="/overview" text="FAQ" />
                        <HeaderLink to="/overview" text="Template" />
                        <ButtonHeader btn="Get Started" to="/overview" />
                    </div>
                </div>
            </div>
        </section>
    )
}

