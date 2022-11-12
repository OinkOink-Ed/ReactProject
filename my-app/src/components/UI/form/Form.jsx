import usingCssClasses from '../../../usingCssClasses';
import myClasses from "../form/form.module.css";

function Form({ className, children, ...props }) {
    return (
        <form className={usingCssClasses(myClasses, className).join(' ')}>{children}</form>
    );
};

export default Form;