import Container from "./UI/container/Container";
import Form from "./UI/form/Form";
// import Button from "./UI/button/Button"

function EntriesForm(props) {
    return (
        <Container {...props}>
            <Form className="p-1 m-3">
                <Container className="p-2">
                    <label>Введите Логин</label>
                    <input></input>
                </Container>
                <Container className="p-2">
                    <label>Введите пароль</label>
                    <input></input>
                </Container>
            </Form>
        </Container>
    )
};

export default EntriesForm;