import { Button } from "reactstrap"

const ServiceCard = (props) => {
  return (
    <div className="service-card">
    <img  className="cardimg" src={props.cardimage} alt="cardimg"/>
     <div className="servicecard-details">
        <h3>{props.cardTitle}</h3>
        <p>{props.cardDescription}</p>
     </div>
     <div className="servicecard-button-container">
        <Button className="servicecard-btn">{props.cardButton}</Button>
     </div>
    </div>
  )
}

export default ServiceCard