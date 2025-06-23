import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Jumbotron = () => {
    return (
        <div className="container-fluid py-4 bg-black" data-bs-theme="dark">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-light">Descubre Nuestros Servicios Exclusivos</h1>
                    <p className="col-md-8 fs-4 text-light">Bienvenido a ZooWeb, donde ofrecemos soluciones innovadoras diseñadas para impulsar tu éxito. Nuestros servicios premium están representados en estas tres tarjetas clave que resumen lo que podemos hacer por ti:</p>
                    <button className="btn btn-info btn-lg" type="button">Agenda tu Visita</button>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron;