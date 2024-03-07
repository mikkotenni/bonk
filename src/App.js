import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Gadget from "./components/Gadget";

const Header = styled.header`
  padding: 12px;
`;
const Navigation = styled.nav`
  display: flex;
  gap: 12px;
`;

function App() {
  return (
    <>
      <Header data-testid="app-header">Bonk</Header>
      <Router>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/gadget">Gadget</Link>
        </Navigation>
        <Routes>
          <Route path="/gadget" element={<Gadget />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
