import { Button, Container } from "react-bootstrap";

function ChoiseOfStep(props) {

  function onClickChangeEntrance() {
    props.onChangeEntrance();
  };

  function onClickChangeRerording() {
    props.onChangeRecording();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center flex-wrap align-content-center">
      <Button variant="success" size="sm"
        onClick={onClickChangeEntrance}>Войти</Button>
      <Button variant="primary" size="sm"
        onClick={onClickChangeRerording}>Записаться на прием</Button>
    </Container>
  );
};

export default ChoiseOfStep;