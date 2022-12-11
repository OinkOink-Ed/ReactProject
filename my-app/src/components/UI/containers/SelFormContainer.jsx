import Container from "./Container";
import Label from "../label/Label";
import Option from "../option/Option";
import Select from "../select/Select";
import useGetOptions from "../../hooks/useGetOptions";

function SelFormContainer({ textLable, textOption }) {
    const subdivision = useGetOptions("subdivision");

    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{textLable}</Label>
            <Select required className="subdivision">
                <Option className="subdivision-op">{textOption}</Option>
                {subdivision}
            </Select>
        </Container>
    );
};

export default SelFormContainer;