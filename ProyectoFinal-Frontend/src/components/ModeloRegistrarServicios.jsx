import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import FormTitle from './FormTitle';

function ModeloRegistrarServicios(){
    return(
        <Form className="p-5 ">
            <FormTitle titulo="Registro de Servicios"/>

            <Form.Group className='mb-3'>
                <Form.Label>Nombre del Servicio</Form.Label>
                <Form.Control type="" placeholder='ejm: Desarrollo Web 💻' className='border-0'/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Descripción del Servicio</Form.Label>
                <Form.Control as='textarea' rows={3} className='border-0'/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Precio del Servicio</Form.Label>
                <Form.Control type="text" placeholder="B/.12.50" className='border-0'/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Tipo de Servicio</Form.Label>
                <Form.Select>
                    <option>Programación</option>
                    <option>Jardinería</option>
                    <option>Abogados</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Control type="file" className=''/>
            </Form.Group>
            
            <div className='d-flex align-items-center boton'>
                <Button size="lg" type="submit" className='boton border-0'>
                    Guardar
                </Button>
            </div>
            
        </Form>
    )
}

export default ModeloRegistrarServicios;