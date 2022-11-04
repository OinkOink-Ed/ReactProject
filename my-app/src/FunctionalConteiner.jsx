import { useState } from "react";
import ChoiseOfStep from "./ChoiseOfStep";
import AdminEntriesForm from "./AdminEntriesForm";
import FormOfRecording from "./FormOfRecording";

function FunctionalConteiner() {
    const [isEntrance, SetIsEntrance] = useState(false);
    const [isRecording, SetIsRecording] = useState(false);

    function isEntrenceChoice() {
        SetIsEntrance(!isEntrance);
    };

    function isRecordingChoice() {
        SetIsRecording(!isRecording);
    };

    if (!(isEntrance || isRecording)) {
        return (
            <ChoiseOfStep
                onChangeEntrance={isEntrenceChoice}
                onChangeRecording={isRecordingChoice}
            />
        );
    }

    if (isEntrance) {
        return (
            <AdminEntriesForm
                onChangeEntrance={isEntrenceChoice}
            />
        );
    };

    if (isRecording) {
        return (
            <FormOfRecording
                onChangeRecording={isRecordingChoice}
            />
        );
    };
};

export default FunctionalConteiner;