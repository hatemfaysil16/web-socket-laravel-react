import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
            <div className="footer mt-0">
                <div className="container">
                    <div className="row py-1 py-md-2 px-lg-0">
                        <div className="col-lg-4 footer-col1">
                            <div className="row flex-column flex-md-row flex-lg-column">
                                <div className="col-md col-lg-auto">
                                    <div className="footer-logo">
                                        <img src="images/footer-logo.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="mt-2 mt-lg-0"></div>
                                    <div className="footer-social d-none d-md-block d-lg-none">
                                        <Link to="https://www.facebook.com/" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></Link>
                                        <Link to="https://www.twitter.com/" target="blank" className="hovicon"><i className="icon-twitter-logo"></i></Link>
                                        <Link to="https://plus.google.com/" target="blank" className="hovicon"><i className="icon-google-logo"></i></Link>
                                        <Link to="https://www.instagram.com/" target="blank" className="hovicon"><i className="icon-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="footer-text mt-1 mt-lg-2">
                                        <p>To receive email releases, simply provide
                                            <br/>us with your email below</p>
                                        <form action="#" className="footer-subscribe">
                                            <div className="input-group">
                                                <input name="subscribe_mail" type="text" className="form-control" placeholder="Your Email" />
                                                <span><i className="icon-black-envelope"></i></span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="footer-social d-md-none d-lg-block">
                                        <Link a="https://www.facebook.com/" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></Link>
                                        <Link a="https://www.twitter.com/" target="blank" className="hovicon"><i className="icon-twitter-logo"></i></Link>
                                        <Link a="https://plus.google.com/" target="blank" className="hovicon"><i className="icon-google-logo"></i></Link>
                                        <Link a="https://www.instagram.com/" target="blank" className="hovicon"><i className="icon-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">

                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <h3>Our Contacts</h3>
                            <div className="h-decor"></div>
                            <ul className="icn-list">
                                <li><i className="icon-placeholder2"></i>1560 Holden Street San Diego, CA 92139
                                    <br/>
                                    <Link href="contact.html" className="btn btn-xs btn-gradient"><i className="icon-placeholder2"></i><span>Get directions on the map</span><i className="icon-right-arrow"></i></Link>
                                </li>
                                <li><i className="icon-telephone"></i><b><span className="phone"><span className="text-nowrap">1-800-267-0000</span>, <span className="text-nowrap">1-800-267-0001</span></span></b>
                                    <br/>(24/7 General inquiry)</li>
                                <li><i className="icon-black-envelope"></i><Link href="mailto:info@Bonex.net">info@Bonex.net</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row text-center text-md-left">
                            <div className="col-sm">Copyright © 2018 <Link href="#">Bonex</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <Link href="#">Privacy Policy</Link></div>
                            <div className="col-sm-auto ml-auto"><span className="d-none d-sm-inline">For emergency cases&nbsp;&nbsp;&nbsp;</span><i className="icon-telephone"></i>&nbsp;&nbsp;<b>1-800-267-0000</b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backToTop js-backToTop">
                <i className="icon icon-up-arrow"></i>
            </div>
            <div className="modal modal-form modal-form-sm fade" id="modalQuestionForm">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button aria-label='Close' className='close' data-dismiss='modal'>
                            <i className="icon-error"></i>
                        </button>
                        <div className="modal-body">
                            <div className="modal-form">
                                <h3>Ask a Question</h3>
                                <form className="mt-15" id="questionForm" method="post" >
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
                                        <input type="text" name="name" className="form-control"  placeholder="Your Name*" />
                                    </div>
                                    <div className="input-group">
                                        <span>
                                            <i className="icon-email2"></i>
                                        </span>
                                        <input type="text" name="email" className="form-control"  placeholder="Your Email*" />
                                    </div>
                                    <div className="input-group">
                                        <span>
                                            <i className="icon-smartphone"></i>
                                        </span>
                                        <input type="text" name="phone" className="form-control"  placeholder="Your Phone" />
                                    </div>
                                    <textarea name="message" className="form-control" placeholder="Your comment*"></textarea>
                                    <div className="text-right mt-2">
                                        <button type="submit" className="btn btn-sm btn-hover-fill">Ask Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal modal-form fade" id="modalBookingForm">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button aria-label='Close' className='close' data-dismiss='modal'>
                            <i className="icon-error"></i>
                        </button>
                        <div className="modal-body">
                            <div className="modal-form">
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
                                    <div className="selectWrapper input-group mt-1">
                                        <span>
                                            <i className="icon-tooth"></i>
                                        </span>
                                        <select name="bookingservice" className="form-control">
                                            <option>Select Service</option>
                                            <option  >Cosmetic BONEX</option>
                                            <option value="General BONEX">General BONEX</option>
                                            <option value="Orthodontics">Orthodontics</option>
                                            <option value="Children`s BONEX">Children`s BONEX</option>
                                            <option value="BONEX Implants">BONEX Implants</option>
                                            <option value="BONEX Emergency">BONEX Emergency</option>
                                        </select>
                                    </div>
                                    <div className="input-group flex-nowrap mt-1">
                                        <span>
                                            <i className="icon-calendar2"></i>
                                        </span>
                                        <div className="datepicker-wrap">
                                            <input name="bookingdate" type="text" className="form-control datetimepicker" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="input-group flex-nowrap mt-1">
                                        <span>
                                            <i className="icon-clock"></i>
                                        </span>
                                        <div className="datepicker-wrap">
                                            <input name="bookingtime" type="text" className="form-control timepicker" placeholder="Time" />
                                        </div>
                                    </div>
                                    <textarea name="bookingmessage" className="form-control" placeholder="Your comment"></textarea>
                                    <div className="text-right mt-2">
                                        <button type="submit" className="btn btn-sm btn-hover-fill">Book now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;