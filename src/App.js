import { Button, ButtonLabel } from "./Components/Button.style";
import { AppContainer } from './Components/Container.styled';
function App() {
  return(
  <AppContainer>
    <Button backgroundColor="green">
      {" "}
      <ButtonLabel>Hello World</ButtonLabel>{" "}
      </Button>
    <Button backgroundColor="violent">Click the buttpn</Button>
    <Button backgroundColor="blue">Hello Button</Button>
  </AppContainer>
  );
}
export default App