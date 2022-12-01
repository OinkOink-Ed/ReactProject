import { useState } from "react";
import queryRequest from "../queryRequests";
import Table from "../components/UI/table/Table";

function Admin() {
    const [table, SetTable] = useState({
        data: null,
        name: null,
        status: false,
    });

    async function onHandlerClick() {
        let response = await queryRequest({
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                "type": "opt_7",
            }),
        });
        if (typeof response === 'object') {
            SetTable({ ...table, date: response.result, name: response.options, status: true });
        } else {
            alert("Произошла ошибка " + response);
        };
    };

    return (
        <div>
            <button onClick={onHandlerClick}>Получить данные из БД</button>
            {table.status && <div><Table contents={table.data} tableName={table.name}></Table></div>}
        </div>
    );
};

export default Admin;