


const LoginForm = () => {
  return (
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-1 px-5">
      <div className="w-full max-w-xl  bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Login</h2>
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
         Remember me
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
   
  );
};

export default LoginForm;
