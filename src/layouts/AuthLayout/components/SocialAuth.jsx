import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SocialAuth() {
  return (
    <>
      <div className="w-full flex items-center justify-center space-x-4 mb-6">
        <div className="h-px bg-borderLight grow"></div>
        <span className="text-textBody text-base font-light">Or</span>
        <div className="h-px bg-borderLight grow"></div>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-4">
        <SocialButton icon={FcGoogle} text="Continue With Google" />
        <SocialButton icon={FaApple} text="Continue With Apple" />
      </div>
    </>
  );
}

function SocialButton({ icon, text }) {
  const Icon = icon;
  return (
    <button type="button" className="cursor-pointer flex-1 flex items-center justify-center space-x-2.5 border border-borderLight py-3.5 rounded-2xl hover:bg-backgroundSecondary transition-colors">
      <Icon className="text-xl" />
      <span className="text-sm text-textParagraph">{text}</span>
    </button>
  )
}