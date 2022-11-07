import Container from "./UI/container/Container";
import Button from "./UI/button/Button"

function EnterOrRecord({ onChange, ...props }) {
    return (
        <Container {...props}>
            <Container className="groups_btn_container m-2 mt-4 mb-4 flex-wrap justify-content-center d-flex">
                <Button className="btn bg-green br-green p-1 m-2 justify-content-center" onClick={onChange}>Войти как администратор</Button>
                <Button className="btn bg-teal br-teal p-1 m-2 justify-content-center">Записаться на обучение</Button>
            </Container>
        </Container>
    )
};

export default EnterOrRecord;