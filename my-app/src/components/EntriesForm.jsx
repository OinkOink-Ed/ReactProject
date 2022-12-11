import Container from "./UI/containers/Container";
import Form from "./UI/form/Form";
import Button from "./UI/button/button";
import ElFormContainer from "../components/UI/containers/ElFormContainer";
import { useNavigate } from 'react-router-dom';

function EntriesForm({ onBack, ...props }) {
    let navigate = useNavigate();

    function entries(e) {
        e.preventDefault();
        navigate("/admin");
    };

    return (
        <Form {...props}>
            <ElFormContainer textLabel="Введите Логин" holderInput="Логин" typeInput="text"></ElFormContainer>
            <ElFormContainer textLabel="Введите Пароль" holderInput="Пароль" typeInput="current-password"></ElFormContainer>
            <Container className="groups-btn-form">
                <Button className="btn-back btn"
                    onClick={onBack}>
                    Назад</Button>
                <Button className="btn-entries btn" onClick={entries}>Войти</Button>
            </Container>
        </Form>
    );
};

export default EntriesForm;