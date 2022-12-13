import Container from "./Container";
import Label from "../label/Label";
import Option from "../option/Option";
import Select from "../select/Select";

function SelFormContainer({ children, textOption, value, onChange, hook, ...props }) {
    const data = hook(props.name);

    function handlerChange(e) {
        onChange(e.target.value, e.target.name);
    };

    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{children}</Label>
            <Select {...props} className="subdivision" value={value ? value : ""} onChange={handlerChange}>
                <Option className="subdivision-op">{textOption}</Option>
                {data}
            </Select>
        </Container>
    );
};

export default SelFormContainer;