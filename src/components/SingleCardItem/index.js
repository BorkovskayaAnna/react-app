import React from 'react'
import classnames from 'classnames'
import style from "./SingleCardItem.module.scss";
import defaultImg from "../../assets/images/card-default.jpeg";

export const SingleCardItem = ({card}) => (
  <div className="container">
    {console.log(card)}
    <div className={style.cardWrap}>
      <div className={style.imageWrap}>
        <img
            src={
            card.links?.flickr?.original[0]
                ? card.links.flickr.original[0]
                : defaultImg
            }
            alt={card.name}
        />
      </div>
      <div className={style.cardInfo}>
        <h1 className={style.cardName}>
          <strong>Name</strong>:
          &nbsp;{card.name}
        </h1>
        <p>{card.details}</p>
        <p>
          <strong>Success:</strong>
          &nbsp;{card.success === null ? '-' : card.success ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Upcoming:</strong>
          &nbsp;{card.upcoming === null ? '-' : card.upcoming ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Flight Number:</strong>
          &nbsp;{card.flight_number}
        </p>
      </div>
    </div>
  </div>
)
