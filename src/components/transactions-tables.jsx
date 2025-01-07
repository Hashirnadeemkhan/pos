import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const restaurantData = [
  {
    image: "/spice.jpeg",
    name: "The Spice Room",
    email: "spiceroom@gmail.com",
    status: "Active",
  },
  {
    image: "/olive.jpeg",
    name: "Olive Garden",
    email: "olivegarden@gmail.com",
    status: "Inactive",
  },
  {
    image: "/sushi.jpeg",
    name: "Sushi Paradise",
    email: "sushiparadise@gmail.com",
    status: "Active",
  },
  {
    image: "/burger.webp",
    name: "Burger Haven",
    email: "burgerhaven@gmail.com",
    status: "Active",
  },
  {
    image: "/pasta.jpeg",
    name: "Pasta Palace",
    email: "pastapalace@gmail.com",
    status: "Inactive",
  },
  {
    image: "/spice.jpeg",
    name: "The Spice Room",
    email: "spiceroom@gmail.com",
    status: "Active",
  },
  {
    image: "/olive.jpeg",
    name: "Olive Garden",
    email: "olivegarden@gmail.com",
    status: "Inactive",
  },
  {
    image: "/sushi.jpeg",
    name: "Sushi Paradise",
    email: "sushiparadise@gmail.com",
    status: "Active",
  },
  {
    image: "/burger.webp",
    name: "Burger Haven",
    email: "burgerhaven@gmail.com",
    status: "Active",
  },
  {
    image: "/pasta.jpeg",
    name: "Pasta Palace",
    email: "pastapalace@gmail.com",
    status: "Inactive",
  },
];

export default function RestaurantsTable() {
  
 
  const [isModalOpen, setIsModalOpen] = useState(false);

 

  const handleDelete = () => {
    // Handle delete logic here
    setIsModalOpen(false); // Close the modal after deleting
   
  };


  return (
    <div className="bg-white rounded-lg shadow mt-10">
  {/* Header with Add Restaurant Button */}
  <div className="flex items-center justify-between py-6 px-2 lg:px-6 w-full">
    <h2 className="lg:text-xl text-lg font-semibold">Restaurants</h2>
    <Link to="/add-restaurant">
      <button
        className="bg-purple-500 text-white lg:px-5 py-2 rounded hover:bg-purple-600 px-3  text-sm"
      >
        Add Restaurant
      </button>
    </Link>
  </div>

  {/* Table */}
  <div className="overflow-x-auto"> {/* Enable full-width responsiveness */}
    <table className="w-full text-sm lg:text-base">
      <thead className="bg-gray-50 text-gray-600">
        <tr>
          <th className="py-4 px-3 lg:px-6 text-left font-medium">Image</th>
          <th className="py-4 px-3 lg:px-6 text-left font-medium">
            Restaurant Name
          </th>
          <th className="py-4 px-3 lg:px-6 text-left font-medium">Email</th>
          <th className="py-4 px-3 lg:px-6 text-left font-medium">
            Account Status
          </th>
          <th className="py-4 px-3 lg:px-6 text-left font-medium">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {restaurantData.map((restaurant, index) => (
          <tr key={index} className="text-gray-500 hover:bg-gray-50">
            <td className="py-4 px-3 lg:px-6">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
              />
            </td>
            <td className="py-4 px-3 lg:px-6">{restaurant.name}</td>
            <td className="py-4 px-3 lg:px-6">{restaurant.email}</td>
            <td
              className={`py-4 px-3 lg:px-6 font-medium ${
                restaurant.status === "Active"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {restaurant.status}
            </td>
            <td className="py-4 px-3 lg:px-6 flex space-x-5 items-center ">
              <Link to={"/view-restaurant"}>
                <button
                  className="text-green-500 hover:text-green-600"
                  title="View"
                >
                  <LuEye size={24}/>
                </button>
              </Link>
              <Link to={"/edit-restaurant"}>
                <button
                  className="text-blue-500 hover:text-blue-600"
                  title="Edit"
                >
                <AiOutlineEdit size={24} />
                </button>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-red-500 hover:text-red-600"
                title="Delete"
              >
                <MdDelete size={24}/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4">
          Are you sure you want to delete this restaurant?
        </h3>
        <div className="flex justify-between">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}

  {/* View All Button */}
  <div className="flex justify-center mt-6">
    <Link to={"/restaurant"}>
      <button className="bg-purple-500 lg:px-4 px-3 text-sm py-2 rounded-sm text-white hover:bg-purple-600 mb-5">
        View All Restaurants
      </button>
    </Link>
  </div>
</div>


  );
}
