import createCssClasses from '../../functions/createCssClasses';
import myClasses from "../containers/container.module.css";

function Container({ children, className, ...props }) {
    return (
        <div {...props} className={createCssClasses(myClasses, className).join(' ')}>{children}</div>
    );
};

export default Container;