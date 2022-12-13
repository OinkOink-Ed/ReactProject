import Container from './Container';
import Input from "../input/Input";
import Label from '../label/Label';
import IconsConteiner from './IconsConteiner';

function IconFormContainer({ children, onclick, src, ...props }) {
    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{children}</Label>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" {...props} readOnly></Input>
                <IconsConteiner src={src} onClick={onclick}></IconsConteiner>
            </Container>
        </Container >
    );
};

export default IconFormContainer