import Container from './Container';
import Input from "../input/Input";
import Label from '../label/Label';
import Button from '../button/button';
import Picture from '../picture/Picture';

function IconFormContainer({ textLabel, holderInput, typeInput, onclick, src }) {
    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{textLabel}</Label>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" placeholder={holderInput} type={typeInput} readOnly></Input>
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