import Container from "./UI/containers/Container";
import useGetSheduleDay from "./hooks/useGetSheduleDay";

function SheduleDay(props) {
    const data = useGetSheduleDay(props.name);

    console.log(data);

    return (
        <Container {...props}></Container>
    );
};

export default SheduleDay;