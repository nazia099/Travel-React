import React from 'react';
import './subscribers.css'
import background5 from '../../assets/image/background-5.png'



const Subscribers = () => {
    return(
        <section id="SUBSCRIBERS">
    <div class="SUBSCRIBERS">
        <img src={background5}/>
        <div class="SUBSCRIBERS_wrapper">
            <div class="one">
                <h3>800K</h3>
                <h4>SUBSCRIBERS</h4>
            </div>
            <div class="one">
                <h3>2.3 M</h3>
                <h4>FOLLOWERS</h4>
            </div>
            <div class="one">
                <h3>1.7B</h3>
                <h4>LIKES</h4>
            </div>
            <div class="one">
                <h3>4.5*</h3>
                <h4>RATING</h4>
            </div>
        </div>
    </div>
</section>
    )
}


export default Subscribers