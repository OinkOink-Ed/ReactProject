import createCssClasses from '../../functions/createCssClasses';
import myClasses from "../option/Option.module.css";

function Option({ children, className, ...props }) {
    return (
        <option {...props} className={createCssClasses(myClasses, className).join()}>{children}</option>
    );
};

export default Option;