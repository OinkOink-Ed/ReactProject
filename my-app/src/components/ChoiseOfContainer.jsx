import Container from "./UI/container/Container";
import Button from "./UI/button/Button"

function ChoiseOfContainer() {
    return (
        <Container className="group_btn_container">
            <Button>Войти как администратор</Button>
            <Button>Записаться на обучение</Button>
        </Container>
    )
};

export default ChoiseOfContainer;