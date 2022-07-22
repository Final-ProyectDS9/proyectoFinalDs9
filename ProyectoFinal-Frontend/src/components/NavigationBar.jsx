import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import {FaUser} from 'react-icons/fa';
import {AiFillSetting, AiOutlineLogout} from 'react-icons/ai';
import {BsFillChatLeftFill} from 'react-icons/bs';
import ImgPerfil from './ImgPerfil';

export default function NavigationBar(props){
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav.Link as={Link} to="/">
                        <Navbar.Brand >SIGMA</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">                   
                            <Nav.Link as={Link} to="homepage">Notificaciones</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Tecnología</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Gastronomía
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Moda</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Ver todo
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="justify-content-end ">
                            <Nav className='perfildown'>
                            <NavDropdown
                                    title={
                                        <div className='d-flex'>
                                            <div className='px-2'>
                                                <span className="text-decoration-none fs-5" href="#">Didier Mosley </span><br />
                                                <span className='text-uppercase fs-6 gr-text'>Comprador</span>
                                            </div>


                                            <ImgPerfil fuente='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'/>
                                        </div>
                                    }
                                 id="">
                                <NavDropdown.Item><FaUser/> Perfil</NavDropdown.Item>
                                <NavDropdown.Item><AiFillSetting/> Configuración</NavDropdown.Item>
                                <NavDropdown.Item><BsFillChatLeftFill/> Chats</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item><AiOutlineLogout/> Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                                
                            
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet />
            </section>
        </>
    )
}