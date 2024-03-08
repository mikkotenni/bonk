import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from "./AppRoutes";

const Header = styled.header`
  padding: 12px;
`;
const Navigation = styled.nav`
  display: flex;
  gap: 12px;
`;

const queryClient = new QueryClient();

/**
 * App component
 * @description The main application component with header and main navigation.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header data-testid="app-header">Bonk</Header>
      <Router>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/gadgets">Gadgets</Link>
        </Navigation>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
