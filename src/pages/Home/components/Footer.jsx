import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#16181D] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white font-bold">
                CG
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Contract Generator
                </div>
                <div className="mt-1 text-xs font-semibold text-white/60">
                  Generate professional contracts faster.
                </div>
              </div>
            </div>
            <div className="mt-5 text-xs text-white/60">
              This is a landing-page draft. Replace copy and links with your
              final product details.
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-white/80">Product</div>
            <ul className="mt-4 space-y-2 text-xs text-white/60">
              <li>
                <Link to="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white/80">Account</div>
            <ul className="mt-4 space-y-2 text-xs text-white/60">
              <li>
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Contract Generator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}