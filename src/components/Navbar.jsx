import { FiSearch, FiBell } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 w-full border-b border-backgroundTertiary">
      {/* Search Bar */}
      <div className="relative flex items-center w-[380px] text-gray-400">
        <FiSearch className="absolute left-4 w-5 h-5" />
        <input
          type="text"
          placeholder="Search or type contract"
          className="w-full pl-11 pr-4 py-2.5 bg-backgroundSecondary text-sm text-gray-800 placeholder-gray-400 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#7731FF]/50 transition-all"
        />
      </div>

      {/* Right Content */}
      <div className="flex items-center gap-7">
        <button className="cursor-pointer px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primaryDarker active:scale-95 transition-all shadow-sm">
          Generate Contract
        </button>

        <button className="cursor-pointer relative p-1 text-gray-700 hover:text-gray-900 transition-colors">
          <FiBell className="w-5 h-5" />
          <span className="absolute top-0.5 right-1.5 w-2 h-2 bg-[#E4D4FF] rounded-full"></span>
        </button>

        <button className="rounded-full overflow-hidden border border-gray-100 hover:ring-2 hover:ring-[#7731FF]/20 transition-all">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User profile"
            className="w-10 h-10 object-cover"
          />
        </button>
      </div>
    </nav>
  );
}
