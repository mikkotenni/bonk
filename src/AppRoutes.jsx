import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gadgets from "./components/Gadgets";

const NotFound = () => <p>Oopsy Daisy! 404 Not Found</p>;

/**
 * AppRoutes component
 * @description Connects the routes and corresponding view components.
 * @returns {JSX.Element}
 */
const AppRoutes = () => (
  <Routes>
    <Route path="/gadgets" element={<Gadgets />} />
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;