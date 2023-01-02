import Container from "./UI/containers/Container";
import Button from "./UI/button/button"
import { useNavigate } from "react-router-dom";

function EnterOrRecord(props) {
    const navigate = useNavigate();

    function authorizaton(e) {
        e.preventDefault();
        navigate("/authorization");
    };

    function recording(e) {
        e.preventDefault();
        navigate("/recording");
    };

    return (
        <Container {...props}>
            <Button className="btn btn-recording" onClick={recording}>Записаться на обучение</Button>
            <Button className="btn-entries btn" onClick={authorizaton}>Войти как администратор</Button>
        </Container>
    )
};

export default EnterOrRecord;