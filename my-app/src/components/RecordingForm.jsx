import Form from "./UI/form/Form";
import Container from "./UI/container/Container";
import Label from "./UI/label/Label";
import Input from "./UI/input/Input";
import Button from "./UI/button/button";

function RecordingForm({ onBack, onrecord, ...props }) {
    return (
        <Form {...props}>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Фамилия</Label>
                <Input className="input-form" placeholder="Фамилия" type="text"></Input>
            </Container>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Имя</Label>
                <Input className="input-form" placeholder="Имя" type="text"></Input>
            </Container>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Отчество</Label>
                <Input className="input-form" placeholder="Имя" type="text"></Input>
            </Container>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Подразделение</Label>
                <Input className="input-form" placeholder="Подразделение" type="text"></Input>
            </Container>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Должность</Label>
                <Input className="input-form" placeholder="Должность" type="text"></Input>
            </Container>
            <Container>
                <Button className="btn-back btn" onClick={onBack}>Назад</Button>
                <Button className="btn-back btn" onClick={onrecord}>Записаться</Button>
            </Container>
        </Form>
    );
};

export default RecordingForm;