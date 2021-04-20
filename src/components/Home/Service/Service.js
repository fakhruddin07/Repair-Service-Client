import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    return (
        <>
            <div className="col-md-4 mb-5">
                <div class="card shadow-sm" style={{overflow:"hidden"}}>
                <img className="card-img-top img-fluid w-100" src={service.imageURL} alt="" />
                    <div className="card-header d-flex  align-items-center">                      
                        <div>
                            <h6 className="text-dark">{service.name}</h6>
                            <p className="m-0">{service.description}</p>
                            <Link to={`user/${service._id}`}><button class="text-center btn btn-success">Purchase Now</button></Link> 
                        </div>
                    </div>
                    {/* <div className="card-body">
                        <h5>{title}</h5>
                        <p className="card-text text-secondary mt-4">{description}</p>
                    </div>
                    <img src={service.imageURL} class="card-img-top" alt="..." /> */}

                </div>
            </div>
            {/* <div class="card-body">
                            <h3 class="card-title text-center">{service.name}</h3>
                            <p>{service.description}</p> 
                            <Link to={`user/${service._id}`}><button class="text-center btn btn-success">Purchase Now</button></Link>         
                        </div> */}
        </>
    );
};

export default Service;