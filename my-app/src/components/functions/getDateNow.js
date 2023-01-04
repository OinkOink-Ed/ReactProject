// для чего-то создал, может пригодится

function getDateNow() {
    let date = new Date();

    let objDate = {
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };
};

export default getDateNow;