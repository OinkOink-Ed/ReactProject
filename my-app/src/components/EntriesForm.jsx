import Container from "./UI/containers/Container";
import Form from "./UI/form/Form";
import Button from "./UI/button/button";
import ElFormContainer from "../components/UI/containers/ElFormContainer";
import useCreateDataForm from "./hooks/useCreateDataForm";
import { useNavigate } from 'react-router-dom';

function EntriesForm({ onBack, ...props }) {
    const [dataForm, createFormData] = useCreateDataForm();

    const navigate = useNavigate();

    function entries(e) {
        e.preventDefault();
        navigate("/admin");
    };

    return (
        <Form {...props}>
            <ElFormContainer
                placeholder="Логин"
                type="text"
                name="login"
                onChange={createFormData}
                value={dataForm.login ? dataForm.login : ""}>
                Введите Логин
            </ElFormContainer>

            <ElFormContainer
                placeholder="Пароль"
                type="password"
                name="password"
                onChange={createFormData}
                value={dataForm.password ? dataForm.password : ""}>
                Введите Пароль
            </ElFormContainer>

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