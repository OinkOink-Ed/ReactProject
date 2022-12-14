import { useNavigate } from 'react-router-dom';
import Container from "./UI/containers/Container";
import Form from "./UI/form/Form";
import Button from "./UI/button/button";
import InputFormContainer from "./UI/containers/InputFormContainer";
import useCreateDataForm from "./hooks/useCreateDataForm";

function EntriesForm({ onBack, ...props }) {
    const [dataForm, createFormData] = useCreateDataForm();

    const navigate = useNavigate();

    function entries(e) {
        e.preventDefault();
        navigate("/admin");
    };

    return (
        <Form {...props}>
            <InputFormContainer placeholder="Логин" name="login" type="text"
                onChange={createFormData}
                value={dataForm.login}>
                Введите Логин
            </InputFormContainer>

            <InputFormContainer placeholder="Пароль" name="password" type="password"
                onChange={createFormData}
                value={dataForm.password}>
                Введите Пароль
            </InputFormContainer>

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