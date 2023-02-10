import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
//  let ahmed = 'ahmed';
// const [posts, post]= useState(null);
// useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/pages")
//     .then(response=>{
//         return response.json();
//     })
    
//     .then(data=>{
//         post(data.data);
//     })
// }, []);

    return (
        <header className="header">
                <div className="header-quickLinks js-header-quickLinks d-lg-none">
                    <div className="quickLinks-top js-quickLinks-top"></div>
                    <div className="js-quickLinks-wrap-m">
                    </div>
                </div>
                <div className="header-topline d-none d-lg-flex">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-auto d-flex align-items-center">
                                <div className="header-phone"><i className="icon-telephone"/><Link href="tel:1-847-555-5555">1-800-267-0000</Link></div>
                                <div className="header-info"><i className="icon-placeholder2"/>1560 Holden Street San Diego, CA 92139</div>
                                <div className="header-info"><i className="icon-black-envelope"/><Link href="mailto:info@Bonex.net">info@Bonex.net</Link></div>
                            </div>
                            <div className="col-auto ml-auto d-flex align-items-center">
                                <span className="header-social">
                                    Book An Appointment
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNavDropdown">
                                <span className="icon-menu"></span>
                            </button>
                            <div className="col-lg-auto col-lg-2 d-flex align-items-lg-center">
						<Link href="index.html" className="header-logo"><img src="images/logo.png" alt="" className="img-fluid"/></Link>
                            </div>
                            <div className="col-lg ml-auto header-nav-wrap">
                                <div className="header-nav js-header-nav">
                                    <nav className="navbar navbar-expand-lg btco-hover-menu">
                                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                            {/* <ul className="navbar-nav">
                                                { posts && posts.map((category)=>{
                                                return  <li className="nav-item" key={category.id}>
                                                    <Link to={category.slug} className='nav-link'>{category.name}</Link>
                                                            {category && category.category_id && category.category_id.length ? 
                                                             <ul className="dropdown-menu show"  aria-labelledby="navbarDropdown" data-bs-popper="static">
                                                                {category.category_id.map((subCategory)=>{
                                                    return  <li key={subCategory.id}><Link className="dropdown-item" key={category.id} to={category.slug+'/'+subCategory.slug}>{subCategory.name}</Link></li>
                                                                 })}
                                                                    </ul>: null }
                                                        </li> 
                                                        
                                                    }) }
                                                    <li><Link className="dropdown-item" to={'/'}>Home</Link></li>
                                                    <li><Link className="dropdown-item" to={'showDataPlay'}>showDataPlay</Link></li>
                                            </ul> */}
                                             <li><Link className="dropdown-item" to={'/'}>Home</Link></li>
                                                    <li><Link className="dropdown-item" to={'showDataPlay'}>showDataPlay</Link></li>
                                        </div>
                                    </nav>
                                </div>
                                <div className="header-search">
                                    <form action="#" className="form-inline">
                                        <i className="icon-search"/>
                                        <input type="text" placeholder="Search"/>
                                        <button type="submit"><i className="icon-search"/></button>
                                    </form>
                                </div>
                                <div className="header-cart cart-toggler">
                                    <Link href="#" className="icon icon-cart"></Link>
                                    <span className="badge">2</span>
                                    <div className="header-cart-dropdown">
                                        <div className="prd-sm">
                                            <div className="prd-sm-img">
                                                <Link href="shop-product.html"><img src="../images/product/prd-sm-1.jpg" className="img-fluid" alt=""/></Link>
                                            </div>
                                            <div className="prd-sm-info">
                                                <h3><Link href="shop-product.html">Active Wow Teeth Whitening Charcoal Powder</Link></h3>
                                                <div className="price">$38.88</div>
                                            </div>
                                            <div className="prd-sm-delete"><i className="icon-close"/></div>
                                        </div>
                                        <div className="prd-sm">
                                            <div className="prd-sm-img">
                                                <Link href="shop-product.html"><img src="images/product/prd-sm-2.jpg" className="img-fluid" alt=""/></Link>
                                            </div>
                                            <div className="prd-sm-info">
                                                <h3><Link href="shop-product.html">Electric Toothbrush</Link></h3>
                                                <div className="price">$39.97</div>
                                            </div>
                                            <div className="prd-sm-delete"><i className="icon-close"/></div>
                                        </div>
                                        <div className="header-cart-total">
                                            <div className="float-left">Total:</div>
                                            <div className="float-right">$78.85</div>
                                        </div>
                                        <Link href="#" className="btn btn-sm btn-hover-fill"><span>CheckOut</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}
export default Navbar;