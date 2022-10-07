import ContactForm from "../../components/ContactForm";
import bgContact from './../../assets/images/bg-livanart-contact1.jpg';
import './contact.scss';

function Contact() {
    return (
        <div className="contactpage">
            <div className="grid-container">

                <div>
                    <img src={bgContact} alt="" className="contactpage-bg" />
                </div>

                <div className="contact-form">
                    <ContactForm />
                </div>

            </div>
        </div>
    )
};

export default Contact;