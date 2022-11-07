import Container from "./UI/container/Container";
import Button from "./UI/button/Button"

function EnterOrRecord() {
    return (
        <Container>
            <Container className="groups_btn_container">
                <Button className="btn">Войти как администратор</Button>
                <Button className="btn">Записаться на обучение</Button>
            </Container>
        </Container>
    )
};

export default EnterOrRecord;