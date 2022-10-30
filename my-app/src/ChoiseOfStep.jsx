import { Button } from "react-bootstrap";

function ChoiseOfStep(props) {

  function onClickChangeEntrance() {
    props.onChangeEntrance();
  };

  function onClickChangeRerording() {
    props.onChangeRecording();
  };

  return (
    <>
      <Button variant="success" size="sm"
        onClick={onClickChangeEntrance}>Войти</Button>
      <Button variant="primary" size="sm"
        onClick={onClickChangeRerording}>Записаться на прием</Button>
    </>
  );
};

export default ChoiseOfStep;