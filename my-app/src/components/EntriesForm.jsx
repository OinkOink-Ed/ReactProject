import Container from "./UI/container/Container";
import Form from "./UI/form/Form";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Label from "./UI/label/Label";

function EntriesForm({ onChange, ...props }) {

    return (
        <Container {...props}>
            <Form autoComplete="on" className="p-1 m-3 d-flex flex-column shadow-func-cont">
                <Container className="d-flex flex-column">
                    <Label className="mb-1">Введите Логин</Label>
                    <Input placeholder="Логин" type="text"></Input>
                </Container>
                <Container className="d-flex flex-column mt-2">
                    <Label className="mb-1">Введите пароль</Label>
                    <Input placeholder="Пароль" type="current-password"></Input>
                </Container>
                <Container className="d-flex mt-1 justify-content-between">
                    <Button className="btn bg-teal br-teal p-1"
                        onClick={onChange}>
                        Назад</Button>
                    <Button className="btn bg-green br-green p-1"
                        onClick={onChange}>
                        Войти</Button>
                </Container>
            </Form >
        </Container >
    );
};

export default EntriesForm;