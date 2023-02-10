import { useParams ,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

function Specialties(){
    let {subslug} = useParams();
	let NewSub = useParams()['slug'];
	let NewSubSub = useParams()['subslug'];
	// console.log(useParams());
    const [posts, post]= useState();
	const FetchData = async(e)=>{
		await axios.get("http://127.0.0.1:8000/api/pages/"+subslug)
		.then(({data}) => {
			post(data.data);
		});
	}
    useEffect(() => {
		FetchData();
	}, [subslug]);
    return (
	<div className="page-content">
		<div className="section mt-0">
			<div className="breadcrumbs-wrap">
				<div className="container">
					<div className="breadcrumbs">
						<a href="index.html">Home</a>
						<span>Online Shop</span>
					</div>
				</div>
			</div>
		</div>
		
		
		<div className="section page-content-first">
			<div className="container">
				<div className="text-center mb-2  mb-md-3 mb-lg-4">
					<h1>Spine Surgery</h1>
					<div className="h-decor"></div>
				</div>
			</div>
			<div className="container mt-3 mt-lg-5">
				<div className="row">
					<div className="col-md-4 col-lg-3 column-filters">
						<div className="column-filters-inside">
							<div className="side-block">
								<ul className="category-list">
                                    {posts && posts?.category_id.map((category)=>{
									return <li key={category.id} className="active"><Link to={category.slug}>{category.name}</Link></li>
                                    })}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-8 col-lg-9">
						<div className="clearfix"></div>
						<br/>
						<div className="row">
							<div className="col-md-8">
								{/* {posts?.description?(posts.description):'Null'} */}
								{posts?.description?parse(posts.description):'Null'}
							</div>
						</div>
						<div className="col-md-12" id="AppointmentForm">
							<h3>Book an Appointment</h3>
							<form className="mt-15" id="bookingForm" method="post" >
								<div className="successform">
									<p>Your message was sent successfully!</p>
								</div>
								<div className="errorform">
									<p>Something went wrong, try refreshing and submitting the form again.</p>
								</div>
								<div className="input-group">
									<span>
									<i className="icon-user"></i>
								</span>
									<input type="text" name="bookingname" className="form-control"  placeholder="Your Name*" />
								</div>
								<div className="row row-xs-space mt-1">
									<div className="col-sm-6">
										<div className="input-group">
											<span>
												<i className="icon-email2"></i>
											</span>
											<input type="text" name="bookingemail" className="form-control"  placeholder="Your Email*" />
										</div>
									</div>
									<div className="col-sm-6 mt-1 mt-sm-0">
										<div className="input-group">
											<span>
												<i className="icon-smartphone"></i>
											</span>
											<input type="text" name="bookingphone" className="form-control"  placeholder="Your Phone" />
										</div>
									</div>
								</div>
								<div className="row row-xs-space mt-1">
									<div className="col-sm-6">
										<div className="input-group">
											<span>
												<i className="icon-birthday"></i>
											</span>
											<input type="text" name="bookingage" className="form-control"  placeholder="Your age" />
										</div>
									</div>
								</div>

								<div className="input-group flex-nowrap mt-1">
									<span>
										<i className="icon-calendar2"></i>
									</span>
									<div className="datepicker-wrap">
										<input name="bookingdate" type="text" className="form-control datetimepicker" placeholder="Date" readonly="readonly"/>
									</div>
								</div>
								<div className="input-group flex-nowrap mt-1">
									<span>
										<i className="icon-clock"></i>
									</span>
									<div className="datepicker-wrap">
										<input name="bookingtime" type="text" className="form-control timepicker" placeholder="Time"/>
									</div>
								</div>
								<textarea name="bookingmessage" className="form-control" placeholder="Your comment"></textarea>
								<div className="text-right mt-2">
									<button type="submit" className="btn btn-sm btn-hover-fill">Book now</button>
								</div>
							</form>
						</div>	


						<div className="mt-4 mt-lg-6"></div>
						<div className="d-flex flex-column flex-sm-row mt-lg-2 hidden">
							<a href="#" className="btn" data-toggle="modal" data-target="#modalBookingForm"><i className="icon-right-arrow"></i><span>Book Consultation</span><i className="icon-right-arrow"></i></a>
							<a href="schedule.html" className="btn "><i className="icon-right-arrow"></i><span>Timetable</span><i className="icon-right-arrow"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="section2">
			<div className="container">
				<div className="title-wrap text-center">
					<h2 className="h1">Related Doctors</h2>
					<div className="h-decor"></div>
				</div>
				<div className="row specialist-carousel2 js-specialist-carousel2 justify-content-center">
					<div className="col-sm-6 col-md-2">
						<div className="doctor-box text-center">
							<div className="doctor-box-photo">
								<a href="doctor-page.html"><img src="images/content/doctor-07.jpg" className="img-fluid" alt=""/></a>
							</div>
							<h5 className="doctor-box-name"><a href="doctor-page.html">Dr. William Gardner</a></h5>
							<div className="doctor-box-position">Implantologist</div>
							<div className="doctor-box-text hidden">
								<p>Dr William Gardner completed her undergraduate dental degree at the University of Western Australia in 2003</p>
							</div>
							<div className="doctor-box-bottom hidden">
								<div className="doctor-box-phone"><i className="icon-telephone"></i><a href="tel:+1-212-857-8103">+1-212-857-8103</a></div>
								<div className="doctor-box-social">
									<a href="https://www.facebook.com/" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
									<a href="mailto:info@dentco.net" className="hovicon"><i className="icon-black-envelope"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-2">
						<div className="doctor-box text-center">
							<div className="doctor-box-photo">
								<a href="doctor-page.html"><img src="images/content/doctor-08.jpg" className="img-fluid" alt=""/></a>
							</div>
							<h5 className="doctor-box-name"><a href="doctor-page.html">Dr. Mayra Hastings</a></h5>
							<div className="doctor-box-position">Orthodontist</div>
							<div className="doctor-box-text hidden">
								<p>With years of experience she prides herself on providing minimally invasive periodontal care for patients</p>
							</div>
							<div className="doctor-box-bottom hidden">
								<div className="doctor-box-phone"><i className="icon-telephone"></i><a href="tel:+1-816-941-7259">+1-816-941-7259</a></div>
								<div className="doctor-box-social">
									<a href="https://www.facebook.com/" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
									<a href="mailto:info@dentco.net" className="hovicon"><i className="icon-black-envelope"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-2">
						<div className="doctor-box text-center">
							<div className="doctor-box-photo">
								<a href="doctor-page.html"><img src="images/content/doctor-09.jpg" className="img-fluid" alt=""/></a>
							</div>
							<h5 className="doctor-box-name"><a href="doctor-page.html">Dr. Billy Logan</a></h5>
							<div className="doctor-box-position">Cosmetic Dentist</div>
							<div className="doctor-box-text hidden">
								<p>Working over the past 18 years in both private practice and teaching at the universities inspired an interest in Oral Medicine </p>
							</div>
							<div className="doctor-box-bottom hidden">
								<div className="doctor-box-phone"><i className="icon-telephone"></i><a href="tel:+1-262-374-3970">+1-262-374-3970</a></div>
								<div className="doctor-box-social">
									<a href="https://www.facebook.com/" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
									<a href="mailto:info@dentco.net" className="hovicon"><i className="icon-black-envelope"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-2">
						<div className="doctor-box text-center">
							<div className="doctor-box-photo">
								<a href="doctor-page.html"><img src="images/content/doctor-06.jpg" className="img-fluid" alt=""/></a>
							</div>
							<h5 className="doctor-box-name"><a href="doctor-page.html">Dr. Jennifer Foster</a></h5>
							<div className="doctor-box-position">Oral Health Therapist</div>
							<div className="doctor-box-text hidden">
								<p>Dr. Jennifer Foster has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</p>
							</div>
							<div className="doctor-box-bottom hidden">
								<div className="doctor-box-phone"><i className="icon-telephone"></i><a href="tel:+1-219-756-6567">1-219-756-6567</a></div>
								<div className="doctor-box-social">
									<a href="https://www.facebook.com/" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
									<a href="mailto:info@dentco.net" className="hovicon"><i className="icon-black-envelope"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default Specialties;