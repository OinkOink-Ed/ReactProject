import { useState } from "react";
import ChoiseOfStep from "./ChoiseOfStep";
import AdminEntriesForm from "./AdminEntriesForm";

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
            <div className="min-vh-100 align-self-center">
                <ChoiseOfStep
                    onChangeEntrance={isEntrenceChoice}
                    onChangeRecording={isRecordingChoice}
                />
            </div>
        );
    }

    if (isEntrance) {
        return (
            <AdminEntriesForm />
        );
    };

    if (isRecording) {
        return (
            <div>
                Это форма для записи
            </div>
        );
    };
};

export default FunctionalConteiner;