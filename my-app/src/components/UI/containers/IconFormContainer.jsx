import Container from './Container';
import Input from "../input/Input";
import IconsConteiner from './IconsConteiner';
import { useState } from 'react';
import GenFormElemConteiner from './GenFormElemConteiner';
import Shedules from '../../Shedules';

function IconFormContainer({ children, src, value, lissentChange, ...props }) {
    const [component, SetComponent] = useState(false);

    //Использовать ещё одно состояние
    // const [data, Setdata] = useState();

    // function change(e) {
    //     Setdata(e.target.value);
    //     lissentChange(e.target.value, e.target.name);
    // };

    function onHandlerClick(e) {
        e.preventDefault();
        SetComponent(true);
    };

    return (
        <GenFormElemConteiner text={children}>
            <Container className="groups-input-icons">
                <Input className="custom-input-icons" {...props} value={value ? value : ""} onChange={lissentChange}></Input>
                <IconsConteiner src={src} name={props.name} clickOnChange={onHandlerClick}></IconsConteiner>
                {component && <Shedules name={props.name} lissentChange={lissentChange}></Shedules>}
            </Container>
        </GenFormElemConteiner >
    );
};

export default IconFormContainer