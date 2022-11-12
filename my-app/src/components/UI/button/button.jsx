import usingClasses from '../../../usingClasses';
import myClasses from '../button/button.module.css';

function Button({ children, className, ...props }) {
    return (
        <button {...props}
            className={usingClasses(myClasses, className).join(' ')}
        >{children}</button >
    );
};

export default Button;