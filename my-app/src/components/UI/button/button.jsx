import usingCssClasses from '../../../usingCssClasses';
import myClasses from '../button/button.module.css';

function Button({ children, className, ...props }) {
    return (
        <button {...props}
            className={usingCssClasses(myClasses, className).join(' ')}
        >{children}</button >
    );
};

export default Button;