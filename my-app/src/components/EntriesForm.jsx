import Container from "./UI/container/Container";
import Form from "./UI/form/Form";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Label from "./UI/label/Label";

function EntriesForm({ onChange, ...props }) {

    return (
        <Container {...props}>
            <Form className="entries-form">
                <Container className="groups-elemnts-form">
                    <Label className="label-form">Введите Логин</Label>
                    <Input className="input-form" placeholder="Логин" type="text"></Input>
                </Container>
                <Container className="groups-elemnts-form">
                    <Label className="label-form">Введите пароль</Label>
                    <Input className="input-form" placeholder="Пароль" type="current-password"></Input>
                </Container>
                <Container className="groups-btn-form">
                    <Button className="btn-back btn"
                        onClick={onChange}>
                        Назад</Button>
                    <Button className="btn-entries btn"
                        onClick={onChange}>
                        Войти</Button>
                </Container>
            </Form >
        </Container >
    );
};

export default EntriesForm;