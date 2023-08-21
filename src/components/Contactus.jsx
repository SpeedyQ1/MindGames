import React, { useState,useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Contactus.css';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const form = useRef();
  
  const toastifySuccess = (data) => {
    const { name, email, subject, message } = data;

    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
    reset();
    setSubmitted(true);
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_70o4oqk', 'contact', form.current, 'ZjMePZlpfng_2A2Jl')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  
  // };
  const sendEmail = (e) => {
    e.preventDefault();
console.log(form.current);
    emailjs.sendForm('service_70o4oqk', 'contact', form.current, 'ZjMePZlpfng_2A2Jl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const handleFormSubmit = (data, e) => {
    onSubmit(data);
    sendEmail(e);
  };


  const onSubmit = (data) => {
    console.log('Form Data:', data);
    toastifySuccess(data);
  };

  if (!submitted) {
    return (
      <div className="Contactus">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="Contactus">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(handleFormSubmit)}
                  noValidate
                  ref={form}>
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        {...register('name', {
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className="form-control formInput"
                        placeholder="Name"
                      />
                      {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className="form-control formInput"
                        placeholder="Email address"
                      />
                      {errors.email && (
                        <span className="errorMessage">Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        {...register('subject', {
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className="form-control formInput"
                        placeholder="Subject"
                      />
                      {errors.subject && (
                        <span className="errorMessage">{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        {...register('message', {
                          required: true
                        })}
                        className="form-control formInput"
                        placeholder="Message"
                      />
                      {errors.message && <span className="errorMessage">Please enter a message</span>}
                    </div>
                  </div>
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        The message sent, thank you!
        <button className="new-message-btn" onClick={() => setSubmitted(false)}>
          New message
        </button>
      </div>
    );
  }
};

export default Contactus;
