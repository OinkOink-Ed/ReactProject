import { useState } from "react";

function useCreateDataForm() {
    const [dataForm, setDataForm] = useState({});

    function createFormData(value, id) {
        setDataForm({ ...dataForm, [id]: value });
    };

    return [dataForm, createFormData];
};

export default useCreateDataForm;