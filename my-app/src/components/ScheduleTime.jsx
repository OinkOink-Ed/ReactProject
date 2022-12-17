import Container from "./UI/containers/Container";
import useGetSheduleTime from "./hooks/useGetSheduleTime";

function SheduleTime(props) {
    const data = useGetSheduleTime(props.name);

    console.log(data);

    return (
        <Container {...props}></Container>
    );
};

export default SheduleTime;