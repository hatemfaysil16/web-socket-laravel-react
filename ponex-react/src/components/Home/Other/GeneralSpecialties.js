import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function GeneralSpecialties(){
const [GeneralSpecialties_slider_one, NewGeneralSpecialties_slider_one]= useState(null);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/GeneralSpecialties_slider_one")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewGeneralSpecialties_slider_one(data.data);
    })
}, []);
const [GeneralSpecialties_slider_tow, NewGeneralSpecialties_slider_tow]= useState(null);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/GeneralSpecialties_slider_tow")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewGeneralSpecialties_slider_tow(data.data);
    })
}, []);
const [GeneralSpecialties_image_one, NewGeneralSpecialties_image_one]= useState(null);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/GeneralSpecialties_image_one")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewGeneralSpecialties_image_one(data.data);
    })
}, []);
const [GeneralSpecialties_image_tow, NewGeneralSpecialties_image_tow]= useState(null);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/GeneralSpecialties_image_tow")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewGeneralSpecialties_image_tow(data.data);
    })
}, []);
    return(
        <div className="section">
            <div className="container-fluid px-0">
                <div className="title-wrap text-center">
                    <div className="h-sub theme-color">What we offer</div>
                    <h2 className="h1">General Specialties</h2>
                    <div className="h-decor"></div>
                </div>

                <div className="row no-gutters services-box-wrap services-box-wrap-desktop">
                    <div className="col-4 order-1">

                        <div className="service-box-rotator js-service-box-rotator">
                            {GeneralSpecialties_slider_one && GeneralSpecialties_slider_one.map((slider1) => {
                          return  <div key={slider1.id} className="service-box service-box-greybg service-box--hiddenbtn">
                                <div className="service-box-caption text-center">
                                    <div className="service-box-icon"><i className={slider1.icon}></i></div>
                                    <div className="service-box-icon-bg"><i className={slider1.icon}></i></div>
                                    <h3 className="service-box-title">{slider1.title}</h3>
                                    <p>{slider1.subtitle}</p>
                                    <div className="btn-wrap"><Link to={slider1.route} className="btn"><i className="icon-right-arrow"></i><span>{slider1.button}</span><i className="icon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                            })}


                        </div>
                    </div>

                    {GeneralSpecialties_image_one && GeneralSpecialties_image_one.map((FunGeneralSpecialties) => {
                 return   <div key={FunGeneralSpecialties.id} className="col-8 order-2">
                        <div className="service-box">
                            <div className="service-box-image" data-bg={FunGeneralSpecialties.image}></div>
                            <div className="service-box-caption text-center w-50 ml-auto">
                                <h3 className="service-box-title">{FunGeneralSpecialties.title}</h3>
                                <p>{FunGeneralSpecialties.subtitle}</p>
                                <div className="btn-wrap"><a to={FunGeneralSpecialties.route} className="btn"><i className="icon-right-arrow"></i><span>{FunGeneralSpecialties.button}</span><i className="icon-right-arrow"></i></a></div>
                            </div>
                        </div>
                    </div>
                    })}

                    {GeneralSpecialties_image_tow && GeneralSpecialties_image_tow.map((GeneralSpecialties_image_tow) => {
                  return  <div key={GeneralSpecialties_image_tow.id} className="col-8 order-3 order-lg-4 order-xl-3">
                        <div className="service-box">
                            <div className="service-box-image" data-bg={GeneralSpecialties_image_tow.image}></div>
                            <div className="service-box-caption text-center w-50 ml-auto">
                                <h3 className="service-box-title">{GeneralSpecialties_image_tow.title}</h3>
                                <p>{GeneralSpecialties_image_tow.subtitle}</p>
                                <div className="btn-wrap"><Link to={GeneralSpecialties_image_tow.route} className="btn"><i className="icon-right-arrow"></i><span>{GeneralSpecialties_image_tow.button}</span><i className="icon-right-arrow"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    })}
                    <div className="col-4 order-5">
                        <div className="service-box-rotator js-service-box-rotator">
                            {GeneralSpecialties_slider_tow && GeneralSpecialties_slider_tow.map((slider2) => {
                        return    <div key={slider2.id} className="service-box service-box-greybg service-box--hiddenbtn">
                                <div className="service-box-caption text-center">
                                    <div className="service-box-icon"><i className={slider2.icon}></i></div>
                                    <div className="service-box-icon-bg"><i className={slider2.icon}></i></div>
                                    <h3 className="service-box-title">{slider2.title}</h3>
                                    <p>{slider2.subtitle}</p>
                                    <div className="btn-wrap"><Link to={slider2.route} className="btn"><i className="icon-right-arrow"></i><span>{slider2.button}</span><i className="icon-right-arrow"></i></Link></div>
                                </div>
                            </div>
                            })}
                        </div>
                    </div>
                </div>



                
            </div>
        </div>
    )
}
export default GeneralSpecialties;