import usingClasses from '../../../usingClasses';
import myClasses from "../container/container.module.css";

function Container({ children, className, ...props }) {
    return (
        <div {...props} className={usingClasses(myClasses, className).join(' ')}>{children}</div>
    );
};

export default Container;