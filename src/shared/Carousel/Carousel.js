import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { Card } from "../../shared/Cards/Card";
import {septemberGames} from "../../utilities/september"


export const Carousel = () => {
  const data = Object.values(septemberGames);

  console.log(data);
  return (
    <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
      {data.map((x)=>
      <div className="container">
        <Card teams = {x.teams} location={x.location} date ={x.date} time ={x.time} url={ x.url}/>
      </div>)}
    </ReactCardCarousel>
  )
}


/* <Carousel>
        {reviews.map(review => (
          <Carousel.Item key={review.id}>
            <img
              className="testimonialImages d-block w-50"
              src={review.image}
              alt={review.author}
            />
            <Carousel.Caption>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>*/