import Container from "./Container";
import Button from "../button/button";
import Picture from "../picture/Picture";

function ContainerIColendar(props) {
    return (
        <Container className="input-calendar-icons">
            <Button className="btn-img" onClick={props.clickOnChange} >
                <Picture className="input-icons" src={props.src} name={props.name}></Picture>
            </Button>
        </Container>
    );
};

export default ContainerIColendar;