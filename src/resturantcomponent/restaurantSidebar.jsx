import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

export default function RestaurantSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div>
      {/* Mobile Hamburger Menu - Moved slightly lower */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 text-gray-700 focus:outline-none absolute top-4 right-4 z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-64 lg:block w-full bg-gray-100 border-r flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden lg:block"
        } relative h-screen`}
      >
        {/* Logo */}
        <div className="p-6">
          <img src="/logo1.png" className="w-20 ml-12"  alt="logo" />
        </div>

        {/* Navigation */}
        <div className="flex flex-col flex-1 px-4 space-y-1">
          {/* Dashboard */}
          <NavLink
            to="/restaurant-panel"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <svg
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Dashboard
          </NavLink>

          {/* Inventory */}
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 2C6.89543 2 6 2.89543 6 4V20M18 2C19.1046 2 20 2.89543 20 4V20M12 8H4M20 8H12M9 22H15"
              />
            </svg>
            <span>Inventory</span>
          </NavLink>

          {/* checkout */}
          <NavLink
            to="/checkout-form"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 2C6.89543 2 6 2.89543 6 4V20M18 2C19.1046 2 20 2.89543 20 4V20M12 8H4M20 8H12M9 22H15"
              />
            </svg>
            <span>Checkout</span>
          </NavLink>

          {/* Settings Heading */}
          <div className="flex items-center px-10 font-medium text-sm text-gray-800 justify-start py-3 rounded-lg">
            Settings
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center justify-between text-gray-700 px-4 py-3 hover:bg-gray-50 rounded-lg w-full"
            >
              <span className="flex items-center gap-3 pl-1">
                <CgProfile size={20} />
                Profile
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isProfileOpen && (
              <div className="ml-6 mt-1 space-y-1">
                <div className="flex items-center">
                  <FaUserEdit />
                  <NavLink
                    to="/edit-profile"
                    className={({ isActive }) =>
                      `block text-gray-700 px-4 py-2 text-sm rounded-lg ${
                        isActive ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
                      }`
                    }
                  >
                    Manage Profile
                  </NavLink>
                </div>

                <div className="flex items-center">
                  <IoMdLogOut className="text-red-500 font-bold" />
                  <NavLink
                    to="/login-form"
                    className={({ isActive }) =>
                      `text-red-500 px-4 py-4 ${
                        isActive ? "font-semibold" : ""
                      }`
                    }
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

