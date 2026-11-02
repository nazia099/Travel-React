import React from 'react';
import './location.css'
import background4 from '../../assets/image/background_4.png'
import Group1 from '../../assets/image/Group (1).png'
import Group2 from '../../assets/image/Group (2).png'
import Group3 from '../../assets/image/Group (3).png'
import Group4 from '../../assets/image/Group (4).png'
import Group5 from '../../assets/image/Group (5).png'
import Group6 from '../../assets/image/Group (6).png'
import Group7 from '../../assets/image/Group (7).png'
import Group8 from '../../assets/image/Group (8).png'


const Location = () => {
    return(
         <section id="location ">
    <div class="container">
        <div class="background_4">
            <img src={background4}/>
            <div class="location">
                <h4>Most Destinations</h4>
                <div class="pera">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                    <p>euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                </div>
                <div class="image_wrapper">
                    <div class="left1">
                        <div class="left">
                            <div class="top"><img src={Group1}/></div>
                            <div class="bottom"><img src={Group2}/></div>
                        </div>
                        <div class="right"> 
                             <div class="top"> <img src={Group3}/></div>
                            <div class="bottom"> <img src={Group4}/></div>
                        </div>
                    </div>


                    <div class="right1">
                        <div class="left">
                            <div class="top"><img src={Group5}/></div>
                            <div class="bottom"><img src={Group6}/></div>
                        </div>
                        <div class="right"> 
                             <div class="top"> <img src={Group7}/></div>
                            <div class="bottom"> <img src={Group8}/></div>
                        </div>
                    </div>

                </div>
            
            </div>

        </div>
    </div>
 </section>


    )
}
export default Location;