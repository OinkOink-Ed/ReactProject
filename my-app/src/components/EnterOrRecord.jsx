import Container from "./UI/container/Container";
import Button from "./UI/button/Button"

function EnterOrRecord({ onChange, ...props }) {
    return (
        <Container {...props}>
            <Container className="groups_btn_container">
                <Button className="btn" onClick={onChange}>Войти как администратор</Button>
                <Button className="btn">Записаться на обучение</Button>
            </Container>
        </Container>
    )
};

export default EnterOrRecord;