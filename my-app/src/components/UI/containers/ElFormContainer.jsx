import Container from './Container';
import Label from "../label/Label";
import Input from "../input/Input";

function ElFormContainer({ children, onChange, value, ...props }) {
    function handlerChange(e) {
        onChange(e.target.value, e.target.name);
    };

    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{children}</Label>
            <Input className="input-form" {...props} value={value ? value : ""} onChange={handlerChange}></Input>
        </Container>
    );
};

export default ElFormContainer;