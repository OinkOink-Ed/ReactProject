import createCssClasses from '../../functions/createCssClasses';
import myClasses from '../button/button.module.css';

function Button({ children, className, ...props }) {
    return (
        <button {...props}
            className={createCssClasses(myClasses, className).join(' ')}
        >{children}</button >
    );
};

export default Button;