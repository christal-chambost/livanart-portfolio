import React, { useState } from 'react';
import bg1 from './../../assets/images/bg-livanart1.jpg';
import bg2 from './../../assets/images/bg-livanart2.png';
import bg3 from './../../assets/images/bg-livanart3.jpg';
import bg4 from './../../assets/images/bg-livanart4.jpg';
import { useSpring, animated } from 'react-spring';
import { useTransition } from '@react-spring/web'
import Typography from '@mui/material/Typography';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './homepage.scss';
import MouseScroll from '../../components/MouseScroll';

function Homepage() {
    const slides = [bg1, bg2, bg3, bg4];
    const randomIndex = Math.floor(Math.random() * slides.length);
    const propsBackground = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const propsTitle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: { duration: 5000 } })

    return (
        <section className="homepage">
            <animated.div style={propsBackground}><img src={slides[randomIndex]} alt="" className="bg-img" /></animated.div>
            <div className="homepage-content">
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                        className="homepage-content-p1">
                        <animated.div style={propsTitle}><Typography variant="h1" gutterBottom>
                            LIVANART WORKSHOP
                        </Typography>
                        </animated.div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas pariatur hic totam temporibus aperiam ipsum enim veniam maiores sint sapiente ipsa molestiae similique nisi, corrupti eius. Ratione dolore pariatur explicabo!</p>
                        <MouseScroll />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={2} className="homepage-content-gradient" />
                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10em',
                        }}>
                        <script src="https://embedsocial.com/js/iframe.js"></script><iframe style={{ border: "0", width: "80%", height: "100%" }} scrolling="no" src="https://embedsocial.com/api/pro_hashtag/8e799ca7e6b335dbf45e07136f31c0e6b8558844"></iframe>
                    </ParallaxLayer>
                </Parallax>
            </div>

        </section>
    );
}

export default Homepage;