import Select from "../select/Select";
import GenFormElemConteiner from "./GenFormElemConteiner";

function SelFormContainer({ children, textOption, value, lissentChange, hook, name, ...props }) {
    const data = hook("subdivision");

    function handlerChange(e) {
        lissentChange(e.target.value, e.target.name);
    };

    return (
        <GenFormElemConteiner text={children}>
            <Select {...props} value={value} onChange={handlerChange}>
                {data}
            </Select>
        </GenFormElemConteiner>
    );
};

export default SelFormContainer;