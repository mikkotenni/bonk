import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";

const Header = styled.header`
  font-size: 1.25rem;
  padding: 1rem;
  font-weight: bold;
  background-color: #f1efee;
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: #e9e7e6 1px solid;
`;
const Navigation = styled.nav`
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: #f1efee;
  border-top: #e7e5e4 1px solid;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  & > a {
    color: #4e91fd;
    text-decoration: none;
  }
`;
const Main = styled.main`
  margin-top: 1rem;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

/**
 * App component
 * @description The main application component with header and main navigation.
 * @returns {JSX.Element}
 */
function App({ mainNavigationItems }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header data-testid="header">🚀 Bonk</Header>
      <Router>
        <Navigation>
          {mainNavigationItems.map(({ id, label, path }) => (
            <Link key={id} to={path}>
              {label}
            </Link>
          ))}
        </Navigation>
        <Main>
          <AppRoutes />
        </Main>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
