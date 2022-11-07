import Container from "./UI/container/Container";
import EnterOrRecord from "./EnterOrRecord";
import EntriesForm from "./EntriesForm";
import { useState } from "react";

function FunctionalContainer() {
    const [functionalBody, SetfunctionalBody] = useState({
        entriesForm: false,
        recordForm: false,
    });

    function onHandlerChange() {
        SetfunctionalBody({ ...functionalBody, entriesForm: !functionalBody.entriesForm });
    };

    if (functionalBody.entriesForm) {
        return (
            <Container className="align-items-center h100v justify-content-center d-flex">
                <EntriesForm className="entries_form"></EntriesForm>
            </Container>
        );
    };

    if (!(functionalBody.entriesForm || functionalBody.recordForm)) {
        return (
            <Container className="align-items-center h100v justify-content-center d-flex">
                <EnterOrRecord className="enter_or_record" onChange={onHandlerChange}></EnterOrRecord>
            </Container>
        );
    };
};

export default FunctionalContainer;