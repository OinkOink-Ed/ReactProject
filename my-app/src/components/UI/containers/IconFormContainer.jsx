import Container from './Container';
import Input from "../input/Input";
// import Label from '../label/Label';
import IconsConteiner from './IconsConteiner';
import { useState } from 'react';
import GenFormElemConteiner from './GenFormElemConteiner';

function IconFormContainer({ children, onclick, src, value, lissentChange, ...props }) {
    const [component, SetComponent] = useState(false);

    //Использовать ещё одно состояние
    const [data, Setdata] = useState();

    function change(e) {
        Setdata(e.target.value);
        lissentChange(e.target.value, e.target.name);
    };

    function onHandlerClick(e) {
        e.preventDefault();
        SetComponent(!component);
    };

    return (
        <GenFormElemConteiner text={children}>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" {...props} value={data ? data : ""} onChange={change}></Input>
                <IconsConteiner src={src} name={props.name} handlerClick={onHandlerClick}></IconsConteiner>
                {component && <Container name={props.name}>АХАХАХАХАХХА</Container>}
            </Container>
        </GenFormElemConteiner >
    );
};

export default IconFormContainer