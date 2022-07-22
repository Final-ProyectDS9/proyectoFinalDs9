import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import FormTitle from './FormTitle';

export default function ModeloLogin(){
    return(
        <Form className="p-5 ">
            <FormTitle titulo="Bienvenido a"/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Introduce el correo" className='border-0'/>
                <Form.Text className="text-muted">
                    Tranqui, nunca compartimos tus datos ;)
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Pon la contraseña aqui" className='border-0'/>
            </Form.Group>
            
            <div className='d-flex align-items-center '>
                <Button size="lg" type="submit" className='boton border-0'>
                    Iniciar Sesión
                </Button>
            </div>
            
            <Form.Group className='text-center'>
                <Form.Text>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></Form.Text>
            </Form.Group>
        </Form>
    )
}