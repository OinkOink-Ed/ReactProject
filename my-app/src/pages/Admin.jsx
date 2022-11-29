import { useState } from "react";
import Table from "../components/UI/table/Table";

function Admin() {

    let [content, Setdata] = useState();

    async function onHandlerClick() {
        let response = await fetch("http://oinkoink", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "type": "opt_1",
            }),
        });

        if (response.ok) {
            let data = await response.json();
            Setdata(data);
        } else {
            alert("HTTP ошибка сервера: " + response.status);
        };
    };

    return (
        <div>
            <button onClick={onHandlerClick}>Получить данные из БД</button>
            <div>
                <Table contents={content}></Table>
            </div>
        </div>
    );
};

export default Admin;