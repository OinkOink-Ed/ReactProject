import usingCssClasses from '../../../usingCssClasses';
import myClasses from "../container/container.module.css";

function Container({ children, className, ...props }) {
    return (
        <div {...props} className={usingCssClasses(myClasses, className).join(' ')}>{children}</div>
    );
};

export default Container;