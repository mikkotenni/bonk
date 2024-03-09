import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Gadgets from "../components/Gadgets";
import NotFound from "../components/NotFound";

/**
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