import Container from "./UI/container/Container";
import Form from "./UI/form/Form";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import Label from "./UI/label/Label";

function EntriesForm({ onEntries, ...props }) {

    return (
        <Form {...props}>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Введите Логин</Label>
                <Input className="input-form" placeholder="Логин" type="text"></Input>
            </Container>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Введите пароль</Label>
                <Input className="input-form" placeholder="Пароль" type="current-password"></Input>
            </Container>
            <Container className="groups-btn-form">
                <Button className="btn-back btn"
                    onClick={onEntries}>
                    Назад</Button>
                <Button className="btn-entries btn" onClick={onEntries}>Войти</Button>
            </Container>
        </Form>
    );
};

export default EntriesForm;