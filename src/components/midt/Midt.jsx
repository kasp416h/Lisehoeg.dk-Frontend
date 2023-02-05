import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiTrash2 } from "react-icons/fi"
import axios from "axios";

import "./midt.css"

const Midt = (props) => {
  const [currentIndex, setCurrectIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePrevClick = () => {
    setCurrectIndex(currentIndex === 0 ? props.slideshow.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrectIndex(currentIndex === props.slideshow.length - 1 ? 0 : currentIndex + 1);
  };

  const handleDotClick = (index) => {
    setCurrectIndex(index);
  };

  const slet = async (img) => {
    const formData = new FormData();
    formData.append("file", img);

    await axios.post("http://lisehoeg.dk/unlinkFile", formData, {
      headers: {
        "Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"
      }
    })
    .then(
      window.location.reload()
    );
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  }

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    await axios.post("http://lisehoeg.dk/appendFile", formData, {
      headers: {
        "Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"
      }
    })
    .then(
      window.location.reload()
    );
  };

  return (
    <div className="Midt">
      <div className="container-antal">{`${currentIndex + 1} / ${props.slideshow.length}`}</div>

      {props.auth === true && 
        <div className="slideshow-knap">
          <button name="admin"
            id="tilfoj"
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#tilfoj_modal"
          >
            Tilføj Billede
          </button>

          <div className="modal fade"
            id="tilfoj_modal"
            tabIndex="-1"
            aria-labelledby="tilfoj_label"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="tilfoj_label">
                    Opmærksom!
                  </h1>
                  <button type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Upload dit billede herunder:</p>
                  <form method="POST"
                    action="https://www.lisehoeg.dk"
                    target="_blank"
                    id="billede_upload"
                  >
                    <div className="form-group">
                      <input type="file"
                        className="form-control"
                        id="file"
                        name="file"
                        accept=".png, .jpg, .gif, .jpeg"
                        onChange={onFileChange}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button"
                    className="btn btn-success"
                    onClick={onFileUpload}
                    id="liveAlertBtn"
                  >
                    Tilføj
                  </button>
                  <button type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Annuller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {props.slideshow.length > 0 && 
        <div className="container-slideshow">
          <button onClick={handlePrevClick} className="btn"> <FiChevronLeft size={50} color={"rgb(87, 87, 87)"}/> </button>

          <img className="billeder"
            src={`./static/${props.slideshow[(currentIndex + props.slideshow.length - 1) % props.slideshow.length]}`}
            alt={props.slideshow[(currentIndex + props.slideshow.length - 1) % props.slideshow.length]}
            onClick={handlePrevClick}
          />
        
          <img className="billeder midt-billede" 
            src={`./static/${props.slideshow[currentIndex]}`} 
            alt={props.slideshow[currentIndex]}
          />

          {props.auth === true && 
            <button name="admin"
              id="slet"
              data-bs-toggle="modal"
              data-bs-target="#slet_modal">
              <FiTrash2 size={30}/>
            </button>
          }
        
          <img className="billeder" 
            src={`./static/${props.slideshow[(currentIndex + 1) % props.slideshow.length]}`} 
            alt={props.slideshow[(currentIndex + 1) % props.slideshow.length]} 
            onClick={handleNextClick}
          />

          <button onClick={handleNextClick} className="btn"> <FiChevronRight size={50} color={"rgb(87, 87, 87)"}/> </button>
        </div>
      }

      {props.auth === true && 
        <div className="modal fade"
          id="slet_modal"
          tabIndex="-1"
          aria-labelledby="slet_label"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="slet_label">
                  Opmærksom!
                </h1>
                <button type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Er du sikker på at du gerne vil slette dette billede?<br></br>{" "}
                </p>
                {props.slideshow.length > 0 && 
                  <img src={`./static/${props.slideshow[currentIndex]}`}
                    className="img-fluid rounded mx-auto d-block"
                    alt={props.slideshow[currentIndex]}
                  />
                }
              </div>
              <div className="modal-footer">
                <button type="button"
                  className="btn btn-danger"
                  onClick={() => slet(props.slideshow[currentIndex])}
                >
                  Slet
                </button>
                <button type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Annuller
                </button>
              </div>
            </div>
          </div>
        </div>}

      <div className="container-dots">
        {props.slideshow.map((_, index) => (
          <span key={index} onClick={() => handleDotClick(index)} className={`dots ${index === currentIndex && "active"}`}></span>
        ))}
        </div>

    </div>
  )
}

export default Midt