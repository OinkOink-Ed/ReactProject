import { useEffect } from 'react';
import { useState } from 'react';
import queryRequest from '../../queryRequests';

function useGetOptions() {
    const [select, SetSelect] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await queryRequest({
                method: "POST",
                headers: {
                    "Content-type": "text/plain"
                },
                body: JSON.stringify({
                    "name": "select-options",
                }),
            });
            const lists = result.map((element) => <option key={element.id} value={element.name}>{element.name}</option>);
            SetSelect(lists);
        };
        fetchData();
    }, []);

    return select;
};

export default useGetOptions;