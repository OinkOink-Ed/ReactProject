import Container from "../components/UI/container/Container";
import Bar from "../components/Bar";

function Admin() {
    return (
        <Container className="app-body">
            <Bar
                className="header-bar bar">
                ГБУЗ "ГП №1 г.Сочи" МЗ КК Запись на обучение
            </Bar>
            <Container className="body-container">
                Здравствуйте, Эдуард
            </Container>
            <Bar className="footer-bar bar">
                По вопросам и предложениям по улучшению обращаться по номеру: 8-952-836-06-42
            </Bar>
        </Container >
    );
};

export default Admin;