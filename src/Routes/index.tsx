import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Tests from "../Pages/Tests";
import Menu from "../Pages/Menu";
import PageNotFound from "../Pages/PageNotFound";
import AboutUs from "../Pages/AboutUs";
import Contacts from "../Pages/Contacts";
import CustomerOrder from "../Pages/CustomerOrder";
import OrderDetails from "../Pages/OrderDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/customer-order" element={<CustomerOrder />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
