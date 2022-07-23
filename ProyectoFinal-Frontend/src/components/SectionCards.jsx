import Container from 'react-bootstrap/Container';
import CardExample from './CardExample';
import Button from 'react-bootstrap/esm/Button';
import CategoryCard from './CategoryCard';
import PauseOnHover from '../classes/PauseOnHover';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CenterMode from '../classes/AutoPlay';
import { Link } from 'react-router-dom';


function SectionCards(){
    const categ = [
        {
            titulo:'Software',
            img: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080087611-800x400.jpg'
        },
        {
            titulo:'Gastronomia',
            img:'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg'
        },
        {
            titulo: 'Jardineria',
            img:'https://i.blogs.es/856db6/istock_42446018_medium/450_1000.jpg'
        },
        {
            titulo:'Abogados',
            img:'https://lh5.googleusercontent.com/KRN9bQUaOmq_e50p21vq2A1XMV07Lb1RZpW6_vtzJRj6wr7fMF0B9j8CbYZLGcKSoLxfcweCMr2PgsE678GDOaQeLCxnXsVTKmR52BTncWtKTgpuY_yOQZQ6jbsaE2zJuizEHPJ3'
        },
        {
            titulo: 'Recursos Humanos',
            img:'https://thumbs.dreamstime.com/b/successful-business-group-people-work-office-successful-happy-business-group-people-work-office-131980614.jpg'
        },
        {
            titulo: 'E-Commerce',
            img:'https://conviertemas.com/wp-content/uploads/2021/11/Miniaturas-CMAS.png'
        }
    ]

    const infoTemporal = [
        {
            portada:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil:'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre:'Jostin Gamboa ',
            cargo:'Software Dev',
            desc:'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio:'25.00'
        },
        {
            portada:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil:'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre:'Jostin Gamboa ',
            cargo:'Software Dev',
            desc:'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio:'25.00'
        },
        {
            portada:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil:'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre:'Jostin Gamboa ',
            cargo:'Software Dev',
            desc:'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio:'25.00'
        }
    ]

    useEffect(function () {
        buscarServicios();
    },[]);

    const buscarServicios = async e=>{
        let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
        e.preventDefault();
        const resp = await axios.get(url)
        .then(resp=> setServicios(resp.data))
        console.log(resp.data);
        // document.write(resp.data);
    }

    let key=0;

    return(
        <div className="" style={{background: "#EBEBEB"}}>
            <Container>
                <h2 className='gr-text text-center p-4'>servicios OFERTADOS<hr/></h2>
                <PauseOnHover/>

                <div className='d-flex justify-content-center my-5'>
                    <Link to='/servicios'>
                        <Button variant="dark" className='text-uppercase'>Conoce Más</Button>
                    </Link>
                </div>

                <h2 className='gr-text text-center p-4'>Categorias<hr/></h2>
                
                <div className='d-flex justify-content-between flex-wrap'>
                    {
                        categ.map((cat) => {
                            return (
                                <CategoryCard cat={cat} />
                            )
                        })
                    }
                </div>

            </Container>
            <section style={{ background: "#fff" }}>
                <Container>
                    <h2 className='gr-text text-center p-4'>Camaroncitos<hr /></h2>
                    <CenterMode/>
                </Container>
            </section>
        </div>
    )
}

export default SectionCards