import Container from './Container';
import Label from "../label/Label";
import Input from "../input/Input";

function ElFormContainer({ textLabel, holderInput, typeInput }) {
    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{textLabel}</Label>
            <Input className="input-form" placeholder={holderInput} type={typeInput}></Input>
        </Container>
    );
};

export default ElFormContainer;