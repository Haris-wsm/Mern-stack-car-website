import './App.css';
import styled from 'styled-components';
import HomePage from './app/containers/HomePage';
import tw from 'twin.macro';
import Navbar from './app/components/navbar';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
`}
`;

function App() {
  return (
    <AppContainer>
      <HomePage></HomePage>
    </AppContainer>
  );
}
export default App;
