import Sidebar from "./Sidebar"

import TransactionsTable from "./transactions-tables"
export default function DashboardStats() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
     
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Restaurants Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Total Restaurants</p>
                <h2 className="text-3xl font-bold mt-2">1,234</h2>
                <p className="text-green-500 text-sm mt-2">
                  +12% from last month
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 h-2 bg-emerald-50 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-3/4"></div>
            </div>
          </div>

          {/* Active Accounts Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Active Accounts</p>
                <h2 className="text-3xl font-bold mt-2">892</h2>
                <p className="text-green-500 text-sm mt-2">
                  +5% from last month
                </p>
              </div>
              <div className="bg-violet-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 h-2 bg-violet-50 rounded-full overflow-hidden">
              <div className="h-full bg-violet-500 rounded-full w-4/5"></div>
            </div>
          </div>

          {/* Deactivated Accounts Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Deactivated Accounts</p>
                <h2 className="text-3xl font-bold mt-2">156</h2>
                <p className="text-red-500 text-sm mt-2">
                  +2% from last month
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 h-2 bg-red-50 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full w-1/4"></div>
            </div>
          </div>
        </div>
        <TransactionsTable/>
      </div>
    </div>
  )
}

