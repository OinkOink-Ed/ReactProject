import Container from './Container';
import Input from "../input/Input";
import Label from '../label/Label';
import IconsConteiner from './IconsConteiner';
import { useState } from 'react';

function IconFormContainer({ children, onclick, src, ...props }) {
    const [component, SetComponent] = useState(false);

    function onHandlerClick(e) {
        e.preventDefault();
        SetComponent(!component);
    };

    return (
        <Container className="groups-elemnts-form">
            <Label className="label-input">{children}</Label>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" {...props} readOnly></Input>
                <IconsConteiner src={src} name={props.name} handlerClick={onHandlerClick}></IconsConteiner>
                {component && <Container name={props.name}>АХАХАХАХАХХА</Container>}
            </Container>
        </Container >
    );
};

export default IconFormContainer