import React from 'react';
import './help.css'

import Rectangle1 from '../../assets/image/Rectangle 1.png'
import Rectangle2 from '../../assets/image/Rectangle 2.png'




const Help = () => {
    return(
        <section id="help">
    <div class="container">
        <div class="help_box">
            <img src={Rectangle1}/>
            <div class="help_box2">
                 <img src={Rectangle2}/>
                 <div class="help_wrapper">
                    <h2>How can we help?</h2>
                    <div class="help_one"></div>
                    <div class="pera">
                        <p>Our service team is available every day 24/7</p>
                        <p>Free diagnostics for all types of work.</p>
                    </div>
                    <div class="help_two"></div>
                    <div class="help_button"><button>Message Us!</button></div>


                 </div>
            </div>
        </div>
         <div class="FOOTER_WRAPPER">
            <div class="FOOTER_one">
                <h5>QUICK LINKS</h5>
                <div class="line"></div>
                <div class="topics">
                    <h6>Help</h6>
                    <h6>About</h6>
                    <h6>Press</h6>
                    <h6>Blog</h6>
                    <h6>Contact Us</h6>
                </div>
            </div>



            <div class="FOOTER_one">
                 <div class="FOOTER_one">
                <h5>LEGAL STUFF</h5>
                <div class="line"></div>
                <div class="topics">
                    <h6>Terms Of Use</h6>
                    <h6>Cookies</h6>
                    <h6>Privacy Policy</h6>
                    <h6>Security Policy</h6>
                    <h6>Money Back Guarantee</h6>
                </div>
            </div>
            </div>
            <div class="FOOTER_one"> <div class="FOOTER_one">
                <h5>OUR TEAM</h5>
                <div class="line"></div>
                <div class="topics">
                    <h6>Testimonials</h6>
                    <h6>Afﬁliates</h6>
                    <h6>Partners</h6>
                    <h6>Blog</h6>
                    <h6>Digital Marketing</h6>
                </div>
            </div></div>
            <div class=" FOOTER_one"> <div class="FOOTER_one">
                <h5>FEATURED SERVICES</h5>
                <div class="line"></div>
                <div class="topics">
                    <h6>Local SEO</h6>
                    <h6>Social Media Marketing</h6>
                    <h6>Marketing Management</h6>
                    <h6>Search Engine Optimization</h6>
                    <h6>Free SEO Analysis</h6>
                </div>
            </div></div>
        </div> 
    </div>
</section>


    )
}
export default Help;