import Form from "./UI/form/Form";
import Container from "./UI/containers/Container";
import Button from "./UI/button/button";
import ElFormContainer from "./UI/containers/ElFormContainer";
import IconFormContainer from "./UI/containers/IconFormContainer";
import SelFormContainer from "./UI/containers/SelFormContainer";


function RecordingForm({ onBack, ...props }) {

    function func() {
        alert("Нажал на календарь");
    };

    function func_1() {
        alert("Нажал на часы");
    };

    return (
        <Form {...props}>
            <ElFormContainer textLabel="Фамилия" holderInput="Фамилия" typeInput="text"></ElFormContainer>
            <ElFormContainer textLabel="Имя" holderInput="Имя" typeInput="text"></ElFormContainer>
            <ElFormContainer textLabel="Отчество" holderInput="Отчество" typeInput="text"></ElFormContainer>

            <SelFormContainer textLabel="Подразделение" textOption="Выберите подразделение"></SelFormContainer>

            <ElFormContainer textLabel="Должность" holderInput="Должность" typeInput="text"></ElFormContainer>

            <IconFormContainer textLabel="Дата" holderInput="дд.мм.гггг" typeInput="text" onclick={func}></IconFormContainer>
            <IconFormContainer textLabel="Время" holderInput="чч.мм" typeInput="text" onclick={func_1}></IconFormContainer>

            <Container>
                <Button className="btn-back btn" onClick={onBack}>Назад</Button>
                <Button className="btn-back btn">Записаться</Button>
            </Container>
        </Form >
    );
};

export default RecordingForm;