import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Jumbotron = () => {
    return (
        <div className="container-fluid py-4 bg-black">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula et orci eu fringilla.
                        Etiam pretium, neque sed accumsan aliquam, enim nibh imperdiet dui, id t </p>
                    <button className="btn btn-primary btn-lg" type="button">Call To action!</button>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron;