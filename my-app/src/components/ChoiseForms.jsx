import EnterOrRecord from "./EnterOrRecord";
import EntriesForm from "./EntriesForm"
import RecordingForm from "./RecordingForm";
import { useState } from "react";
import Container from "./UI/container/Container";

function ChoiseForms() {
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

    let renderElement;

    if (!(functionalBody.entriesForm || functionalBody.recordingForm)) {
        renderElement = <EnterOrRecord
            onEntries={onHandlerChoiseEntries}
            onRecording={onHandlerChoiseRecording}
            className="groups-btn"
        />
    };

    if (functionalBody.entriesForm) {
        renderElement = <EntriesForm
            onBack={onHandlerChoiseEntries}
            className="form"
        />
    };

    if (functionalBody.recordingForm) {
        renderElement = <RecordingForm
            onBack={onHandlerChoiseRecording}
            className="form"
        />
    };

    return (
        <Container className="functional-conteiner">
            {renderElement}
        </Container>
    );
};

export default ChoiseForms;