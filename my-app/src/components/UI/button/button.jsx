import myClasses from "../button/entriesOrRecording.module.css";

function Button({ children, className, ...props }) {
    let classesNames = [];

    className = Array.from(className).join('').split(' ');

    for (let key in myClasses) {
        for (let count = 0; count < className.length; count++) {
            if (key === className[count]) {
                classesNames.push(myClasses[key]);
            };
        };
    };

    return (
        <button {...props}
            className={classesNames.join(' ')}
        >{children}</button >
    );
};

export default Button;