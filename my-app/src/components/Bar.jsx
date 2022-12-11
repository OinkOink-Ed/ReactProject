import Container from "./UI/containers/Container";

function Bar({ children, ...props }) {
    return (
        <Container {...props}>
            <Container className="text-bar">{children}</Container>
        </Container>
    );
};

export default Bar;