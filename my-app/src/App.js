import Bar from "./components/UI/bar/Bar";
import Container from "./components/UI/container/Container";
import FunctionalContainer from "./components/FunctionalContainer";
import "./styles/App.css";

function App() {
  return (
    <Container className="app_container">
      <Bar
        className="header_bar bar">
        ГБУЗ "ГП №1 г.Сочи" МЗ КК Запись на обучение
      </Bar>
      <FunctionalContainer></FunctionalContainer>
      <Bar className="footer_bar bar">
        По вопросам и предложениям по улучшению обращаться по номеру: 8-952-836-06-42
      </Bar>
    </Container >
  );
};

export default App;