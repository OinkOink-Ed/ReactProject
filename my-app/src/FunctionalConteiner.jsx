import { useState } from "react";
import ChoiseOfStep from "./ChoiseOfStep";

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
            <div>
                Это форма для входа
            </div>
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