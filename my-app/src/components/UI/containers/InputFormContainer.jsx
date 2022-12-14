import GenFormElemConteiner from "./GenFormElemConteiner";
import Input from "../input/Input";

function InputFormContainer({ value, onChange, children, ...props }) {
    function handlerChange(e) {
        onChange(e.target.value, e.target.name);
    };

    return (
        <GenFormElemConteiner text={children}>
            <Input className="input-form" {...props} value={value ? value : ""} onChange={handlerChange}></Input>
        </GenFormElemConteiner>
    );
};

export default InputFormContainer;