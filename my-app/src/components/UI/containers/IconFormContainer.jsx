import Container from './Container';
import Input from "../input/Input";
// import Label from '../label/Label';
import IconsConteiner from './IconsConteiner';
import { useState } from 'react';
import GenFormElemConteiner from './GenFormElemConteiner';

function IconFormContainer({ children, onclick, src, value, ...props }) {
    const [component, SetComponent] = useState(false);

    function onHandlerClick(e) {
        e.preventDefault();
        SetComponent(!component);
    };

    return (
        <GenFormElemConteiner text={children}>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" {...props} value={value ? value : "12.12.2022"} required></Input>
                <IconsConteiner src={src} name={props.name} handlerClick={onHandlerClick}></IconsConteiner>
                {component && <Container name={props.name}>АХАХАХАХАХХА</Container>}
            </Container>
        </GenFormElemConteiner>
    );
};

export default IconFormContainer