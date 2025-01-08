import { useState } from "react";
import RestaurantSidebar from "./restaurantSidebar";

const CheckoutView = () => {
  const [formData] = useState({
    customerName: "John Doe",
    phoneNumber: "123-456-7890",
    product: "Laptop",
    category: "Electronics",
    price: "$1200",
    taxIncluded: "10%",
    paymentMethod: "Credit Card",
    checkoutTime: "2025-01-08 10:30 AM",
  });

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
  <RestaurantSidebar />
  <div className="flex-1 flex items-center justify-center p-4 lg:p-6 lg:mt-0 mt-12">
    <div className="bg-white rounded-lg shadow-md p-6 lg:max-w-5xl w-full mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-10">Checkout View</h2>

      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Customer Name */}
        <div>
          <label className="block text-gray-600 mb-2">Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-600 mb-2">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Product */}
        <div>
          <label className="block text-gray-600 mb-2">Product</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
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
           disabled
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
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Checkout Time */}
        <div>
          <label className="block text-gray-600 mb-2">Checkout Time</label>
          <input
            type="text"
            name="checkoutTime"
            value={formData.checkoutTime}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default CheckoutView;
