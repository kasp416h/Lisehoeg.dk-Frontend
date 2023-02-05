import React, { useEffect } from "react";
import * as bootstrap from "bootstrap";

const Carousel = (props) => {
  useEffect(() => {
    new bootstrap.Carousel("#carouselExampleIndicators");
  }, []);

  const Slides = (tal) => {
    const slides = [];
    for (var i = 0; i < tal; i++) {
      slides.push(
        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
        <img src={`./static/${props.slideshow[i]}`} className="d-block w-100" alt={props.slideshow[i]} />
      </div>
      )
    }
    return slides;
  };

  const Buttons = (tal) => {
    const buttons = [];
    for (var i = 0; i < tal; i++) {
      buttons.push(
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={i}
          className={i === 0 ? 'active' : ''}
          aria-label={"Slide " + (i + 1)}
          key={i}
      ></button>
      )
    }
    return buttons;
  };

  return (
    <div className="container-carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-interval="false"
      >
        <div className="carousel-indicators">
          {Buttons(props.slideshow.length)}
        </div>

        <div className="carousel-inner">
          {Slides(props.slideshow.length)}
        </div>
      </div>
    </div>
  );
}

export default Carousel;