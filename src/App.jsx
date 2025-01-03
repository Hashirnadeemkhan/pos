
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardStats from "./components/Dashboard-stats"; // Homepage component
import AddRestaurantForm from "./components/AddRestaurantForm"; // Form component
import LoginForm from "./components/Loginform";
import EditRestaurantForm from "./components/EditRestaurantForm";
import Restaurant from "./components/Restaurant";
import ViewRestaurant from "./components/ViewRestaurant";
import Profile from "./components/Profile";

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
      </Routes>

    </Router>
  );
}

export default App;
