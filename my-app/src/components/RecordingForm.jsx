import Form from "./UI/form/Form";
import Container from "./UI/container/Container";
import Label from "./UI/label/Label";
import Input from "./UI/input/Input";
import Button from "./UI/button/button";
import Select from "./UI/select/Select";
import useGetOptions from "./hooks/useGetOptions";

function RecordingForm({ onBack, ...props }) {
    const subdivision = useGetOptions("subdivision");

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
            {/*
                Реализовать select для выборки подразделения и должности
                Через useEffect() во время первого маунта
            */}
            <Container className="groups-elemnts-form">
                <Label className="label-input">Подразделение</Label>
                <Select required>
                    <option>Выберите подразделение</option>
                    {subdivision}
                </Select>
            </Container>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Должность</Label>
                <Input className="input-form" placeholder="Должность" type="text"></Input>
            </Container>
            <Container className="groups-elemnts-form">
                {/*
                    Сделать свой календарь + выбор времени.
                */}
                <Label className="label-input">Дата</Label>
                <Input className="input-form" placeholder="дд.мм.гггг" type="date"></Input>
            </Container>
            <Container className="groups-elemnts-form">
                <Label className="label-input">Время</Label>
                <Input className="input-form" placeholder="чч.чч" type="time"></Input>
            </Container>
            <Container>
                <Button className="btn-back btn" onClick={onBack}>Назад</Button>
                <Button className="btn-back btn">Записаться</Button>
            </Container>
        </Form >
    );
};

export default RecordingForm;