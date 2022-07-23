import { Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Homepage from "./Homepage";
import Login from "./Login";
import Registrar from "./Registrar";
import RegistrarServicios from "./RegistrarServicios";
import AllServices from "./AllServices";


function Pages(){
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registrar />} />
            <Route path='registrarservicios' element={<RegistrarServicios/>}/>
            <Route path="servicios" element={<AllServices/>}/>
        </Routes>
    )
}

export default Pages;