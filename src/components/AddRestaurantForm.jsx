"use client"
import { useState } from "react";
import Sidebar from "./Sidebar";

const AddRestaurantForm = () => {
    const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    restaurantName: "",
    email: "",
    password: "",
    ownerName: "",
    location: "",
    number: "",
    handlerContact: "",
    restaurantType: "",
    accountStatus: "active",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.restaurantName.trim()) newErrors.restaurantName = "Restaurant Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Email is required.";
    if (!formData.password.trim() || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.ownerName.trim()) newErrors.ownerName = "Owner Name is required.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.number.trim() || !/^\d{10}$/.test(formData.number))
      newErrors.number = "Valid 10-digit contact number is required.";
    if (!formData.restaurantType.trim()) newErrors.restaurantType = "Restaurant Type is required.";
    if (!formData.image) newErrors.image = "Restaurant Image is required.";

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
    <div className="flex flex-col lg:flex-row bg-gray-100">
      <Sidebar />
      <div className="lg:max-w-5xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex-1">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add Restaurant</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
         
         {/* Image Upload */}
         <div>
       <label className="block text-gray-600 mb-2">Restaurant Image</label>
       <input
         type="file"
         name="image"
         accept="image/*"
         onChange={handleChange}
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
       />
       {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
     </div>
      {/* Restaurant Name */}
      <div>
       <label className="block text-gray-600 mb-2">Restaurant Name</label>
       <input
         type="text"
         name="restaurantName"
         value={formData.restaurantName}
         onChange={handleChange}
         placeholder="Enter restaurant name"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         required
       />
     </div>

     {/* Email */}
     <div>
       <label className="block text-gray-600 mb-2">Email</label>
       <input
         type="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         placeholder="Enter email address"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         required
       />
     </div>

     {/* Password */}
     <div>
       <label className="block text-gray-600 mb-2">Password</label>
       <input
         type="password"
         name="password"
         value={formData.password}
         onChange={handleChange}
         placeholder="Enter password"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         required
       />
     </div>

     {/* Number */}
     <div>
       <label className="block text-gray-600 mb-2">Number</label>
       <input
         type="tel"
         name="number"
         value={formData.number}
         onChange={handleChange}
         placeholder="Enter contact number"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         required
       />
     </div>

     {/* Owner Name */}
     <div>
       <label className="block text-gray-600 mb-2">Owner Name</label>
       <input
         type="text"
         name="ownerName"
         value={formData.ownerName}
         onChange={handleChange}
         placeholder="Enter owner's name"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         required
       />
     </div>

     {/* Location */}
     <div>
       <label className="block text-gray-600 mb-2">Location</label>
       <input
         type="text"
         name="location"
         value={formData.location}
         onChange={handleChange}
         placeholder="Enter restaurant location"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         required
       />
     </div>

 

     {/* Handler Contact */}
     <div>
       <label className="block text-gray-600 mb-2">Handler Contact</label>
       <input
         type="tel"
         name="handlerContact"
         value={formData.handlerContact}
         onChange={handleChange}
         placeholder="Enter handler contact"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
       />
     </div>

     {/* Restaurant Type */}
     <div>
       <label className="block text-gray-600 mb-2">Restaurant Type</label>
       <input
         type="text"
         name="restaurantType"
         value={formData.restaurantType}
         onChange={handleChange}
         placeholder="e.g., Fast Food, Café"
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         required
       />
     </div>

     {/* Account Status */}
     <div>
       <label className="block text-gray-600 mb-2">Account Status</label>
       <select
         name="accountStatus"
         value={formData.accountStatus}
         onChange={handleChange}
         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
       >
         <option value="active">Active</option>
         <option value="de-active">De-active</option>
       </select>
     </div>

     {/* Submit Button */}
     <div className="md:col-span-2">
       <button
         type="submit"
         className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-blue-300"
       >
     Update
       </button>
     </div>
   </form>

     
      </div>

      
    </div>
  );
};

export default AddRestaurantForm;
