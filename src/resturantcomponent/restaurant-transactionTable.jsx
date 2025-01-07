import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";

const inventoryData = [
  {
    image: "/spice.jpeg",
    name: "Fresh Apples",
    category: "Fruits",
    price: "$5.00",
    status: "Not-Available",
  },
  {
    image: "/olive.jpeg",
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: "$2.50",
    status: "Not-Available",
  },
  {
    image: "/sushi.jpeg",
    name: "Milk Bottle",
    category: "Dairy",
    price: "$1.75",
    status: "Available",
  },
  {
    image: "/burger.webp",
    name: "Tomato Ketchup",
    category: "Condiments",
    price: "$3.25",
    status: "Available",
  },
  {
    image: "/pasta.jpeg",
    name: "Pasta Pack",
    category: "Groceries",
    price: "$4.00",
    status: "Available",
  },
  {
    image: "/spice.jpeg",
    name: "Fresh Apples",
    category: "Fruits",
    price: "$5.00",
    status: "Not-Available",
  },
  {
    image: "/olive.jpeg",
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: "$2.50",
    status: "Not-Available",
  },
  {
    image: "/sushi.jpeg",
    name: "Milk Bottle",
    category: "Dairy",
    price: "$1.75",
    status: "Available",
  },
  {
    image: "/burger.webp",
    name: "Tomato Ketchup",
    category: "Condiments",
    price: "$3.25",
    status: "Available",
  },
  {
    image: "/pasta.jpeg",
    name: "Pasta Pack",
    category: "Groceries",
    price: "$4.00",
    status: "Available",
  },
];

export default function DataTables() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = () => {
    console.log(`Deleting item: ${selectedItem.name}`);
    setIsModalOpen(false);
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow mt-5">
        <div className="flex items-center justify-between py-6 px-2 lg:px-6 w-full">
          <h2 className="lg:text-xl text-lg font-semibold">Inventory</h2>
          <Link to="/add-product">
      <button
        className="bg-purple-500 text-white lg:px-5 py-2 rounded hover:bg-purple-600 px-3  text-sm"
      >
        Add Product
      </button>
    </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm lg:text-base">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="py-4 px-3 lg:px-6 text-left font-medium">Image</th>
                <th className="py-4 px-3 lg:px-6 text-left font-medium">Product Name</th>
                <th className="py-4 px-3 lg:px-6 text-left font-medium">Category</th>
                <th className="py-4 px-3 lg:px-6 text-left font-medium">Price</th>
                <th className="py-4 px-3 lg:px-6 text-left font-medium">Status</th>
                <th className="py-4 px-3 lg:px-6 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inventoryData.map((item, index) => (
                <tr key={index} className="text-gray-500 hover:bg-gray-50">
                  <td className="py-4 px-3 lg:px-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                    />
                  </td>
                  <td className="py-4 px-3 lg:px-6">{item.name}</td>
                  <td className="py-4 px-3 lg:px-6">{item.category}</td>
                  <td className="py-4 px-3 lg:px-6">{item.price}</td>
                  <td
                    className={`py-4 px-3 lg:px-6 font-medium ${
                      item.status === "Available"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="py-4 px-3 lg:px-6 flex space-x-5 items-center">
                       <Link to={"/view-product"}>
                                    <button
                                      className="text-green-500 hover:text-green-600"
                                      title="View"
                                    >
                                      <LuEye size={24}/>
                                    </button>

                         </Link>
                         <Link to={"/edit-product"}>
                    <button
                      className="text-blue-500 hover:text-blue-600"
                      title="Edit"
                    >
                      <AiOutlineEdit size={24} />
                    </button>
                  </Link>
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="text-red-500 hover:text-red-600"
                      title="Delete"
                    >
                      <MdDelete size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{selectedItem.name}</span>?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
       {/* View All Button */}
  <div className="flex justify-center mt-6">
    <Link to={"/restaurant"}>
      <button className="bg-purple-500 lg:px-4 px-3 text-sm py-2 rounded-sm text-white hover:bg-purple-600 mb-5">
       Manage Inventory
      </button>
    </Link>
  </div>
    </div>

  );
}
