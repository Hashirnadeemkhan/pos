import Sidebar from "./Sidebar";


const LoginForm = () => {
  return (
    <div className="flex flex-col lg:flex-row">
        <Sidebar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-1">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Basic Example</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              We will never share your email with anyone else.
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="checkbox" className="ml-2 text-sm text-gray-700">
              Check me out!
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
