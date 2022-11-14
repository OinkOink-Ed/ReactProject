import Container from "./UI/container/Container";
import Form from "./UI/form/Form";
import Input from "./UI/input/Input";
import Button from "./UI/button/button";
import Label from "./UI/label/Label";

function EntriesForm({ onBack, onAdmin, ...props }) {

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
                    onClick={onBack}>
                    Назад</Button>
                <Button className="btn-entries btn" onClick={onAdmin}>Войти</Button>
            </Container>
        </Form>
    );
};

export default EntriesForm;