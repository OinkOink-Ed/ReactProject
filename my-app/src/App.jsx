import { Navbar, Container } from "react-bootstrap";
import ChoiseOfStep from "./ChoiseOfStep";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar      fixed     = "top" expand = "lg">
      <Container   className = "d-flex justify-content-center">
      <Navbar.Text className = "text-center">ГБУЗ "ГП №1" г.Сочи Запись на обучение</Navbar.Text>
        </Container>
      </Navbar>
      <ChoiseOfStep/>
    </>
  );
}

export default App;