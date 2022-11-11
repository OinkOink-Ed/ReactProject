import myClasses from '../button/button.module.css';

function Button({ children, className, ...props }) {
    let classesNames = [];
    let myClassName = className;

    console.log(myClassName);

    myClassName = Array.from(myClassName).join('').split(' ');

    for (let key in myClasses) {
        for (let count = 0; count < myClassName.length; count++) {
            if (key === myClassName[count]) {
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