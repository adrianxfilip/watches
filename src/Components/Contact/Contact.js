import "../../Styles/Contact.scss"

export default function Contact(){
    return (
        <div className="contact-page">
            <div className="section-title-wrapper">
                <h1>CONTACT</h1>
                <hr />
            </div>
            <div className="contact-info-wrapper">
                <div className="info-field">
                    <i className="fi fi-brands-whatsapp"></i>
                    <p>0724453252</p>
                </div>
                <div className="info-field">
                <i className="fi fi-rr-envelope"></i>
                    <p>contact@companyname.com</p>
                </div>
                <div className="info-field">
                <i className="fi fi-rr-map-marker"></i>
                    <p>Strada Principala, nr. 523, Seleus, Mures</p>
                </div>
            </div>
            <form className="contact-form" id="contact-form">
            <input type="text" id="name" name="name" placeholder="Nume"/>
            <input type="email" id="email" name="email" placeholder="Email"/>
            <textarea id="message" name="message" placeholder="Mesaj"/>
            </form>
            <button form="contact-form">Trimite mesaj</button>
        </div>
    )
}