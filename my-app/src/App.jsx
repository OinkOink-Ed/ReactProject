import { Navbar, Container } from "react-bootstrap";
import FunctionalConteiner from "./FunctionalConteiner";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container className="d-flex justify-content-center">
          <Navbar.Text className="text-center">ГБУЗ "ГП №1" г.Сочи Запись на обучение</Navbar.Text>
        </Container>
      </Navbar>
      <FunctionalConteiner />
      <Navbar fixed="bottom" expand="lg">
        <Container className="d-flex justify-content-center">
          <Navbar.Text className="text-center">По вопросам предложений и улучшений обращаться по номеру: 8-952-836-06-42</Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default App;