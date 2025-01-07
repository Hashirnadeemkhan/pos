import { useState } from "react";
import RestaurantSidebar from "./restaurantSidebar";

const AddProductForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    status: "available",
    image: null,
    timeCreated: "",
    timeUpdated: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === "file" ? e.target.files[0] : value;
    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName.trim()) newErrors.productName = "Product Name is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.price.trim() || isNaN(formData.price) || formData.price <= 0)
      newErrors.price = "Valid price is required.";
    if (!formData.image) newErrors.image = "Product Image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <RestaurantSidebar />
      <div className="flex-1 p-4 lg:p-6 mt-5">
        <div className="lg:max-w-5xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex-1 mt-10 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add Product</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Image Upload */}
            <div>
              <label className="block text-gray-600 mb-2">Product Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-gray-600 mb-2">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.productName && <p className="text-red-500 text-sm mt-1">{errors.productName}</p>}
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-600 mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-600 mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>
            </div>

            {/* Time Created */}
            <div>
              <label className="block text-gray-600 mb-2">Time of Creation</label>
              <input
                type="number"
                name="timeCreated"
                value={formData.timeCreated}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Time Updated */}
            <div>
              <label className="block text-gray-600 mb-2">Time of Update</label>
              <input
                type="number"
                name="timeUpdated"
                value={formData.timeUpdated}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
