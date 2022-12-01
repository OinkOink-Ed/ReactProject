async function QueryRequest(parameters) {

    let response = await fetch("http://oinkoink", parameters);

    if (response.ok) {
        let data = await response.json();
        return data;
    } else {
        return response.status;
    };
};

export default QueryRequest;