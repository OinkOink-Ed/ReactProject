import Bar from "../components/Bar";
import RecordingForm from "../components/RecordingForm";
import Container from "../components/UI/containers/Container";
import "../styles/App.css";

//Страница для записи на обучение

function Recording() {
    return (
        <Container className="app-body">
            <Bar
                className="header-bar bar">
                ГБУЗ "ГП №1 г.Сочи" МЗ КК Запись на обучение
            </Bar>
            <Container className="body-container">
                <RecordingForm className="form" />
            </Container>
            <Bar className="footer-bar bar">
                По вопросам и предложениям по улучшению обращаться по номеру: 8-952-836-06-42
            </Bar>
        </Container >
    );
};

export default Recording;