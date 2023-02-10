import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

function Achieved(){
const [ClinicFigures, NewClinicFigures]= useState(null);
const [good, Newgood]= useState([]);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/ClinicFigures")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewClinicFigures(data.data);
    })
},[]);

    return(
        <div className="section">
            <div className="container">
                <div className="title-wrap text-center">
                    {ClinicFigures && ClinicFigures.map((item,i) => {
                    return <>
                        <div className="h-sub theme-color">{item.title}</div>
                        <h2 className="h1">{item.subtitle}</h2>
                    </>   
                    })}
                    </div>
                    <div className="h-decor"></div>
                </div>
                <div className="row d-block js-counter-carousel">
                    {ClinicFigures && ClinicFigures.map((item,i) => {
                    return    <div key={item.id} className="col">
                            <div className="counter-box">
                                <div className="counter-box-icon"><i className={item.icon}></i></div>
                                <div className="counter-box-number"><span className="count" data-to={item.count} data-speed="1500">0</span>+</div>
                                <div className="decor"></div>
                                <div className="counter-box-text">{ parse (item.description) }</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
    )
}
export default Achieved;