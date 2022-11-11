import Container from "./UI/container/Container";
import Button from "./UI/button/Button"

function EnterOrRecord({ onChange, ...props }) {
    return (
        <Container className="groups-btn">
            <Button className="btn btn-recording">Записаться на обучение</Button>
            <Button className="btn-entries btn" onClick={onChange}>Войти как администратор</Button>
        </Container>
    )
};

export default EnterOrRecord;