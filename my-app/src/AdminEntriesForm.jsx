import { Button, Container, Form } from "react-bootstrap";

function AdminEntriesForm(props) {

    function onClickChangeEntrance() {
        props.onChangeEntrance();
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Form className="shadow-lg rounded my-t-5 my-b-5">
                <Form.Group className="m-3">
                    <Form.Label className="text">Логин</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Введите ваш Логин"></Form.Control>
                </Form.Group>

                <Form.Group className="m-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        size="sm"
                        type="password"
                        placeholder="Введите ваш Пароль"
                        id="inputPassword"
                    />
                </Form.Group>

                <Container className="d-flex justify-content-between">
                    <Button variant="primary" size="sm"
                        onClick={onClickChangeEntrance}
                    >Назад</Button>
                    <Button variant="primary" size="sm">Войти</Button>
                </Container>
            </Form>
        </Container>
    );
};

export default AdminEntriesForm;