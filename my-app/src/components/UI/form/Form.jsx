import usingClasses from '../../../usingClasses';
import myClasses from "../form/form.module.css";

function Form({ className, children, ...props }) {
    return (
        <form className={usingClasses(myClasses, className).join(' ')}>{children}</form>
    );
};

export default Form;