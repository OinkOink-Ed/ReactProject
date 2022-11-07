import Container from "../container/Container";

function Bar({ children, ...props }) {
    return (
        <Container {...props}>
            <Container className="text_bar_container p-1 text-align-center">{children}</Container>
        </Container>
    );
};

export default Bar;