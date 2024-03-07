import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

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
        <AppRoutes />
    </Router>
    </>
  );
}

export default App;
