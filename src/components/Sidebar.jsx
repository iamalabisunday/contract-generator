import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";
import {
  LuLayoutGrid,
  LuFileText,
  LuFile,
  LuPenLine,
  LuHistory,
  LuWallet,
  LuLayoutDashboard,
  LuInfo,
  LuSearch,
  LuCommand,
  LuChevronRight,
} from "react-icons/lu";

export default function Sidebar() {
  const location = useLocation();

  const mainMenu = [
    { name: "Overview", path: "/overview", icon: LuLayoutGrid },
    { name: "Contracts", path: "/contracts", icon: LuFileText },
    { name: "Templates", path: "/templates", icon: LuFile },
    { name: "Signature", path: "/signature", icon: LuPenLine },
    { name: "History", path: "/history", icon: LuHistory },
    { name: "Billing", path: "/billing", icon: LuWallet },
  ];

  const userPreference = [
    { name: "User Account", path: "/account", icon: LuLayoutDashboard },
    { name: "Settings", path: "/settings", icon: LuFileText },
    { name: "Help & Support", path: "/support", icon: LuInfo },
  ];

  const NavItem = ({ item }) => {
    const isActive =
      location.pathname === item.path ||
      (item.path !== "/" && location.pathname.startsWith(item.path));
    const Icon = item.icon;

    return (
      <Link
        to={item.path}
        className={`ml-4 flex items-center gap-3 pl-2 pr-4 py-2.5 mr-4 my-1 rounded-r-lg font-medium transition-colors border-l-2 ${isActive
          ? "text-primary bg-primaryLighter border-primary"
          : "text-textBody border-transparent hover:bg-backgroundSecondary"
          }`}
      >
        <Icon className="text-xl" />
        <span className="text-[15px]">{item.name}</span>
      </Link>
    );
  };

  return (
    <aside className="w-[260px] h-screen bg-background border-r border-borderLight flex flex-col py-6 shadow-sm">
      <div className="px-6 mb-8">
        <Link to="/">
          <img src={Logo} alt="Quickdraft" className="h-8" />
        </Link>
      </div>

      <div className="px-6 mb-8">
        <label className="flex items-center gap-2 bg-background border border-borderLight rounded-lg px-3 py-2 text-textBody focus-within:border-primary focus-within:ring-1 focus-within:ring-primaryLight transition-all cursor-text">
          <LuSearch className="text-lg text-textBody min-w-[18px]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-sm placeholder:text-textBody text-textHeader"
          />
          <div className="flex items-center gap-1 bg-backgroundSecondary border border-borderLight px-1.5 py-0.5 rounded text-xs text-textParagraph ml-auto">
            <LuCommand className="text-[10px]" />
            <span className="font-medium text-[10px]">K</span>
          </div>
        </label>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="mb-8">
          <p className="ml-1 px-6 text-sm text-textBody mb-2 font-medium">Main Menu</p>
          <nav className="flex flex-col">
            {mainMenu.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </nav>
        </div>

        <div>
          <p className="ml-1 px-6 text-sm text-textBody mb-2 font-medium">User Preference</p>
          <nav className="flex flex-col">
            {userPreference.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-auto px-6 pt-6 border-t border-borderLighter">
        <div className="flex items-center justify-between cursor-pointer hover:bg-backgroundSecondary p-2 -mx-2 rounded-xl transition-colors group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primaryLighter text-primary flex items-center justify-center font-medium text-sm">
              JA
            </div>
            <div className="flex flex-col max-w-[140px] gap-1">
              <span className="text-sm font-medium text-textParagraph leading-tight truncate">
                Joseph Adebayo
              </span>
              <span className="text-xs text-textBody font-light truncate">josehph49@gmail.com</span>
            </div>
          </div>
          <LuChevronRight className="text-textBody group-hover:text-primary transition-colors" />
        </div>
      </div>
    </aside>
  );
}
