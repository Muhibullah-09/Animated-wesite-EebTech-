import React from 'react'
import './css/service.css'
import { Link } from 'react-router-dom'
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
function Service() {
    const { ref } = useWebAnimations({ ...bounce });
    return (
        <>
            <section className='main_heading my-5'>
                <div className='text-center'><br />
                    <h1 className='display-4' ref={ref}>Our Services</h1>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className="float-md-right">
                    <img src='https://cdn.dribbble.com/users/1912990/screenshots/6496981/web_developing.gif' class="rounded float-left" alt="logo"></img>
                </div>
                <div>
                    <p class="note note-light text-right">
                        <ul className="list-unstyled h4 lead">
                            <li><h1><strong>EebTech</strong></h1> is a premium design agency that</li>
                            <li>focuses on quality, innovation,& speed.</li>
                            <li> We utilized technology to bring results</li>
                            <li>to grow our clients businesses. We pride</li>
                            <li>ourselves in great work ethic, integrity,</li>
                            <li>and end-results. Throughout the years Web</li>
                            <li>Solutions has been able to create stunning,</li>
                            <li> award winning designs in multiple verticals</li>
                            <li>while allowing our clients to obtain an overall.</li><br /><br />
                        </ul>
                    </p>
                </div>
            </section>
            <section className='main_heading my-5'>
                <div className='text-center'><br />
                    <h1 className='display-4'>Web Development</h1>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 clo-10 col-xxl-4'>
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src="https://i.pinimg.com/originals/2a/f0/0b/2af00b77b9831ccf199a7360d8d4d39f.gif"
                                            alt="..."
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Web Development</h5>
                                            <p className="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main_heading my-5'>
                <div className='text-center'><br />
                    <h1 className='display-4'>SEO Optimization</h1>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 clo-10 col-xxl-4'>
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src='https://www.bignetworld.com/wp-content/uploads/2018/10/Off-Page-SEO.gif'
                                            alt="..."
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">SEO Optimization</h5>
                                            <p className="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Link to='service'><button type="button" class="btn btn-outline-dark">Get Started</button></Link> */}
            <section className='main_heading my-5'>
                <div className='text-center'><br />
                    <h1 className='display-4'>Research & Innovation</h1>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 clo-10 col-xxl-4'>
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src='https://media1.tenor.com/images/2b951b94708cbc30a1eaa8618a41a4fb/tenor.gif?itemid=10410585'
                                            alt="..."
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Research & Innovation</h5>
                                            <p className="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='service'><button type="button" class="btn btn-outline-dark"></button></Link>
            </section>
        </>
    )
}

export default Service
