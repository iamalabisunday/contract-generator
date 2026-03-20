import { Link, Outlet } from "react-router-dom";

export default function HomeNavbar() {
  // #region agent log
  fetch('http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'b717b5' }, body: JSON.stringify({ sessionId: 'b717b5', runId: 'pre-debug', hypothesisId: 'H_homenavbar_nested_outlet', location: 'src/pages/Home/components/HomeNavbar/index.jsx', message: 'HomeNavbar function invoked', data: {}, timestamp: Date.now() }) }).catch(() => {});
  // #endregion
  return (
    <div className="min-h-screen bg-[#F7F5FF]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6733ff]/10 text-[#6733ff] font-bold">
              CG
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold text-[#16181D]">Contract Generator</div>
              <div className="text-xs text-[#7D7F81]">Generate professional contracts</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <Link className="text-sm font-semibold text-[#323334] hover:text-[#6733ff]" to="/login">
              Login
            </Link>
            <Link className="text-sm font-semibold text-[#323334] hover:text-[#6733ff]" to="/signup">
              Sign up
            </Link>
            <Link
              className="inline-flex items-center rounded-full bg-[#6733ff] px-5 py-2 text-sm font-semibold text-white hover:bg-[#3400cc]"
              to="/dashboard"
            >
              Try Free Contract
            </Link>
          </nav>

          <div className="md:hidden">
            <Link
              className="inline-flex items-center rounded-full bg-[#6733ff] px-4 py-2 text-sm font-semibold text-white"
              to="/dashboard"
            >
              Try Free
            </Link>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
