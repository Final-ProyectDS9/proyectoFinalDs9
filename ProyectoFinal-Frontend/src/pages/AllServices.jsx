import Container from "react-bootstrap/esm/Container";
import CardExample from "../components/CardExample";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from 'react';

function AllServices(){
    const [paginaActual, setPaginaActual] = useState(1);
    const total_paginas = 4;
    const [servicios, setServicios] = useState([]);

    const infoTemporal = [
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        }
    ];

    /*useEffect(()=>{
        setServicios(infoTemporal);
    },[]);

    const getTotalPages = ()=>{
		let cantTotal = servicios.length;
		return Math.ceil(cantTotal/total_page);
	}

	let serviciopPage = servicios.slice(
		(paginaActual - 1) * total_page, 
		paginaActual * total_page
	);*/

    return(
        <div>
            <NavigationBar/>
            <Container>
                <h1 className="text-center my-3">Servicios disponibles</h1>
                <p className='text-center'>Categoria</p>
                <hr/>

                <div className="d-flex justify-content-between flex-wrap">
                    {/* <Paginacion
                        pagina={paginaActual}
                        total={getTotalPages()}
                        onChange={(pagina)=>{
                            setPaginaActual(pagina)
                        }}
                    /> */}
                    {
                        infoTemporal.map(info=>(                       
                                <CardExample 
                                    portada={info.portada}
                                    perfil={info.perfil}
                                    nombre={info.nombre}
                                    cargo={info.cargo}
                                    desc={info.desc}
                                    precio={info.precio}
                                />                           
                        ))
                    }  
                </div>
            </Container>
            <Footer/>
        </div>
        )
}

export default AllServices;