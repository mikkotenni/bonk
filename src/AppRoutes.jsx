import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gadget from "./components/Gadget";

const NotFound = () => <div>Whoopsie! 404 Not Found</div>;

/**
 * AppRoutes component
 * @description Connects the routes with corresponding view components.
 * @returns {JSX.Element}
 */
const AppRoutes = () => (
  <Routes>
    <Route path="/gadget" element={<Gadget />} />
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;