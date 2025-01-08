import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import { TiPrinter } from "react-icons/ti";
import RestaurantSidebar from "./restaurantSidebar";

const checkoutHistory = [
  {
    customerName: "John Doe",
    phoneNumber: "123-456-7890",
    product: "Laptop",
    category: "Electronics",
    price: "$1200",
    taxIncluded: "Yes",
    paymentMethod: "Credit Card",
    checkoutTime: "2025-01-08 10:30 AM",
  },
  {
    customerName: "Jane Smith",
    phoneNumber: "987-654-3210",
    product: "Office Chair",
    category: "Furniture",
    price: "$300",
    taxIncluded: "No",
    paymentMethod: "PayPal",
    checkoutTime: "2025-01-08 11:45 AM",
  },
  {
    customerName: "Alice Johnson",
    phoneNumber: "555-123-4567",
    product: "Smartphone",
    category: "Electronics",
    price: "$800",
    taxIncluded: "Yes",
    paymentMethod: "Debit Card",
    checkoutTime: "2025-01-08 01:15 PM",
  },
];

export default function CheckoutHistoryTable() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Header */}
      <RestaurantSidebar/>
      <div className="flex-1 p-6 mt-5">
      <div className="bg-white rounded-lg shadow mt-5">
        <div className="flex items-center justify-between py-6 px-2 lg:px-6 w-full">
        <h2 className="lg:text-xl text-lg font-semibold">Checkouts</h2>
          <Link to="/checkout-form">
      <button
        className="bg-purple-500 text-white lg:px-5 py-2 rounded hover:bg-purple-600 px-3  text-sm"
      >
        Add checkout
      </button>
    </Link>
        </div>

      {/* Table */}
      <div className="overflow-x-auto"> {/* Enable full-width responsiveness */}
        <table className="w-full text-sm lg:text-base">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Customer Name</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Phone Number</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Product</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Category</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Price</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Tax Included</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Payment Method</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Checkout Time</th>
              <th className="py-4 px-3 lg:px-6 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {checkoutHistory.map((entry, index) => (
              <tr key={index} className="text-gray-500 hover:bg-gray-50">
                <td className="py-4 px-3 lg:px-6">{entry.customerName}</td>
                <td className="py-4 px-3 lg:px-6">{entry.phoneNumber}</td>
                <td className="py-4 px-3 lg:px-6">{entry.product}</td>
                <td className="py-4 px-3 lg:px-6">{entry.category}</td>
                <td className="py-4 px-3 lg:px-6">{entry.price}</td>
                <td className="py-4 px-3 lg:px-6">{entry.taxIncluded}</td>
                <td className="py-4 px-3 lg:px-6">{entry.paymentMethod}</td>
                <td className="py-4 px-3 lg:px-6">{entry.checkoutTime}</td>
                <td className="py-4 px-3 lg:px-6 flex space-x-5 items-center">
                  <Link to="/view-checkout">
                    <button
                      className="text-green-500 hover:text-green-600"
                      title="View"
                    >
                      <LuEye size={24} />
                    </button>
                  </Link>
                  <Link to="/edit-checkout">
                    <button
                      className="text-blue-500 hover:text-blue-600"
                      title="Edit"
                    >
                      <AiOutlineEdit size={24} />
                    </button>
                  </Link>
                  <button
                    className="text-purple-500 hover:text-purple-600"
                    title="Print"
                  >
                    <TiPrinter size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}
