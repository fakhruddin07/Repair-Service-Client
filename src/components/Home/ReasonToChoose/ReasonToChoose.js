import React from 'react';
import './ReasonToChoose.css';
import qualityGuarantee from '../../../Images/qualityGuarantee.jpg';
import corporateServices from '../../../Images/corporateServices.jpg';
import customerService from '../../../Images/customerServices.jpg';

const ReasonToChoose = () => {
    return (
        <div>
            <div className="container-fluid bg-secondary mt-5">
                <div className="container">
                    <h1 class="text-center my-5">WHY CHOOSE US</h1>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <img className="img" src={qualityGuarantee} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4>QUALITY GUARANTEE</h4>
                            <p class="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <h4>CORPORATE SERVICE</h4>
                            <p class="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                            <a href="#">Read More</a>
                        </div>
                        <div className="col-md-6">
                            <img className="img" src={corporateServices} alt="" />
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <img className="img" src={customerService} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4>CUSTOMER SERVICE</h4>
                            <p class="text-wrap" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi enim omnis quasi iusto nam totam.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonToChoose;