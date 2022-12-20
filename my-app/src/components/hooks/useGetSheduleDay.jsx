import { useState } from 'react';
import queryRequest from '../functions/queryRequests';
import { useMemo } from 'react';
import Button from '../UI/button/button';

function useGetSheduleDay(name) {
    const [result, SetResult] = useState();

    useMemo(() => {
        const fetchData = async () => {
            const result = await queryRequest(`http://oinkoink?name=${name}`, {
            });

            //Подумать над обработкой ошибок исходя из кода статуса

            if (result === 500) {
                SetResult(null);
            } else {
                const lists = result.map((element) => <Button key={element[name]} name={name} value={element[name]}>{element[name]}</Button>);
                SetResult(lists);
            }
        };
        fetchData();
    }, [name]);

    return result;
};

export default useGetSheduleDay;
