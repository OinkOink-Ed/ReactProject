import createCssClasses from '../../functions/createCssClasses';
import myClasses from "../form/form.module.css";

function Form({ className, children, ...props }) {
    return (
        <form {...props} className={createCssClasses(myClasses, className).join(' ')}>{children}</form>
    );
};

export default Form;