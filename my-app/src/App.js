import Bar from "./components/Bar";
import Container from "./components/UI/container/Container";
import ChoiseForms from "./components/ChoiseForms";
import "./styles/App.css";

function App() {
  return (
    <Container className="app-body">
      <Bar
        className="header-bar bar">
        ГБУЗ "ГП №1 г.Сочи" МЗ КК Запись на обучение
      </Bar>
      <Container className="body-conteiner">
        <ChoiseForms />
      </Container>
      <Bar className="footer-bar bar">
        По вопросам и предложениям по улучшению обращаться по номеру: 8-952-836-06-42
      </Bar>
    </Container >
  );
};

export default App;