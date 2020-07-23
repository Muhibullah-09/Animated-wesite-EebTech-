import React from 'react'
import Bulb from '../images/bulb.gif'
import Book from '../images/book.gif'
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
function About() {
    const { ref } = useWebAnimations({ ...bounce })
    return (
        <>
            <div className="float-md-right">
                <img src="https://1.bp.blogspot.com/-FXZ6p15bHjA/W7IVy1HUu0I/AAAAAAAAO3o/7XeE_5PecD475NIH6IahEF_8v9JC9hrOgCLcBGAs/s1600/01.gif" class="rounded float-left" alt="logo" width='600'></img>
            </div>
            <div>
                <ul className="list-unstyled h4 lead">
                    <li><h1 ref={ref}><strong>About Us</strong></h1><br />We are living in the hyper modern world; the pace <br />of change
                    is hard-to-catch. The constantly changing<br /> world has spurred
                    the enormous growth in all shades<br /> of life. The internet has
                    evolved as driving fuel of <br /> business and patronage. The rapidity
                    & global<br /> coverage has made it inevitable; So enterprise relies<br />
                    heavily on internet<b>E-Commerce</b> for projection and<br /> marketing of /
                    his goods & services.A fully loaded smart<br /> web site is the primary
                    requirement to cast the solid image <br />of the company and its development calls for in depth knowledge<br /> and professional capability of <strong>designer</strong>.
                    <br />
                    </li><br /><br /><br />
                </ul>
            </div>
            <div className="float-md-left">
                <img src={Bulb} class="rounded float-left" alt="logo" width='600'></img>
            </div>
            <div>
                <ul className="list-unstyled h4 lead">
                    <li><h1><strong>Vision</strong></h1><br />We are living in the hyper modern world; the pace <br />of change
                    is hard-to-catch. The constantly changing<br /> world has spurred
                    the enormous growth in all shades<br /> of life. The internet has
                    evolved as driving fuel of <br /> business and patronage. The rapidity
                    & global<br /> coverage has made it inevitable; So enterprise relies<br />
                    heavily on internet<b>E-Commerce</b> for projection and<br /> marketing of /
                    his goods & services.A fully loaded smart<br /> web site is the primary
                    requirement to cast the solid image <br />of the company and its development calls for in depth knowledge<br /> and professional capability of <strong>designer</strong>.
                    <br />
                    </li><br /><br /><br />
                </ul>
            </div>
            <div className="float-md-right">
                <img src={Book} class="rounded float-left" alt="logo" width='700'></img>
            </div>
            <div>
                <ul className="list-unstyled h4 lead">
                    <li><h1><strong>How We Work?</strong></h1><br />We are living in the hyper modern world; the pace <br />of change
                    is hard-to-catch. The constantly changing<br /> world has spurred
                    the enormous growth in all shades<br /> of life. The internet has
                    evolved as driving fuel of <br /> business and patronage. The rapidity
                    & global<br /> coverage has made it inevitable; So enterprise relies<br />
                    heavily on internet<b>E-Commerce</b> for projection and<br /> marketing of /
                    his goods & services.A fully loaded smart<br /> web site is the primary
                    requirement to cast the solid image <br />of the company and its development calls for in depth knowledge<br /> and professional capability of <strong>designer</strong>.
                    <br />
                    </li><br /><br /><br />
                </ul>
            </div>
        </>

    )
}
export default About