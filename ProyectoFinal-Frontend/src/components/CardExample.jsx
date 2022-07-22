import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsFillCartPlusFill} from 'react-icons/bs';
import ImgPerfil from './ImgPerfil';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '19rem' }} className='mb-5'>
        <Card.Img variant="top" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe" />
        <Card.Body>
          <div className='d-flex'>
            <ImgPerfil fuente='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'/>
            <Card.Title>Jostin Gamboa <br /><span className="gr-text fs-6">Software Dev</span></Card.Title>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <hr/>
          <div className='d-flex justify-content-between'>
            <BsFillCartPlusFill className='gr-text fs-3'/>
            <Card.Title>
              <span className='fs-6 text-uppercase'>Precio desde: </span>
              <span className='gr-text'>B/.25.00</span>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;