import Container from './Container';
import Input from "../input/Input";
import Label from '../label/Label';
import Button from '../button/button';
import Picture from '../picture/Picture';

function IconFormContainer({ children, onclick, src, ...props }) {
    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{children}</Label>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" {...props} readOnly></Input>
                <Container className="input-calendar-icons">
                    <Button className="btn-img" onClick={onclick}>
                        <Picture className="input-icons" src={src}></Picture>
                    </Button>
                </Container>
            </Container>
        </Container >
    );
};

export default IconFormContainer