import { useState } from "react";
import RestaurantSidebar from "./restaurantSidebar";

const ViewProduct = () => {
  const [formData] = useState({
    image: "/spice.jpeg",
    name: "Burger Meal",
    category: "Fast Food",
    price: "$15",
    status: "available",
  });

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <RestaurantSidebar />
      <div className="flex-1 p-4 lg:p-6 mt-10">
        <div className="lg:max-w-5xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex-1 mt-5 mb-5">
          <h2 className="text-2xl font-semibold text-gray-700 mt-2 mb-10">View Product</h2>

          {/* Product Image */}
          <img
            src={formData.image}
            className="w-32 h-32 rounded-full mb-10 object-cover"
            alt="product"
          />

          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Product Name */}
            <div>
              <label className="block text-gray-600 mb-2">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-600 mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-600 mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
