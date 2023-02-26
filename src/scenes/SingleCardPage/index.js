import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleData } from '../../api'
import { SingleCardItem } from '../../components/SingleCardItem'

export const SingleCardPage = () => {
	const { id } = useParams();
  const [card, setCard] = useState([]);

	useEffect(() => {
    fetchSingleData(id)
    .then(data => setCard(data))
  }, [id])
  
  return (
    <>
    {!card
      ? <div className="textCenter">
          <p>Nothing found</p>
        </div>
      : <div className="">
          <SingleCardItem card={card} />
        </div>
    }
    </>
  )
}

