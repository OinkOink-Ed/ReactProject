import { useState } from "react";

function Admin() {

    let [data, Setdata] = useState(null);

    async function onHandlerClick() {
        await fetch("http://oinkoink").then(function (response) {
            response.text().then(function (text) {
                Setdata(data = text);
            });
        });
    };

    return (
        <div>
            <button onClick={onHandlerClick}>Получить данные из БД</button>
            <div>{data}</div>
        </div>
    );
};

export default Admin;