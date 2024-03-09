import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";

const Header = styled.header`
  padding: 12px 12px 0;
  font-weight: bold;
`;
const Navigation = styled.nav`
  padding: 12px 12px 0;
  display: flex;
  gap: 12px;
  & > a {
    color: #4e91fd;
  }
`;
const Main = styled.main`
  padding: 12px;
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
