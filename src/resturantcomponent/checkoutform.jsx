import { useState } from "react";
import RestaurantSidebar from "./restaurantSidebar";

const CheckoutForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    product: "",
    productCategory: "",
    quantity: "",
    price: "",
    taxInclusion: false,
    paymentMethod: "cash",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = "Customer Name is required.";
    if (!formData.phoneNumber.trim() || !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Valid 10-digit phone number is required.";
    if (!formData.product.trim()) newErrors.product = "Product is required.";
    if (!formData.productCategory.trim()) newErrors.productCategory = "Product Category is required.";
    if (!formData.quantity.trim() || isNaN(Number(formData.quantity)))
      newErrors.quantity = "Valid Quantity is required.";
    if (!formData.price.trim() || isNaN(Number(formData.price)))
      newErrors.price = "Valid Price is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Checkout completed successfully!");
      // Redirect to checkout page
      window.location.href = '/checkout';
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <RestaurantSidebar />
      <div className="flex-1 p-4 lg:p-6 mt-5">
        <div className="lg:max-w-5xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex-1 mt-10 mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Checkout</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Customer Name */}
            <div>
              <label className="block text-gray-600 mb-2">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter customer name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.customerName && <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Product */}
            <div>
              <label className="block text-gray-600 mb-2">Product</label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
            </div>

            {/* Product Category */}
            <div>
              <label className="block text-gray-600 mb-2">Product Category</label>
              <input
                type="text"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                placeholder="Enter product category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.productCategory && <p className="text-red-500 text-sm mt-1">{errors.productCategory}</p>}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-gray-600 mb-2">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-600 mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>

            {/* Tax Inclusion */}
            <div>
              <label className="flex items-center text-gray-600 mb-2">Tax Inclusion </label>
                <input
                  type="text"
                  name="taxInclusion"
                  checked={formData.taxInclusion}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-600 mb-2">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="cash">Cash</option>
                <option value="online">Online</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Save and Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

