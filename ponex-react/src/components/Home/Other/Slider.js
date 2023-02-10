import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Slider(){
const [Item, NewItem]= useState(null);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/service/slider")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        NewItem(data.data);
    })
}, []);
    return(
		<div className="section mt-0">

			<div id="mainSliderWrapper">
				<div className="loading-content">
					<div className="inner-circles-loader"></div>
				</div>
				<div className="main-slider arrows-white arrows-bottom"  id="mainSlider" data-slick='{"arrows": false, "dots": false}'>
                    {Item && Item.map((slider)=>{
            return	<div className="slide">
						<div className="img--holder" data-animation="kenburns" data-bg={slider.image}></div>
						<div className="slide-content center">
							<div className="vert-wrap container">
								<div className="vert">
									<div className="container">
										<div className="slide-txt1 animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1s">{slider.title}<br/><b>{slider.subtitle}</b></div>
										<div className="slide-txt2" data-animation="fadeInUp" data-animation-delay="1.5s">{slider.description}</div>
										<div className="slide-btn"><Link to="" className="btn btn-white" data-animation="fadeInUp" data-animation-delay="2s"><i className="icon-right-arrow"></i><span>{slider.button}</span><i className="icon-right-arrow"></i></Link></div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    })}
				</div>
			</div>
		</div>
    )
}
export default Slider;