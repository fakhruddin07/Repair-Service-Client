import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServiceData.css';

const ServiceData = () => {

    const [services, setServices] = useState([]);
   
    useEffect(() => {
        fetch('https://arcane-caverns-85014.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="services">
            <div className="container">
                <div className="row my-5 section-header text-center">
                    <h1 class="text-center text-dark">OUR SERVICES</h1>
                </div>
                <div className="card-deck row">
                   {
                       services.map(service=> <Service service={service}></Service>)
                   }
                </div>
            </div>
        </section>
    );
};

export default ServiceData;