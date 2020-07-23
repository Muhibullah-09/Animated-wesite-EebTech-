import React from 'react'
import useWebAnimations, { flash } from "@wellyshen/use-web-animations";
import { Link } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Service from './Service'
function Home() {
    const { ref } = useWebAnimations({ ...flash });
    return (
        <>
            <div className="float-md-right">
                <img src='https://cdn.dribbble.com/users/24711/screenshots/5371151/hero-motio.gif' class="rounded float-left" alt="logo"></img>
            </div>
            <div>
                <ul className="list-unstyled h4 lead">
                    <li><h1 ref={ref}><strong>EebTech</strong></h1> is a premium design agency that</li>
                    <li>focuses on quality, innovation,& speed.</li>
                    <li> We utilized technology to bring results</li>
                    <li>to grow our clients businesses. We pride</li>
                    <li>ourselves in great work ethic, integrity,</li>
                    <li>and end-results. Throughout the years Web</li>
                    <li>Solutions has been able to create stunning,</li>
                    <li> award winning designs in multiple verticals</li>
                    <li>while allowing our clients to obtain an overall.</li><br /><br />
                    <Link to='service'><button type="button" class="btn btn-outline-dark">Get Started</button></Link>
                </ul>
            </div>
            <About />
            <Service />
            <Contact />
            <Footer />
        </>

    )
}

export default Home