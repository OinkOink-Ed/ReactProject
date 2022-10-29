import { Button } from "react-bootstrap";

function ChoiseOfStep(props) {

  function onClickChangeEntrance() {
    props.onChangeEntrance();
  };

  function onClickChangeRerording() {
    props.onChangeRecording();
  };

  return (
    <div id="choiseOfStep" className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="d-flex justify-content-center flex-wrap">
        <Button variant="success" size="sm" onClick={onClickChangeEntrance}>Войти</Button>
        <Button variant="primary" size="sm" onClick={onClickChangeRerording}>Записаться на прием</Button>
      </div>
    </div>
  );
};

export default ChoiseOfStep;