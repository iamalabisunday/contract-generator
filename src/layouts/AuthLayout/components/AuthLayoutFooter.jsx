import { FiLock, FiFileText, FiHelpCircle } from "react-icons/fi";

export default function AuthLayoutFooter() {
    return <div className="flex justify-center space-x-8 text-textBody text-sm w-full mt-20">
        <a href="#" className="flex items-center space-x-1.5 hover:text-textHeader transition-colors">
            <FiLock className="mb-0.5 text-base" />
            <span className="font-light">Privacy</span>
        </a>
        <a href="#" className="flex items-center space-x-1.5 hover:text-textHeader transition-colors">
            <FiFileText className="mb-0.5 text-base" />
            <span className="font-light">Terms</span>
        </a>
        <a href="#" className="flex items-center space-x-1.5 hover:text-textHeader transition-colors">
            <FiHelpCircle className="mb-0.5 text-base" />
            <span className="font-light">Get help</span>
        </a>
    </div>
}