import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import FormTitle from './FormTitle';

function ModeloRegistrar(){
    return(
        <Form className="p-5 ">
            <FormTitle titulo="Regístrate en"/>

            <div className='d-flex justify-content-between'>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control placeholder='Fulano Gamboa' className='border-0'/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control type='date' className='border-0'/>
                </Form.Group>
            </div>
            <Form.Group className='mb-3'>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="" placeholder='777-0000'  className='border-0'/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Select>
                    <option>Vendedor</option>
                    <option>Comprador</option>
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="tucorreo@ejemplo.com" className='border-0'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Crea una contraseña aqui" className='border-0'/>
            </Form.Group>
            
            <div className='d-flex align-items-center boton'>
                <Button size="lg" type="submit" className='boton border-0'>
                    Registrarse
                </Button>
            </div>
            
            <Form.Group className='text-center'>
                <Form.Text>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></Form.Text>
            </Form.Group>
        </Form>
        )
}

export default ModeloRegistrar;