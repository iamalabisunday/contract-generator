import { Link } from "react-router-dom";
import { ButtonHeader } from "../../../components/Button";
import Logo from "../../../assets/icons/logo.svg";

// Header Link
function HeaderLink({ to, text }) {
    const handleScroll = (e) => {
        if (to.startsWith("#")) {
            e.preventDefault();
            const element = document.getElementById(to.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <Link to={to} onClick={handleScroll} className="hover:text-primary">
            {text}
        </Link>
    );
}

export default function HeaderSection() {
    return (
        <section className="py-16 sm:py-24 lg:py-6 bg-primaryLighter">
            <div className="mx-auto max-w-7xl pb-6 sm:px-6 md:px-0 border-b-[0.05rem] border-b-primary">
                <div className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" className="w-32" />
                    <div className="flex items-center gap-8 font-light text-sm text-textBody">
                        <HeaderLink to="#pricing" text="Pricing" />
                        <HeaderLink to="#features" text="Features" />
                        <HeaderLink to="#faq" text="FAQ" />
                        <HeaderLink to="#template" text="Template" />
                        <ButtonHeader btn="Get Started" to="/overview" />
                    </div>
                </div>
            </div>
        </section>
    )
}

