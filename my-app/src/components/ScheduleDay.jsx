import Container from "./UI/containers/Container";
import useGetSheduleDay from "./hooks/useGetSheduleDay";

function SheduleDay({ lissentChange, ...props }) {
    const data = useGetSheduleDay(props.name);

    function onHandlerClick(e) {
        e.preventDefault();
        lissentChange(e.target.value, e.target.name);
    };

    return (
        <Container {...props} onClick={onHandlerClick}>{data}</Container>
    );
};

export default SheduleDay;