import Form from "./UI/form/Form";
import Container from "./UI/containers/Container";
import Button from "./UI/button/button";
import IconFormContainer from "./UI/containers/IconFormContainer";
import SelFormContainer from "./UI/containers/SelFormContainer";
import InputFormContainer from "./UI/containers/InputFormContainer";
import useCreateDataForm from "./hooks/useCreateDataForm";
import useGetOptions from "./hooks/useGetOptions";
import { useNavigate } from "react-router-dom";

function RecordingForm(props) {
    const [dataForm, createFormData] = useCreateDataForm();

    const navigate = useNavigate();

    function home(e) {
        e.preventDefault();
        navigate("/");
    };

    return (
        <Form {...props} id="Recording">
            <InputFormContainer placeholder="Фамилия" name="surname" type="text"
                value={dataForm.surname}
                lissentChange={createFormData}>
                Фамилия
            </InputFormContainer>

            <InputFormContainer placeholder="Имя" name="name" type="text"
                value={dataForm.name}
                lissentChange={createFormData}>
                Имя
            </InputFormContainer>

            <InputFormContainer placeholder="Отчество" name="patronymic" type="text"
                value={dataForm.patronymic}
                lissentChange={createFormData}>
                Отчество
            </InputFormContainer>

            <SelFormContainer className="subdivision" name="subdivision"
                hook={useGetOptions}
                value={dataForm.subdivision}
                lissentChange={createFormData}>
                Подразделение
            </SelFormContainer>

            <InputFormContainer placeholder="Должность" name="post" type="text"
                value={dataForm.post}
                lissentChange={createFormData}>
                Должность
            </InputFormContainer>

            <IconFormContainer src="./icons/calendar.png" placeholder="дд.мм.гггг" name="date" type="text"
                lissentChange={createFormData}
                value={dataForm.date}>
                Дата
            </IconFormContainer>

            <IconFormContainer src="./icons/clock.png" placeholder="чч.мм" name="time" type="text"
                lissentChange={createFormData}
                value={dataForm.time ? dataForm.time : "12:00"}>
                Время
            </IconFormContainer>

            <Container>
                <Button className="btn-back btn" onClick={home}>Назад</Button>
                <Button className="btn-back btn">Записаться</Button>
            </Container>
        </Form >
    );
};

export default RecordingForm;