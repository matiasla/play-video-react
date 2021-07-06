import React from "react";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img src={cover} alt="Stranger things" className="carousel-item__img" />

        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details-play" src="https://img.icons8.com/flat-round/64/000000/play--v1.png" alt="Play icon" />
                <img className="carousel-item__details-plus" src="https://img.icons8.com/flat-round/64/000000/plus.png" alt="Plus icon" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
    </div>
);

export default CarouselItem;