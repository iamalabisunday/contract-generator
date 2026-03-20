import { Link } from "react-router-dom";
import { ButtonHeader } from "../../../components/Button";
import Logo from "../../../assets/icons/Design system/Frame 2147229974.svg";

export default function HeaderSection() {
    return (
        <section className="py-16 sm:py-24 lg:py-6 bg-primaryLighter">
            <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 border-b-[0.05rem] border-b-primary">
                <div className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" className="w-32" />
                    <div className="flex items-center gap-8 font-light text-sm text-textBody">
                        <Link to="/dashboard" className="hover:text-primary">Pricing</Link>
                        <Link to="/dashboard" className="hover:text-primary">Features</Link>
                        <Link to="/dashboard" className="hover:text-primary">FAQ</Link>
                        <Link to="/dashboard" className="hover:text-primary">Template</Link>
                        <ButtonHeader btn="Get Started" to="/dashboard" />
                    </div>
                </div>
            </div>
        </section>
    )
}