import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  useEffect(() => {
    const category = "inspirational";
    const apiKey = "Iie78CXj8lOVKlwtF/kLGw==PRiUDUJGavnwTSjk";

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log("problem with the api");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setQuoteObj(data[0]);
      })
      .catch((error) => {
        console.error("Request failed:", error);
      });
  }, []);

  const [quoteObj, setQuoteObj] = useState({});

  return (
    <div className="homepage">
      <div className="homepage-first-section">
        <img
          className="image"
          src="https://4kwallpapers.com/images/wallpapers/milky-way-starry-sky-night-mountains-lake-reflection-cold-5k-2560x1080-287.jpg"
          alt=""
        />
        <h1 className="text-overlay">
          Unlock Your Mind, Expand Your World: Learn with MindGames!
        </h1>
      </div>

      <div className="ourgoals">
        <span className="goal goal1">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: "bald" }}>
            {" "}
            sell you tickets
          </span>
          <span>
            Sell your lecture tickets effortlessly on our platform. Reach a
            wider audience, set prices, and manage inventory easily. Say goodbye
            to manual sales and start selling today.
          </span>
        </span>
        <span className="goal goal2">
          <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: "bald" }}>
            {" "}
            promote new ideas
          </span>
          <span>
            We support lectures that inspire and ignite innovative thinking.
            Sell tickets on our platform to spread knowledge and bring new ideas
            to a wider audience.
          </span>
        </span>
        <span className="goal goal3">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: "bald" }}>
            {" "}
            give you the best website
          </span>
          <span>
            Experience seamless ticket purchasing on our platform. User-friendly
            interface, intuitive search, and secure transactions. Join us and
            enjoy the best way to buy lecture tickets.
          </span>
        </span>
      </div>
      <div className="card">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{quoteObj?.quote}</p>
            <footer className="blockquote-footer">{quoteObj?.author}</footer>
          </blockquote>
        </div>
      </div>
      <div className="main-section">
        <div className="aboutus">
          <div className="homepage-img-container">
            <img
              className="imgabout"
              src="https://c4.wallpaperflare.com/wallpaper/441/441/169/road-desert-walking-men-wallpaper-preview.jpg"
              alt=""
            />
          </div>
          <div className="about">
            <span style={{ fontSize: "30px", font: "bald" }}>About us:</span>
            <span className="span-long-text">
              We're a top ticketing platform connecting people to insightful
              lectures and events. Organizers effortlessly promote and sell
              tickets, while attendees enjoy easy, secure purchases. Discover
              captivating lectures, join us for an inspiring journey of
              exploration!
            </span>
          </div>
        </div>

        <div className="aboutus">
          <div className="about">
            <span style={{ fontSize: "30px", font: "bald" }}>
              Why even lectures?
            </span>
            <span className="span-long-text">
              Lectures are vital for education and growth, offering a platform
              to share knowledge, inspire critical thinking, and foster
              interactive learning. Experts provide insights, while attendees
              engage, question, and explore, igniting inspiration and personal
              development. Join us to broaden your horizons and embark on a
              journey of continuous discovery.
            </span>
          </div>
          <div className="homepage-img-container">
            <img
              className="imgabout2"
              src="https://images.unsplash.com/photo-1497704628914-8772bb97f450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDcxMTcwfHxlbnwwfHx8fHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="goto">
          <span style={{ fontSize: "30px", font: "bald" }}>
            A little bit about our projects:
          </span>
          <span className="our-projects-span">
            Our projects are innovative and impactful, designed to make a
            difference. We strive to create solutions that address real-world
            challenges, pushing the boundaries of what is possible. Through
            extensive research and collaboration, we develop projects that
            deliver meaningful results and contribute to positive change. With a
            focus on quality and excellence, our projects aim to inspire and
            leave a lasting impact on the communities we serve.
          </span>
          <Link to="/events">
            <button type="button" className="btn boton btn-dark">
              Lectures
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
