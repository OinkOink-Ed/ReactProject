import createCssClasses from '../../functions/createCssClasses';
import myClasses from "../select/Select.module.css";

function Select({ children, lists, className, ...props }) {
    return (
        <select {...props} className={createCssClasses(myClasses, className).join()}>{children}</select>
    );
};

export default Select;