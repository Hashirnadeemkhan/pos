import { useState } from "react";
import RestaurantSidebar from "./restaurantSidebar";

const CheckoutEdit = () => {
  const [formData, setFormData] = useState({
    customerName: "John Doe",
    phoneNumber: "123-456-7890",
    product: "Laptop",
    category: "Electronics",
    price: "$1200",
    taxIncluded: "10%",
    paymentMethod: "Credit Card",
    checkoutTime: "2025-01-08 10:30 AM",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated Checkout Data:", formData);
    alert("Changes saved successfully!");
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <RestaurantSidebar />
      <div className="flex-1 p-4 lg:p-6 mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 lg:max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-10">Edit Checkout</h2>

          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Customer Name */}
            <div>
              <label className="block text-gray-600 mb-2">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                placeholder="Enter customer name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-600 mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Enter phone number"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Product */}
            <div>
              <label className="block text-gray-600 mb-2">Product</label>
              <input
                type="text"
                name="product"
                value={formData.product}
                placeholder="Enter product name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-600 mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                placeholder="Enter category"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                placeholder="Enter price"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Tax Included */}
            <div>
            <label className="block text-gray-600 mb-2">Tax Included</label>
              <input
                type="text"
                name="price"
                value={formData.taxIncluded}
                placeholder="Enter price"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-600 mb-2">Payment Method</label>
              <input
                type="text"
                name="paymentMethod"
                value={formData.paymentMethod}
                placeholder="Enter payment method"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Checkout Time */}
            <div>
              <label className="block text-gray-600 mb-2">Checkout Time</label>
              <input
                type="text"
                name="checkoutTime"
                value={formData.checkoutTime}
                placeholder="Enter checkout time"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </form>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutEdit;
