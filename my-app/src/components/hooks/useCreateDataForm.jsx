import { useState } from "react";

// формируем данные формы для отправки на сервер

function useCreateDataForm() {
    const [dataForm, setDataForm] = useState({});

    function createFormData(value, id) {
        setDataForm({ ...dataForm, [id]: value });
    };

    return [dataForm, createFormData];
};

export default useCreateDataForm;