import React from "react";
import PropTypes from "prop-types";

export const Card = (props) =>{
    return(
        <div className="card w-25 m-2" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.buttonUrl} className="btn btn-light border">{props.buttonLabel}</a>
            </div>
        </div>
    )
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string

};

Card.defaultProps = {
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLabel: "More info",
    buttonUrl: "https://es.react.dev/"
  };