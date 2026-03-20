import { Link } from "react-router-dom";
import { IoLogoLinkedin, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-backgroundBlack py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-light text-xl">
                Q
              </div>
              <span className="text-xl font-medium text-white tracking-wide">
                Quickdraft
              </span>
            </div>
            <p className="text-white/80 font-light tracking-wide">
              Professional contracts made simple
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <IoLogoLinkedin className="text-[1.35rem]" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <IoLogoInstagram className="text-[1.35rem]" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <IoLogoFacebook className="text-[1.35rem]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link to="/legal" className="px-4 py-1.5 rounded-full border border-white/15 text-white/80 text-[13px] font-light hover:bg-white/5 transition-colors">
              Legal Disclaimer
            </Link>
            <Link to="/privacy" className="px-4 py-1.5 rounded-full border border-white/15 text-white/80 text-[13px] font-light hover:bg-white/5 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="px-4 py-1.5 rounded-full border border-white/15 text-white/80 text-[13px] font-light hover:bg-white/5 transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-white/80 text-sm font-light tracking-wide">
            © 2026 Quickdraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
