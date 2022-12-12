import Container from "./Container";
import Label from "../label/Label";
import Option from "../option/Option";
import Select from "../select/Select";
import useGetOptions from "../../hooks/useGetOptions";

function SelFormContainer({ children, textOption, value, onChange, ...props }) {
    const subdivision = useGetOptions("subdivision");

    function handlerChange(e) {
        onChange(e.target.value, e.target.name);
    };

    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{children}</Label>
            <Select {...props} className="subdivision" onChange={handlerChange}>
                <Option className="subdivision-op">{textOption}</Option>
                {subdivision}
            </Select>
        </Container>
    );
};

export default SelFormContainer;