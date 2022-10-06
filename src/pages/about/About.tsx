import bg2 from './../../assets/images/bg-livanart2.png';
import { useSpring, animated } from 'react-spring';
import './about.scss';


function About() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    return (
        <div className="about">
            <animated.div style={props}><img src={bg2} alt="" className="bg-img" /></animated.div>
        </div>
    )
}

export default About;