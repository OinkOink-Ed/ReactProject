//Функция была вынесена отдельно для переиспользования
//Принимает url сервера и параметры запроса

async function queryRequest(url, parameters) {

    let response = await fetch(url, parameters);

    if (response.ok) {
        let data = await response.json();
        return data.result;
    } else {
        return response.status;
    };
};

export default queryRequest;