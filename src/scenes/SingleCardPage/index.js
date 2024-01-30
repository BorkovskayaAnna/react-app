import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleData } from '../../api'
import { SingleCardItem } from '../../components/SingleCardItem'
import { ErrorPage} from '../../scenes/ErrorPage'
import { Loading } from '../../components/Loading'

export const SingleCardPage = () => {
	const { id } = useParams();
  const [card, setCard] = useState([]);
  // const [loading, setLoading] = useState(true)

	useEffect(() => {
    fetchSingleData(id)
    .then(data => setCard(data))
    // .finally(() => setLoading(false))
  }, [card.id, id])

  if(!card) {
    return <Loading/>
  }

  console.log(card.id)
  return (
    <>
    {card?.id === id
    ? <SingleCardItem card={card} />
    : <ErrorPage />
    }
    </>
  )
}

