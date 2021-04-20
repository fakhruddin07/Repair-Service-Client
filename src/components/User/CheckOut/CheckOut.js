import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../../App';

const CheckOut = () => {
    const [service , setService] = useContext(ServiceContext);
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [serviceDetail, setServiceDetail] = useState({
        name: "",
        price: "",
        image: ""

    });
    useEffect(() => {
        fetch('https://arcane-caverns-85014.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    const result = services.map(ser => {
        if (ser._id === id) {
            serviceDetail.name = ser.name;
            serviceDetail.price = ser.price;
            serviceDetail.image = ser.imageURL;
            service.name = ser.name;
            service.price = ser.price;
        }
    })

     console.log(service.price)
    
    return (
        <>
            <div className="container">
                <h1 class="my-5">Check Out</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><img class="img-fluid w-25" src={serviceDetail.image} alt=""/></th>
                            <td><h3>{service.name}</h3></td>
                            <td><h4>{service.price}</h4></td>
                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td>{service.price}</td>
                        </tr>
                    </tbody>
                </table>
                {/* <Link to="/user"><p class="text-center"><button class="btn btn-danger">CheckOut</button></p></Link> */}
            </div>
        </>
    );
};

 

export default CheckOut;