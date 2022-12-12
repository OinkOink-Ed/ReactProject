import { useState } from 'react';
import Option from "../UI/option/Option";
import queryRequest from '../functions/queryRequests';
import { useMemo } from 'react';

function useGetOptions(name) {
    const [result, SetResult] = useState();

    useMemo(() => {
        const fetchData = async () => {
            const result = await queryRequest({
                method: "POST",
                headers: {
                    "Content-type": "text/plain"
                },
                body: JSON.stringify({
                    "name": name,
                }),
            });
            const lists = result.map((element) => <Option key={element.id} name={element.name} value={element.name}>{element.name}</Option>);
            SetResult(lists);
        };
        fetchData();
    }, [name]);

    return result;
};

export default useGetOptions;