import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FormTitle from './FormTitle';


function ModalRegisterCategory(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Registrar Categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">
          <FormTitle titulo=' '/>
        </Modal.Title>
        <Form>
          <Form.Group>
            <Form.Label>Introduzca una Categoria</Form.Label>
            <Form.Control placeholder='Nueva categoria...'/>
          </Form.Group>

          <div className='d-flex align-items-center boton my-2'>
                <Button size="lg" type="submit" className='boton border-0'>
                    Guardar
                </Button>
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRegisterCategory;