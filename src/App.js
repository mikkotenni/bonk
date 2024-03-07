import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Header = styled.header`
  padding: 12px;
`;
const Navigation = styled.nav`
  display: flex;
  gap: 12px;
`;

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

function App() {
  return (
    <>
      <Header data-testid="app-header">Bonk</Header>
      <Router>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Navigation>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
