import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser'
import { useForm } from "react-hook-form";
import "./SpecificDay.css";
import { useParams } from "react-router";


export const CreateNewEvent = () => {

  const [dataArr, setDataArr] = useState(
    JSON.parse(localStorage.getItem("dataArr"))
  );
  const [usersArr, setUsersArr] = useState(
    JSON.parse(localStorage.getItem("usersArr"))
  );

  const [dataByDate, setDataByDate] = useState(0);
  let currentUser = JSON.parse(localStorage.getItem("loginData"));

  let userObject = usersArr?.find(
    (view) => view.email == Object.keys(currentUser)[0]
  );

  const { date } = useParams();
  let theDate;
  theDate = date.replaceAll("-", "/");

  useEffect(() => {
    setDataByDate(dataArr?.find((view) => view.date == theDate));
  }, []);
  

  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    handleSubmission(data);
    sendEmail(e);
  };

  const [formData, setFormData] = useState({
    event_name: "",
    id: "",
    date: "",
    email: "",
    start_time: "",
    duration: "",
    event_info: "",
    event_image: "",
    place_name: "",
    street_addres: "",
    city: "",
    lecturer_name: "",
    lecturer_info: "",
    price: "",
    max_amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleSubmission = (data) => {
    console.log("Form Data:", data);

    setSubmitted(true);
    reset();

    const newId = dataArr.length > 0 ? dataArr[dataArr.length - 1].id + 1 : 1;
    const newData = {
      id: newId,
      sold: 0,
      date: theDate,
      ...data,
    };

    setDataArr((prevDataArr) => {
      const updatedDataArr = [...prevDataArr, newData];
      localStorage.setItem("dataArr", JSON.stringify(updatedDataArr));
      return updatedDataArr;
    });
    let theId = userObject.id;
    userObject.myEvents = [...userObject.myEvents, newData];
    usersArr[theId - 1] = userObject;

    localStorage.setItem("usersArr", JSON.stringify(usersArr));
  };
  const handleNewForm = () => {
    setSubmitted(false);
    reset();
  };
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
  
  if (!submitted) {
    return (
      <div className="SpecificDay">
       <div className="events-cards-section">
       </div>
        <div className="container2">
          <div className="row">
            <div className="col-12 text-center">
              <div className="SpecificDay">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <div id="event-info" className="row formRow">
                    <div className="col">
                      <h1 className="form-titles">event settings</h1>

                      <div className="col">
                        <input
                          type="text"
                          name="event_name"
                          {...register("event_name", { required: true })}
                          value={formData.event_name}
                          onChange={handleChange}
                          className="form-control2 formInput"
                          placeholder="Event Name"
                        />
                        {errors.event_name && (
                          <span className="errorMessage">
                            Please enter the event name
                          </span>
                        )}
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <input
                            type="time"
                            name="start_time"
                            {...register("start_time", { required: true })}
                            value={formData.start_time}
                            onChange={handleChange}
                            className="form-control2 formInput"
                            placeholder="Start Time"
                          />
                          {errors.start_time && (
                            <span className="errorMessage">
                              Please enter the start time
                            </span>
                          )}
                        </div>
                        <div className="col">
                          <input
                            type="number"
                            name="duration"
                            {...register("duration", { required: true })}
                            value={formData.duration}
                            onChange={handleChange}
                            className="form-control2 formInput"
                            placeholder="Duration (hours)"
                          />
                          {errors.duration && (
                            <span className="errorMessage">
                              Please enter the duration
                            </span>
                          )}
                        </div>
                        <div className="col">
                          <input
                            type="number"
                            name="price"
                            {...register("price", { required: true })}
                            value={formData.price}
                            onChange={handleChange}
                            className="form-control2 formInput"
                            placeholder="Price"
                          />
                          {errors.price && (
                            <span className="errorMessage">
                              Please enter the price
                            </span>
                          )}
                        </div>
                        <div className="col">
                          <input
                            type="number"
                            name="max_amount"
                            {...register("max_amount", { required: true })}
                            value={formData.max_amount}
                            onChange={handleChange}
                            className="form-control2 formInput"
                            placeholder="tickets amount  available"
                          />

                          {errors.max_amount && (
                            <span className="errorMessage">
                              Please enter tickets amount available
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="event_image"
                          {...register("event_image", { required: true })}
                          value={`${formData.event_image}`}
                          onChange={handleChange}
                          className="form-control2 formInput"
                          placeholder="Event Image-only 1920X1080 "
                        />
                        {errors.event_image && (
                          <span className="errorMessage">
                            Please enter the event image
                          </span>
                        )}
                      </div>
                      <div className="col">
                        <textarea
                          rows={3}
                          name="event_info"
                          {...register("event_info", { required: true })}
                          value={formData.event_info}
                          onChange={handleChange}
                          className="form-control2 formInput"
                          placeholder="Event Info"
                        />
                        {errors.event_info && (
                          <span className="errorMessage">
                            Please enter the event info
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                
                <h1 className="form-titles">Lecturer info</h1>
                <div id="lecturer-info" className="col">
                <div className="row formRow">
                <div className="col">
                      <input
                        type="text"
                        name="lecturer_name"
                        {...register("lecturer_name", { required: true })}
                        value={formData.lecturer_name}
                        onChange={handleChange}
                        className="form-control2 formInput"
                        placeholder="Lecturer Name"
                      />
                      {errors.lecturer_name && (
                        <span className="errorMessage">
                          Please enter the lecturer name
                        </span>
                      )}
                    </div>  
                    <div className="col">
                      <input
                        type="text"
                        name="lecturer_info"
                        {...register("lecturer_info", { required: true })}
                        value={formData.lecturer_info}
                        onChange={handleChange}
                        className="form-control2 formInput"
                        placeholder="Lecturer Info"
                      />
                      {errors.lecturer_info && (
                        <span className="errorMessage">
                          Please enter the lecturer info
                        </span>
                      )}
                    </div>
                </div>
                <div className="col">
               
                      <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control2 formInput"
                        placeholder="Email addres"
                      />
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter your email
                        </span>
                      )}
                     
                </div>
                </div>

                <h1 className="form-titles">Location info</h1>
                <div id="location-info" className="col">
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="place_name"
                        {...register("place_name", { required: true })}
                        value={formData.place_name}
                        onChange={handleChange}
                        className="form-control2 formInput"
                        placeholder="Place Name"
                      />
                      {errors.place_name && (
                        <span className="errorMessage">
                          Please enter the place name
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="street_addres"
                        {...register("street_addres", { required: true })}
                        value={formData.street_addres}
                        onChange={handleChange}
                        className="form-control2 formInput"
                        placeholder="Street addres"
                      />
                      {errors.street_addres && (
                        <span className="errorMessage">
                          Please enter the street addres
                        </span>
                      )}
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="city"
                        {...register("city", { required: true })}
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control2 formInput"
                        placeholder="City"
                      />
                      {errors.city && (
                        <span className="errorMessage">
                          Please enter the city
                        </span>
                      )}
                    </div>
                  </div>
                  </div>
                  
                  <div className="row formRow"></div>
                  {/* Rest of the form fields */}
                  <div className="row formRow">
                    <div className="col text-center">
                      <button type="submit" className="btn buton btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="SpecificDay">
        <div className="container2">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Form Submitted Successfully!</h2>
              <button className="btn btn-primary" onClick={handleNewForm}>
                Create Another New Lecture
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
