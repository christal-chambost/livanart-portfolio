import bg2 from './../../assets/images/bg-livanart2.png';
import { useSpring, animated } from '@react-spring/web';
import './about.scss';


function About() {
    const backgroundSprings = useSpring({ to: { x: -600 }, from: { x: 2000 } })
    const aboutmeSprings = useSpring({ to: { x: 1000 }, from: { x: 0 } })
    return (
        <div className="about">
            <animated.div style={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "-1",
                ...backgroundSprings
            }}><img src={bg2} alt="" className="bg-img" /></animated.div>
            <animated.div style={{
                position: "absolute",
                top: "-80px",
                right: 0,
                backgroundColor: "rgb(0 0 0 / 70%)",
                width: "50%",
                height: "100vh",
                color: "rgba(255, 255, 255, 0.8)",
                ...aboutmeSprings
            }}></animated.div>
        </div >
    )
}

export default About;