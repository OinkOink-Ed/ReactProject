//Функция для имитации поведения классов как у bootstrap
//Позволяет использовать собственные компоненты внутри которых html теги
//И передавать стилизацию через пропсы.


//myClasses - это объект содержащий классы описанные в соответсвующем css файле
//className - это имена классов переданные через props
function createCssClasses(myClasses, className) {
    let classesNames = [];
    let myClassName = className;

    if (myClassName !== undefined) {

        //Преобразуем строку в массив символов, применим jojn для объединения элементов массива в один.
        //Применим сплит для разделения на несколько элементов массива

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

export default createCssClasses;