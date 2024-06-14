import React from 'react';
import './heroComponent.css'; 

const HeroComponent = () => {
    return (
        <div className="hero" >
            {/* <div className="hero_bg" data-lenis-parallax=".5" style={{'--offset-parallax': '0px'}}>
                <div className="w-100 h-100 js-anim--scale anim--fade is-handler is-anim-handler is-anim-completed" data-screen-offset="0.3">
                    <video id="hero-bg-video" autoPlay muted playsInline loop preload="auto" data-pc="assets/video/hero.mp4" data-mobile="assets/video/hero_mobile.mp4" src="assets/video/hero_mobile.mp4"></video>
                </div>
            </div> */}
            <div className="hero_content text-4xl sm:text-6xl">
                <div className="row ">
                    <div className="">
                        <h6 className="text-center hero_content_inner_subtitle" >
                            <span className="" >Pragati Jain</span>
                        </h6>
                        <h1 className="text-center ">
                            <div className="line" >
                                <div className="char">Front -  End</div>
                                <div className="char" style={{color:"#eb5939"}}>Developer</div>
                            </div>
                            <div className="line" >
                                <strong  style={{color:"#eb5939"}}>
                                    <div className="char">Uniting</div>
                                </strong>
                            </div>
                            <div className="line" style={{'display': 'block', 'textAlign': 'center', 'width': '100%'}}>
                                <strong>
                                  
                                    <div className="char">Creativity </div>
                                </strong>
                            </div>
                            <div className="line" style={{'display': 'block', 'textAlign': 'center', 'width': '100%'}}>
                                <div className="char">and</div>
                            </div>
                            <div className="line" style={{'display': 'block', 'textAlign': 'center', 'width': '100%'}}>
                                <div className="char">Code</div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;
