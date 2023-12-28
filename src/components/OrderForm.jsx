import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

//service id    service_gvmy0n8

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleService = (e) => {
    setService(e.target.value);
    setSubmitted(false);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || service === "" || description === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    setName("");
    setEmail("");
    setService("");
    setDescription("");
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h4>Hello {name}! Form successfully submitted.</h4>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h1>Please enter all the fields.</h1>
      </div>
    );
  };
  //sending email

  return (
    <>
      <Header />
      <div className="order_form">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <h3 className="order-title">YOUR ORDER</h3>
        <form method="post" className="form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="service-type-input"
            required
            id="name"
            name="name"
            placeholder="Example: juliustech"
            onChange={handleName}
            value={name}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="service-type-input"
            required
            id="email"
            name="email"
            placeholder="Example: juliustech@gmail.com"
            onChange={handleEmail}
            value={email}
          />

          <label htmlFor="service">Type of Service</label>
          <select
            className="service-type-input"
            required
            id="service"
            name="service"
            onChange={handleService}
            value={service}
          >
            <option value="">Select a service</option>
            <option value="custom_web_development">Custom Web Development</option>
            <option value="Portifolio Website">Portifolio Website</option>
            <option value="Landing Page">Landing Page</option>
            <option value="EVM Dapp">EVM Dapp</option>
            <option value="Cryptocurrency Token,BSC,ETH,POLY">Cryptocurrency Token,BSC,ETH,POLY</option>
            {/* Add more options as needed */}
          </select>

          <label htmlFor="description">Please describe your needs in detail</label>
          <textarea
            type="text"
            required
            id="description"
            name="description"
            placeholder="Please describe your needs in detail here"
            className="service-type-textarea"
            onChange={handleDescription}
            value={description}
          />

          <input type="submit" className="submitbtn" onClick={handleSubmit} />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Order;
