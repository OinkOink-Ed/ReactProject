import usingCssClasses from '../../../usingCssClasses';
import myClasses from "../select/Select.module.css";

function Select({ children, lists, className, ...props }) {
    return (
        <select {...props} className={usingCssClasses(myClasses, className).join()}>{children}</select>
    );
};

export default Select;