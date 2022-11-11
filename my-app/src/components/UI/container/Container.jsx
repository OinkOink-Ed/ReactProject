import myClasses from "../container/container.module.css";

function Container({ children, className, ...props }) {
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
        <div {...props} className={classesNames.join(' ')}>{children}</div>
    );
};

export default Container;