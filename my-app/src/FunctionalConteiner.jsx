import { useEffect } from "react";
import { useState } from "react";
import ChoiseOfStep from "./ChoiseOfStep";

function FunctionalConteiner() {
    const [isEntrance, SetIsEntrance] = useState(false);
    const [isRecording, SetIsRecording] = useState(false);
    const [isChoice, SetIsChoice] = useState(true);

    function isEntrenceChoice() {
        SetIsEntrance(!isEntrance);
    };

    function isRecordingChoice() {
        SetIsRecording(!isRecording);
    };

    useEffect(() => {
        SetIsChoice(!isChoice);
    }, [isChoice]);

    if (isChoice) {
        return (
            <ChoiseOfStep
                onChangeEntrance={isEntrenceChoice}
                onChangeRecording={isRecordingChoice}
            />
        );
    }
};

export default FunctionalConteiner;