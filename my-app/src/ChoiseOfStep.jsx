import "./ChoiseOfStep.scss";
import { Button } from "react-bootstrap";

function ChoiseOfStep() {
  return(
    <div    id        = "choiseOfStep" className = "d-flex justify-content-center align-items-center min-vh-100">
    <div    className = "d-flex justify-content-center flex-wrap">
    <Button variant   = "success" size           = "lg">Войти</Button>
    <Button variant   = "primary" size           = "lg">Записаться на прием</Button>
      </div>
    </div>
  );
};

export default ChoiseOfStep;