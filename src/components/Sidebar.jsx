import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Manage sidebar visibility

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Mobile Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 text-gray-700 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-64 lg:block w-full bg-white border-r flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden lg:block"
        }`}
      >
        {/* Logo */}
        <div className="p-6">
          <img src="/logo-dark.png" alt="logo" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {/* Dashboard */}
          <div className="bg-purple-50 rounded-lg">
            <Link to="/" className="flex items-center gap-3 text-purple-600 px-4 py-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Dashboard
            </Link>
          </div>

          {/* Starter Pages */}
          <Link to="#" className="flex items-center gap-3 text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
            </svg>
            <span>Starter Pages</span>
          </Link>

          {/* Elements Section */}
          <div className="pt-4">
            <p className="px-4 text-sm font-medium text-gray-400">Elements</p>

            {/* Components */}
            <Link to="#" className="flex items-center justify-between text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Components</span>
              </div>
            </Link>

            {/* Forms */}
            <Link to="#" className="flex items-center justify-between text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Forms</span>
              </div>
            </Link>

            {/* Maps */}
            <Link to="#" className="flex items-center gap-3 text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Maps</span>
            </Link>

            {/* Tables */}
            <Link to="#" className="flex items-center gap-3 text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Tables</span>
            </Link>

            {/* Chart */}
            <Link to="#" className="flex items-center gap-3 text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Chart</span>
            </Link>

            {/* Icons */}
            <Link to="#" className="flex items-center gap-3 text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Icons</span>
            </Link>

            {/* Buttons */}
            <Link to="#" className="flex items-center gap-3 text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4v16m8-8H5" />
              </svg>
              <span>Buttons</span>
            </Link>

            {/* Modals */}
            <Link to="#" className="flex items-center gap-3 text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 10V3a1 1 0 011-1h10a1 1 0 011 1v7m-9 3v6a1 1 0 001 1h6a1 1 0 001-1v-6" />
              </svg>
              <span>Modals</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
