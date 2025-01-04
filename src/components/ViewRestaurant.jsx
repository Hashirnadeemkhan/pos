"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";


const ViewRestaurantForm = () => {
  const [formData] = useState({
    restaurantName: "Spicy Hub",
    email: "spicyhub@example.com",
    ownerName: "John Doe",
    location: "123 Food Street",
    number: "1234567890",
    handlerContact: "0987654321",
    restaurantType: "Fast Food",
    accountStatus: "active",
  });

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100">
      <Sidebar />
      <div className="lg:max-w-5xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex-1  mt-5 mb-5">
        <h2 className="text-2xl font-semibold text-gray-700 mt-2 mb-10">View Restaurant</h2>

        <img src="/spice.jpeg" className="w-32 h-32 rounded-full mb-10" alt="spice" />
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Restaurant Name */}
          <div>
            <label className="block text-gray-600 mb-2">Restaurant Name</label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Number */}
          <div>
            <label className="block text-gray-600 mb-2">Number</label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-gray-600 mb-2">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-600 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Handler Contact */}
          <div>
            <label className="block text-gray-600 mb-2">Handler Contact</label>
            <input
              type="tel"
              name="handlerContact"
              value={formData.handlerContact}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Restaurant Type */}
          <div>
            <label className="block text-gray-600 mb-2">Restaurant Type</label>
            <input
              type="text"
              name="restaurantType"
              value={formData.restaurantType}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Account Status */}
          <div>
            <label className="block text-gray-600 mb-2">Account Status</label>
            <select
              name="accountStatus"
              value={formData.accountStatus}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            >
              <option value="active">Active</option>
              <option value="de-active">De-active</option>
            </select>
          </div>
        </form>
      </div>
    </div >
  );
};

export default ViewRestaurantForm;
