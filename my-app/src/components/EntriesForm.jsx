import Container from "./UI/container/Container";
import Form from "./UI/form/Form";
// import Button from "./UI/button/Button"

function EntriesForm(props) {
    return (
        <Container {...props}>
            <Form className="form">
                <Container className="group_input_form_container">
                    <label>Введите Логин</label>
                    <input></input>
                </Container>
                <Container className="group_input_form_container">
                    <label>Введите пароль</label>
                    <input></input>
                </Container>
            </Form>
        </Container>
    )
};

export default EntriesForm;