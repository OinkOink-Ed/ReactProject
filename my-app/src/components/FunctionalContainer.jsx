import Container from "./UI/container/Container";
import EnterOrRecord from "./EnterOrRecord";
import { useState } from "react";

function FunctionalContainer() {
    const [functionalBody, SetfunctionalBody] = useState({
        entriesForm: false,
        recordForm: false,
    });

    if (!(functionalBody.entriesForm || functionalBody.recordForm)) {
        return (
            <Container className="choise_of_container">
                <EnterOrRecord className="enter_or_record"></EnterOrRecord>
            </Container>
        );
    };
};

export default FunctionalContainer;