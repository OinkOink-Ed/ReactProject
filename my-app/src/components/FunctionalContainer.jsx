import Container from "./UI/container/Container";
import EnterOrRecord from "./EnterOrRecord";
import EntriesForm from "./EntriesForm";
import { useState } from "react";

function FunctionalContainer() {
    const [functionalBody, SetfunctionalBody] = useState({
        entriesForm: false,
        recordForm: false,
    });

    function onHandlerChange(e) {
        e.preventDefault();
        SetfunctionalBody({ ...functionalBody, entriesForm: !functionalBody.entriesForm });
    };

    if (functionalBody.entriesForm) {
        return (
            <Container className="functional-conteiner">
                <EntriesForm className="entries-form" onChange={onHandlerChange}></EntriesForm>
            </Container>
        );
    };

    if (!(functionalBody.entriesForm || functionalBody.recordForm)) {
        return (
            <Container className="functional-conteiner">
                <EnterOrRecord onChange={onHandlerChange}></EnterOrRecord>
            </Container>
        );
    };
};

export default FunctionalContainer;