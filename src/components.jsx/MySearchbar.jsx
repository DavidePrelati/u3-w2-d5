import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MySearchbar = (props) => {
  const navigation = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigation(`/MyMeteo/${props.city}`);
  };
  return (
    <Container className=" d-flex flex-column justify-content-center align-items-center mt-4">
        <h1 className="mb-5">Meteo Epicode</h1>
      <Form className="mb-3 w-75  d-flex " onSubmit={(e) => onSubmit(e)}>
        <Button id="basic-addon1" className="mx-2">
          Cerca
        </Button>
        <Form.Control
          placeholder="Inserisci una città per vedere le sue temperature"
          required
          aria-describedby="basic-addon1"
        
          onChange={(e) => props.setCity(e.target.value)}
        />
      </Form>
    </Container>
  );
};
export default MySearchbar;