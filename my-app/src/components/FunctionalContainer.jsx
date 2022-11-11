import Container from "./UI/container/Container";
import EnterOrRecord from "./EnterOrRecord";
import EntriesForm from "./EntriesForm";
import RecordingForm from "./RecordingForm";
import { useState } from "react";

function FunctionalContainer(props) {
    const [functionalBody, SetfunctionalBody] = useState({
        entriesForm: false,
        recordingForm: false,
    });

    function onHandlerChoiseEntries(e) {
        e.preventDefault();
        SetfunctionalBody({ ...functionalBody, entriesForm: !functionalBody.entriesForm });
    };

    function onHandlerChoiseRecording(e) {
        e.preventDefault();
        SetfunctionalBody({ ...functionalBody, recordingForm: !functionalBody.recordingForm });
    };

    if (!(functionalBody.entriesForm || functionalBody.recordingForm)) {
        return (
            <Container className="functional-conteiner">
                <EnterOrRecord className="groups-btn"
                    onRecording={onHandlerChoiseRecording}
                    onEntries={onHandlerChoiseEntries}
                ></EnterOrRecord>
            </Container>
        );
    };

    if (functionalBody.recordingForm) {
        return (
            <Container {...props}>
                <RecordingForm onRecording={onHandlerChoiseRecording}>
                </RecordingForm>
            </Container>
        );
    };

    if (functionalBody.entriesForm) {
        return (
            <Container {...props}>
                <EntriesForm className="form"
                    onEntries={onHandlerChoiseEntries}
                ></EntriesForm>
            </Container>
        );
    };
};

export default FunctionalContainer;