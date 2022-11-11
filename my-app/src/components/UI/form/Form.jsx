import myClasses from "../form/form.module.css";

function Form({ className, children, ...props }) {

    let classesNames = [];
    let myClassName = className;

    myClassName = Array.from(myClassName).join('').split(' ');

    for (let key in myClasses) {
        for (let count = 0; count < myClassName.length; count++) {
            if (key === myClassName[count]) {
                classesNames.push(myClasses[key]);
            };
        };
    };

    return (
        <form className={classesNames.join(' ')}>{children}</form>
    );
};

export default Form;