import styled from 'styled-components';

const Header = styled.header`
  padding: 12px;
`

function App() {
  return (
    <Header data-testid="app-header">
      Bonk
    </Header>
  );
}

export default App;
