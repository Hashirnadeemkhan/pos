
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardStats from "./components/Dashboard-stats"; // Homepage component
import AddRestaurantForm from "./components/AddRestaurantForm"; // Form component
import LoginForm from "./components/Loginform";
import EditRestaurantForm from "./components/EditRestaurantForm";

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
      </Routes>

    </Router>
  );
}

export default App;
