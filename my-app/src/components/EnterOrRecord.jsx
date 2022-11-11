import Container from "./UI/container/Container";
import Button from "./UI/button/Button"

function EnterOrRecord({ onEntries, onRecording, ...props }) {
    return (
        <Container {...props}>
            <Button className="btn btn-recording" onClick={onRecording}>Записаться на обучение</Button>
            <Button className="btn-entries btn" onClick={onEntries}>Войти как администратор</Button>
        </Container>
    )
};

export default EnterOrRecord;