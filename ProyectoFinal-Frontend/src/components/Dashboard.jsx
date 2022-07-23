import  Button  from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar";
import {GrFormNext} from 'react-icons/gr';
import SectionCards from "./SectionCards";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
        <div className="cont-bg2">
            <NavigationBar />
            <Container>
                <div className="main-info d-flex align-items-end">
                    <div className="">
                        <h1 className="text-light pb-3">Bienvenido a <span className="text-dark">SIGMA</span></h1>
                        <div className="pb-3">
                                <Link to='/registrarservicios'>
                                    <Button variant="dark" className="mw-15">Iniciar </Button><GrFormNext className="fs-3" />
                                </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <SectionCards/>
        </>
    )
}