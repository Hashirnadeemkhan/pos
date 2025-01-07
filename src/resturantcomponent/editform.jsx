import { useState } from "react";
import RestaurantSidebar from "./restaurantSidebar";

const EditProductForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    status: "available",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product Name is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.price.trim() || isNaN(Number(formData.price)))
      newErrors.price = "Valid Price is required.";
    if (!formData.image) newErrors.image = "Product Image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Product updated successfully!");
      // Redirect to product page
      window.location.href = '/products';
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <RestaurantSidebar />
      <div className="flex-1 p-4 lg:p-6 mt-5">
        <div className="lg:max-w-5xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex-1 mt-10 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Edit Product</h2>
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-600 mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter product category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter product price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
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

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductForm;

