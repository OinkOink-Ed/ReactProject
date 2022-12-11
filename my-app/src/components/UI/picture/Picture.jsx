import createCssClasses from '../../functions/createCssClasses';
import myClasses from "../picture/Picture.module.css";

function Picture({ className, ...props }) {
    return (
        <img {...props} alt="" className={createCssClasses(myClasses, className).join()}></img>
    );
};

export default Picture;