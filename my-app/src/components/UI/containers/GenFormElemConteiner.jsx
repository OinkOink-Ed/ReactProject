import Container from "./Container";
import Label from "../label/Label";

function GenFormElemConteiner({ children, ...props }) {
    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{props.text}</Label>
            {children}
        </Container>
    );
};

export default GenFormElemConteiner;