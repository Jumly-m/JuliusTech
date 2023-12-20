import ServiceCard from "./ServiceCard"
import Header from "./Header"
import { Button } from "reactstrap"
import Techs from "./SliderTechs"
import Projects from "./Projects"
import Footer from "./Footer"
import 'animate.css';
const Home = () => {
  return (
    <>
    <Header/>
    <div className="work_time">
    <div>
    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg><a className="phone" href="https://wa.me/+255779649545">Whatsapme</a></p>

<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> Monday -Friday 7:00-18:00 EAT</p>
</div>
    </div>
   <div className="home_page">
    <div className="introduction_section">
     <h1 >Welcome to JuliusTech.</h1>
     <h3>I create beautful and faster websites.</h3>
     <h6>Want to know more?</h6>
     {/* WhatsApp icon */}
     <a
        href="https://wa.me/+255779649545"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon blink"></i>
      </a>

     <div className="contact-btn-container">
     <Button className="contact-btn" color="secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg> Contact Me</Button>
     </div>
    </div>
    <div className="about-me">
    <h3>I am Fullstack Developer.</h3>
    <p>Read more about me <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></p>
    </div>

    <div className="projects_section">
      <h3>TECH & TOOLS</h3>
      <div className="techs-card">
        <Techs/>
      </div>
    </div>

    <h3 className="servicestitle">SERVICES</h3>
    <div className="services">
    <ServiceCard
      cardTitle="Custom Web development"
      cardDescription="Faster and beautful custom website for your business,portifolio,and services."
      cardButton="Order Now"
      cardimage="assets/web.jpg"
    />
    <ServiceCard
      cardTitle="Portifolio Websites"
      cardDescription="Stand before work with professional portifolio website"
      cardButton="Order Now"
      cardimage="assets/port1.png"
    />
    <ServiceCard
      cardTitle="Landing page"
      cardDescription="Faster and interactive landing page for your business."
      cardButton="Order Now"
      cardimage="assets/web.jpg"
    />
    </div>


    <h3 className="projecttitle">PROJECTS</h3>
    <div className="services-contacts">
    <div className="service-contacts-details">
    <p>I have done alot of works and projects, i cant show all of them here,but you can enjoy few of them for more please <span className="contact_span"><a href="">Contact me</a></span> </p>
    </div>
      <div className="projects">
      <Projects/>
      </div>
    </div>

  
    <div className="newsletter-section">
        NEWSLETTER
    </div>
   </div>
   <Footer/>
    </>

  )
}

export default Home