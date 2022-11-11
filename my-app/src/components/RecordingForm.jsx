import Form from "./UI/form/Form";
import Container from "./UI/container/Container";
import Label from "./UI/label/Label";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

function RecordingForm({ onRecording, ...props }) {
    return (
        <Form>
            <Container>
                <Label>dfjsfjfds</Label>
                <Input></Input>
            </Container>
            <Container>
                <Label>jdfgj</Label>
                <Input></Input>
            </Container>
            <Container>
                <Label>djgjfg</Label>
                <Input></Input>
            </Container>
            <Container>
                <Button onClick={onRecording}>djgfjfgj</Button>
                <Button onClick={onRecording}>jdgfjfgjg</Button>
            </Container>
        </Form>
    );
};

export default RecordingForm;