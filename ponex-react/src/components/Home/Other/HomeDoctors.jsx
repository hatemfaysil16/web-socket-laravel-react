import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

function HomeDoctors(){
const [Item, NewItem]= useState(null);
const [listDoctor, NewListDoctor]= useState(null);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/achieved")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewItem(data.data);
    })
}, []);

useEffect(() => {
    fetch("http://127.0.0.1:8000/api/listDoctor")
    .then(response=>{
        return response.json();
    })
    .then(datas=>{
        NewListDoctor(datas.data);
    })
}, []);
    return (
        <div className="section page-content-first homeDoctors">
            <div className="container">
            {Item && Item.map((data)=>{
        return   <div key={data.id} className="text-center mb-2  mb-md-3 mb-lg-4">
                    <div  className="h-sub theme-color">{data.title}</div>
                    <h1>{data.subtitle}</h1>
                    <div className="h-decor"></div>
                </div>
            })}
            </div>
            <div className="container">
                <div className="text-center mb-2 mb-md-3">
            {Item && Item.map((data)=>{
            { parse (data.description) }
            })}
                </div>
            <div className="row">
                <div className="gallery-specialist gallery-isotope" id="gallery-specialist">

            {listDoctor && listDoctor.map((res)=>{
          return          <div className="col-auto" key={res.id}>
                            <div className="gallery-item ">
                                <div className="doctor-box text-center">
                                    <div className="doctor-box-photo" key={res.id}>
                                        <Link ><img src={res.image} className="img-fluid" alt=""/></Link>
                                    </div>
                                    <h5 className="doctor-box-name"><Link >{res.title}</Link></h5>
                                    <div className="doctor-box-position">{res.subtitle}</div>
                                    <div className=".doctor-box-bottom-home">
                                    <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
            })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeDoctors;