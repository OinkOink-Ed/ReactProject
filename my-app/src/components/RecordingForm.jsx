import Form from "./UI/form/Form";
import Container from "./UI/containers/Container";
import Button from "./UI/button/button";
import ElFormContainer from "./UI/containers/ElFormContainer";
import IconFormContainer from "./UI/containers/IconFormContainer";
import SelFormContainer from "./UI/containers/SelFormContainer";
import { useState } from "react";


function RecordingForm({ onBack, ...props }) {
    const [dataForm, setDataForm] = useState({
        // surname: "",
        // name: "",
        // patronymic: "",
        // subdivision: "",
        // post: "",
        // date: "13.12.2022",
        // time: "13:00",
    });

    function createFormData(value, id) {
        setDataForm({ ...dataForm, [id]: value });
    };

    console.log(dataForm);

    // function func() {
    //     alert("Нажал на календарь");
    // };

    // function func_1() {
    //     alert("Нажал на часы");
    // };

    return (
        <Form {...props} id="Recording">
            <ElFormContainer
                placeholder="Фамилия"
                type="text"
                name="surname"
                value={dataForm.surname ? dataForm.surname : ""}
                onChange={createFormData}>
                Фамилия
            </ElFormContainer>

            <ElFormContainer
                placeholder="Имя"
                type="text"
                name="name"
                value={dataForm.name ? dataForm.name : ""}
                onChange={createFormData}>
                Имя
            </ElFormContainer>

            <ElFormContainer
                placeholder="Отчество"
                type="text"
                name="patronymic"
                value={dataForm.patronymic ? dataForm.patronymic : ""}
                onChange={createFormData}>
                Отчество
            </ElFormContainer>

            <SelFormContainer
                textOption="Выберите подразделение"
                name="subdivision"
                required
                value={dataForm.subdivision ? dataForm.subdivision : ""}
                onChange={createFormData}>
                Подразделение
            </SelFormContainer>

            <ElFormContainer
                placeholder="Должность"
                type="text"
                name="post"
                value={dataForm.post ? dataForm.post : ""}
                onChange={createFormData}>
                Должность
            </ElFormContainer>

            <IconFormContainer
                src="./icons/calendar.png"
                placeholder="дд.мм.гггг"
                type="text"
                // onclick={func}
                name="date"
                value={dataForm.date ? dataForm.date : "12.12.2022"}>
                Дата
            </IconFormContainer>

            <IconFormContainer
                src="./icons/clock.png"
                placeholder="чч.мм"
                type="text"
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