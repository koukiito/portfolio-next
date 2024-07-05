import { useState } from "react";
import Link from "next/link";
import { contents } from "../data/contents";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">
            {contents.siteName}
          </Link>
          <div className="hidden md:flex space-x-8">
            {contents.navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {contents.navigation.map((item) => (
                <NavLink key={item.name} href={item.href} mobile>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}> = ({ href, children, mobile }) => {
  const baseClasses =
    "text-gray-600 hover:text-gray-900 transition-colors duration-200";
  const mobileClasses = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium"
    : "";

  return (
    <Link href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </Link>
  );
};

export default Navigation;
