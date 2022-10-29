import { Button, Form, Container } from "react-bootstrap";

function AdminEntriesForm() {
    return (
        <Container className="d-flex justify-content-center
        align-items-center min-vh-100">
            <Form className="d-flex flex-column shadow-lg rounded">
                <Form.Group className="d-flex flex-column m-3">
                    <Form.Label className="text">Логин</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Введите ваш Логин"></Form.Control>
                </Form.Group>

                <Form.Group className="d-flex flex-column m-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        size="sm"
                        type="password"
                        placeholder="Введите ваш Пароль"
                        id="inputPassword"
                    />
                </Form.Group>

                <Button variant="primary" size="sm">Войти</Button>
            </Form>
        </Container>
    );
};

export default AdminEntriesForm;