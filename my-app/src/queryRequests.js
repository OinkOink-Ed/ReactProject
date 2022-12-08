async function queryRequest(parameters) {

    let response = await fetch("http://oinkoink", parameters);

    if (response.ok) {
        let data = await response.json();
        return data.result;
    } else {
        return response.status;
    };
};

export default queryRequest;