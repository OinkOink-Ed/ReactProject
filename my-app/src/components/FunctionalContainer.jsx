import Container from "./UI/container/Container";
import EnterOrRecord from "./EnterOrRecord";

function FunctionalContainer() {
    return (
        <Container className="choise_of_container">
            <EnterOrRecord className="enter_or_record"></EnterOrRecord>
        </Container>
    );
};

export default FunctionalContainer;