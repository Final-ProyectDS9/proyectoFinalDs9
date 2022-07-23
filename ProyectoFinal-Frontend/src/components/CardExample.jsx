import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsFillCartPlusFill} from 'react-icons/bs';
import ImgPerfil from './ImgPerfil';

function CardExample(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '19rem' }} className='mb-5'>
        <Card.Img variant="top" src={props.portada} />
        <Card.Body>
          <div className='d-flex'>
            <ImgPerfil fuente={props.perfil}/>
            <Card.Title><br/>{props.nombre}<span className="gr-text fs-6">{props.cargo}</span></Card.Title>
          </div>
          <Card.Text>
            {props.desc}
          </Card.Text>
          <hr/>
          <div className='d-flex justify-content-between'>
            <BsFillCartPlusFill className='gr-text fs-3'/>
            <Card.Title>
              <span className='fs-6 text-uppercase'>Precio desde: </span>
              <span className='gr-text'>{'B/.'+props.precio}</span>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;