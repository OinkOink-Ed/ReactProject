import Container from "../container/Container";
import "../bar/Bar.css"

function Bar({ children, ...props }) {
    return (
        <Container {...props}>
            <Container className="text_bar_container">{children}</Container>
        </Container>
    );
};

export default Bar;