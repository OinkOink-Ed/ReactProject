import { Button, ButtonGroup, Form } from "react-bootstrap";

function AdminEntriesForm() {
    return (
        <Form className="shadow-lg rounded">
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

            <ButtonGroup className="d-flex justify-content-between">
                <Button variant="primary" size="sm">Назад</Button>
                <Button variant="primary" size="sm">Войти</Button>
            </ButtonGroup>
        </Form>
    );
};

export default AdminEntriesForm;