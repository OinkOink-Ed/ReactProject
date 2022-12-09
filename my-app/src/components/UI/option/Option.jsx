import usingCssClasses from '../../../usingCssClasses';
import myClasses from "../option/Option.module.css";

function Option({ children, className, ...props }) {
    return (
        <option {...props} className={usingCssClasses(myClasses, className).join()}>{children}</option>
    );
};

export default Option;