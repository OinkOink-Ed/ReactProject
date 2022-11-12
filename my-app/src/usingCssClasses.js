function usingCssClasses(myClasses, className) {
    let classesNames = [];
    let myClassName = className;

    if (myClassName !== undefined) {
        myClassName = Array.from(myClassName).join('').split(' ');

        for (let key in myClasses) {
            for (let count = 0; count < myClassName.length; count++) {
                if (key === myClassName[count]) {
                    classesNames.push(myClasses[key]);
                };
            };
        };
    };

    return classesNames;
};

export default usingCssClasses;