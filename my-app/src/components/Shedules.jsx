import SheduleDay from "./ScheduleDay";
import SheduleTime from "./ScheduleTime";

function Shedules(props) {

    let renderElement;

    if (props.name === "date") {
        renderElement = <SheduleDay {...props}></SheduleDay>
    };

    if (props.name === "time") {
        renderElement = <SheduleTime {...props}></SheduleTime>
    };

    return (
        renderElement
    );
};

export default Shedules;