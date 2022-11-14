import Container from "./UI/container/Container";

function Bar({ children, ...props }) {
    return (
        <Container {...props}>
            <Container className="text-bar">{children}</Container>
        </Container>
    );
};

export default Bar;