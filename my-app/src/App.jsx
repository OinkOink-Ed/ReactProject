import { Navbar, Container } from "react-bootstrap";
import FunctionalConteiner from "./Components/FunctionalConteiner";
import "./Styles/App.scss";

function App() {
  return (
    <>
      <Navbar expand="lg" fixed="top">
        <Container className="justify-content-center">
          <Navbar.Text className="text-center">ГБУЗ "ГП №1" г.Сочи Запись на обучение</Navbar.Text>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center min-vh-100">
        <FunctionalConteiner />
      </Container>
      <Navbar expand="lg" fixed="bottom">
        <Container className="justify-content-center">
          <Navbar.Text className="text-center">По вопросам предложений и улучшений обращаться по номеру: 8-952-836-06-42</Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default App;