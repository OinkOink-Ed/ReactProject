import { Button, Container, Form } from "react-bootstrap";

function FormOfRecording(props) {

    function onClickChangeRecording() {
        props.onChangeRecording();
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Form className="shadow-lg rounded my-t-5 my-b-5">
                <Form.Group className="m-3">
                    <Form.Label className="text">Введите ваши ФИО</Form.Label>
                    <Form.Group className="m-2">
                        <Form.Control size="sm" type="text" placeholder="Фамилия"></Form.Control>
                    </Form.Group>

                    <Form.Group className="m-2">
                        <Form.Control size="sm" type="text" placeholder="Имя" />
                    </Form.Group>

                    <Form.Group className="m-2">
                        <Form.Control size="sm" type="text" placeholder="Отчество" />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="m-3">
                    <Form.Label>Введите должность и подразделение</Form.Label>
                    <Form.Group className="m-2">
                        <Form.Control size="sm" type="text" placeholder="Должность" />
                    </Form.Group>

                    <Form.Group className="m-2">
                        <Form.Control size="sm" type="text" placeholder="Подразделение" />
                    </Form.Group>
                </Form.Group>

                <Container className="d-flex justify-content-between">
                    <Button variant="primary" size="sm" className=""
                        onClick={onClickChangeRecording}
                    >Назад</Button>
                    <Button variant="primary" size="sm">Записаться</Button>
                </Container>
            </Form>
        </Container>
    );
};

export default FormOfRecording;