import Container from './Container';
import Input from "../input/Input";
import Label from '../label/Label';
import Button from '../button/button';
import Picture from '../picture/Picture';

function IconFormContainer({ textLabel, holderInput, typeInput, onclick }) {
    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{textLabel}</Label>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" placeholder={holderInput} type={typeInput} readOnly></Input>
                <Container className="input-calendar-icons">
                    <Button className="btn-img" onClick={onclick}>
                        <Picture className="input-icons" src="./icons/calendar.png"></Picture>
                    </Button>
                </Container>
            </Container>
        </Container >
    );
};

export default IconFormContainer