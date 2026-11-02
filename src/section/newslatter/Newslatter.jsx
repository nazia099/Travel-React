import React from 'react';
import './newslatter.css'
import background6 from '../../assets/image/background6.png'
import Group11 from '../../assets/image/Group (11).png'
import Group12 from '../../assets/image/Group (12).png'
import Group14 from '../../assets/image/Group (14).png'
import email from '../../assets/image/email.png'
import woow from '../../assets/image/woow.png'
import hanger1 from '../../assets/image/hanger1.png'
import hanger2 from '../../assets/image/hanger2.png'
import customer1 from '../../assets/image/customer1.png'
import customer2 from '../../assets/image/customer2.png'
import customer3 from '../../assets/image/customer3.png'
import customer4 from '../../assets/image/customer4.png'
import customer5 from '../../assets/image/customer5.png'
import customer6 from '../../assets/image/customer6.png'








const Newslatter = () => {
    return(
        <section id="NEWSLETTER">
    <div class="container">
        <div class="background_6">
            <img src={background6}/>


            <div class="NEWSLETTER_wrapper">
                <div class="NEWSLETTER_top">
                    <div class="left"><img src={Group11}/></div>
                    <div class="=right"><img src={Group12}/></div>
                </div>
                <div class="NEWSLETTER_bottom">
                    <div class="left"><img src={Group14}/></div>
                    <div class="NEWSLETTER_content">
                        <h3>SUBSCRIBE FOR OFFERS</h3>
                        <div class="head">
                            <h2>TO GET ALL NEWS</h2>
                            <h2>SUBSCRIBE OUR</h2>
                            <h2>NEWSLETTER</h2>
                        </div>
                        <div class="NEWSLETTER_buttons">
                            <div class="email">
                                <img src={email}/>
                                <h6>Enter Your Email</h6>
                            </div>
                            <div class="NEWSLETTER_btn">
                                <button>Let's Go</button>
                            </div>


                        </div>
                    </div>
                </div>


            </div>


            <div class="ROW">
                <div class="ROW_wrapper">
                    <div class="ROW_row">
                        <h3>we help people to </h3>
                        <h4>row</h4>
                        <h5>digital marketing agency</h5>
                    </div>
                    <div class="one"></div>
                    <div class="ROW_zone">
                        <div class="left"><img src={woow}/></div>
                        <h4>zone</h4>
                    </div>
                    <div class="one"></div>
                    <div class="ROW_hanger">
                        <div class="left"><img src={hanger1}/></div>
                        <div class="right">
                             <h6>FASHION ARE KIND</h6>
                            <img src={hanger2}/>
                           
                        </div>
                    </div>
                    <div class="one"></div>
                    <div class="ROW_creative">
                        <div class="left">
                            <h2>20</h2>
                        </div>
                        <div class="right">
                            <h3>Creative</h3>
                            <h4> Our Business Plan</h4>
                        </div>
                    </div>






                </div>
            </div>

            <div class="customer">
                <h2>CUSTOMER WORDS</h2>
                <div class="pera">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                    <p>euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div  class="customer_wrapper">
                    <div class="customer_left">
                    <div class="one">
                        <img src={customer1}/>
                        <h3>Victoria Wotton</h3>
                        <h4>Traveler, Guide</h4>
                        <span>★★★★★</span>
                        <div class="pera">
                            <p>Lorem ipsum dolor sit amet, consectetuer </p>
                            <p>adipiscing elit, sed diam nonummy nibh </p>
                            <p>euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                    <div  class="one"> <img src={customer3}/>
                        <h3>Hindley Earnshaw</h3>
                        <h4>Traveler, Guide</h4>
                        <span>★★★★★</span>
                        <div class="pera">
                            <p>Lorem ipsum dolor sit amet, consectetuer </p>
                            <p>adipiscing elit, sed diam nonummy nibh </p>
                            <p>euismod tincidunt ut laoreet.</p>
                        </div></div>
                    <div  class="one">
                         <img src={customer5}/>
                        <h3>Isabella Linton</h3>
                        <h4>Traveler, Guide</h4>
                        <span>★★★★★</span>
                        <div class="pera">
                            <p>Lorem ipsum dolor sit amet, consectetuer </p>
                            <p>adipiscing elit, sed diam nonummy nibh </p>
                            <p>euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                </div>
                <div class="customer_right">
                    <div class="one">
                        <img src={customer2}/>
                        <h3>Sonia Marmeladova</h3>
                        <h4>Traveler, Guide</h4>
                        <span>★★★★★</span>
                        <div class="pera">
                            <p>Lorem ipsum dolor sit amet, consectetuer </p>
                            <p>adipiscing elit, sed diam nonummy nibh </p>
                            <p>euismod tincidunt ut laoreet.</p>
                        </div>

                    </div>
                    <div  class="one">
                        <img src={customer4}/>
                        <h3>Catherine Earnshaw</h3>
                        <h4>Traveler, Guide</h4>
                        <span>★★★★★</span>
                        <div class="pera">
                            <p>Lorem ipsum dolor sit amet, consectetuer </p>
                            <p>adipiscing elit, sed diam nonummy nibh </p>
                            <p>euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                    <div  class="one">
                        <img src={customer6}/>
                        <h3>Jennifer Williams</h3>
                        <h4>Traveler, Guide</h4>
                        <span>★★★★★</span>
                        <div class="pera">
                            <p>Lorem ipsum dolor sit amet, consectetuer </p>
                            <p>adipiscing elit, sed diam nonummy nibh </p>
                            <p>euismod tincidunt ut laoreet.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default Newslatter