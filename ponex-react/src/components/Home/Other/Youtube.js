import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

function Youtube(){
const [Item, NewItem]= useState(null);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/youtube")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewItem(data.data);
    })
}, []);
    return (
     <div className="section">
    {Item && Item.map((youtube)=>{
	return		<div key={youtube.id} className="container pt-lg-2">
				<div className="row mt-2 mt-md-3 mt-lg-0">
					<div className="col-md-6">
                        { parse (youtube.description) }
						<div className="mt-2 mt-md-4"></div>
						<Link to={youtube.route} className="btn-link" data-toggle="modal" data-target="#modalBookingForm">{youtube.button}<i className="icon-right-arrow"></i></Link>
					</div>
					<div className="col-md-6 mt-3 mt-md-0">
						<div className="video-wrap embed-responsive embed-responsive-16by9">
							<iframe src="https://www.youtube.com/embed/8Djpsc66hKI?autoplay=0&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;start=70"></iframe>
						</div>
					</div>
				</div>
			</div>
    })}
		</div>

    )
}
export default Youtube;