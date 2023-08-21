import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import emailjs from '@emailjs/browser';
  
  const Payment = ({buyMe ,setBuyMe}) => {
    const [state, setState] = useState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
    });

  
    const handleInputChange = (evt) => {
      const { name, value } = evt.target;
      
      setState((prev) => ({ ...prev, [name]: value }));
    }
  
    const handleInputFocus = (evt) => {
      setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    function handlePay(){
      const url = `/events`;
      history.pushState({}, "", url);
      location.reload()
      sendEmail(e);
    }
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70o4oqk', 'template', e.target, 'ZjMePZlpfng_2A2Jl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
      <div id='payment-container' >
          
        <div id='payment-form'>
        <div id="card">
        <Cards 
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        </div>
        <div id='card-inputs-section'>

          <div id='inputs-fiels-card'>
          <input className='payment-inputs'
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input className='payment-inputs'
            type="number"
            name="expiry"
            placeholder="Card Expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input className='payment-inputs'
            type="text"
            name="name"
            placeholder="Card's Owner Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input className='payment-inputs'
            type="number"
            name="cvc"
            placeholder="Card's Owner Name"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input className='payment-inputs'
            type="email"
            name="email"
            placeholder="email for reciept"
            
          />
          </div>
        </div>
          </div>
          <div id='pay-section'>
          <h4 id='the-product-title'> "{buyMe.event_name}" only {buyMe.price}$ </h4>
        <button on onClick={()=>handlePay()}>Pay</button>
        </div>
      </div>
    );
  }
  
  export default Payment;