import Container from "./UI/container/Container";
import Button from "./UI/button/Button"

function EnterOrRecord({ onChange, ...props }) {
    return (
        <Container {...props}>
            <Container className="groups_btn_container flex-wrap justify-content-center d-flex">
                <Button className="btn p-1 m-2 justify-content-center" onClick={onChange}>Войти как администратор</Button>
                <Button className="btn p-1 m-2 justify-content-center">Записаться на обучение</Button>
            </Container>
        </Container>
    )
};

export default EnterOrRecord;