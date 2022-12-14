import Form from "./UI/form/Form";
import Container from "./UI/containers/Container";
import Button from "./UI/button/button";
import IconFormContainer from "./UI/containers/IconFormContainer";
import SelFormContainer from "./UI/containers/SelFormContainer";
import InputFormContainer from "./UI/containers/InputFormContainer";
import useCreateDataForm from "./hooks/useCreateDataForm";
import useGetOptions from "./hooks/useGetOptions";

function RecordingForm({ onBack, ...props }) {
    const [dataForm, createFormData] = useCreateDataForm();
    // function func() {
    //     alert("Нажал на календарь");
    // };

    // function func_1() {
    //     alert("Нажал на часы");
    // };

    return (
        <Form {...props} id="Recording">
            <InputFormContainer placeholder="Фамилия" name="surname" type="text"
                value={dataForm.surname}
                onChange={createFormData}>
                Фамилия
            </InputFormContainer>

            <InputFormContainer placeholder="Имя" name="name" type="text"
                value={dataForm.name}
                onChange={createFormData}>
                Имя
            </InputFormContainer>

            <InputFormContainer placeholder="Отчество" name="patronymic" type="text"
                value={dataForm.patronymic}
                onChange={createFormData}>
                Отчество
            </InputFormContainer>

            <SelFormContainer className="subdivision" name="subdivision"
                hook={useGetOptions}
                value={dataForm.subdivision}
                onChange={createFormData}>
                Подразделение
            </SelFormContainer>

            <InputFormContainer placeholder="Должность" name="post" type="text"
                value={dataForm.post}
                onChange={createFormData}>
                Должность
            </InputFormContainer>

            <IconFormContainer
                src="./icons/calendar.png"
                placeholder="дд.мм.гггг"
                type="text"
                onChange={createFormData}
                // onclick={func}
                name="date"
                value={dataForm.date ? dataForm.date : "12.12.2022"}>
                Дата
            </IconFormContainer>

            <IconFormContainer
                src="./icons/clock.png"
                placeholder="чч.мм"
                type="text"
                onChange={createFormData}
                // onclick={func_1}
                name="time"
                value={dataForm.time ? dataForm.time : "12:00"}>
                Время
            </IconFormContainer>

            <Container>
                <Button className="btn-back btn" onClick={onBack}>Назад</Button>
                <Button className="btn-back btn">Записаться</Button>
            </Container>
        </Form >
    );
};

export default RecordingForm;