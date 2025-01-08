
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardStats from "./components/Dashboard-stats"; // Homepage component
import AddRestaurantForm from "./components/AddRestaurantForm"; // Form component
import LoginForm from "./components/Loginform";
import EditRestaurantForm from "./components/EditRestaurantForm";
import Restaurant from "./components/Restaurant";
import ViewRestaurant from "./components/ViewRestaurant";
import Profile from "./components/Profile";
import Dashboard from "./pages/restaurant-panel/Dashboard";
import Inventory from "./resturantcomponent/inventory";
import ViewProduct from "./resturantcomponent/viewProduct";
import AddProductForm from "./resturantcomponent/addproduct";
import EditProductForm from "./resturantcomponent/editform";
import CheckoutForm from "./resturantcomponent/checkoutform";
import EditProfile from "./resturantcomponent/productProfile";
import CheckoutHistoryTable from "./resturantcomponent/checkout_table";
import CheckoutEdit from "./resturantcomponent/editCheckoutForm";
import CheckoutView from "./resturantcomponent/viewCheckoutform";


function App() {
  return (
    <Router>
      {/* Routes Setup */}
      <Routes>
        {/* DashboardStats is the homepage */}
        <Route path="/" element={<DashboardStats />} />
        
        {/* Add Restaurant form page */}
        <Route path="/edit-restaurant" element={<EditRestaurantForm  />} />

        {/* Add Restaurant form page */}
        <Route path="/add-restaurant" element={<AddRestaurantForm />} />

        {/* login form */}
        <Route path="/login-form" element={<LoginForm/>} />

        {/* restaurant */}
        <Route path="/restaurant" element={<Restaurant/>} />

        {/*view  restaurant */}
        <Route path="/view-restaurant" element={<ViewRestaurant/>} />
        
        {/*profile*/}
        <Route path="/profile" element={<Profile/>} />



{/* Restaurant panel pages */}

        <Route path="/restaurant-panel" element={<Dashboard/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/view-product" element={<ViewProduct/>} />
        <Route path="/add-product" element={<AddProductForm/>} />
        <Route path="/edit-product" element={<EditProductForm/>} />
        <Route path="/checkout-form" element={<CheckoutForm/>} />
        <Route path="/view-checkout" element={< CheckoutView/>} />
        <Route path="/edit-checkout" element={< CheckoutEdit/>} />
        <Route path="/checkout-historyTable" element={<CheckoutHistoryTable/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />


      </Routes>

    </Router>
  );
}

export default App;
