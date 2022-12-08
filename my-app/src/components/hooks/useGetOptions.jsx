import { useEffect } from 'react';
import { useState } from 'react';
import queryRequest from '../../queryRequests';

function useGetOptions(name) {
    const [result, SetResult] = useState();

    useEffect(() => {
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
            const lists = result.map((element) => <option key={element.id} value={element.name}>{element.name}</option>);
            SetResult(lists);
        };
        fetchData();
    }, []);

    return result;
};

export default useGetOptions;