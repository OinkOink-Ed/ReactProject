import Container from './Container';
import Input from "../input/Input";
import IconsConteiner from './IconsConteiner';
import { useState } from 'react';
import GenFormElemConteiner from './GenFormElemConteiner';
import Shedules from '../../Shedules';

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
        SetComponent(true);
    };

    console.log(component);

    return (
        <GenFormElemConteiner text={children}>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" {...props} value={data ? data : ""} onChange={change}></Input>
                <IconsConteiner src={src} name={props.name} clickOnChange={onHandlerClick}></IconsConteiner>
                {component && <Shedules name={props.name} lissentChange={change}>АХАХАХАХАХХА</Shedules>}
            </Container>
        </GenFormElemConteiner >
    );
};

export default IconFormContainer