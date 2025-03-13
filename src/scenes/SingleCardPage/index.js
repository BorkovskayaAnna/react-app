import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleData } from '../../api'
import { SingleCardItem } from '../../components/SingleCardItem'
import { Loading } from '../../components/Loading'

export const SingleCardPage = () => {
	const { id } = useParams();
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true)

	useEffect(() => {
    fetchSingleData(id)
    .then(data => setCard(data))
    .finally(() => setLoading(false))
  }, [card.id, id])

  if(!card.id) {
    return <Loading />
  }

  return (
    <>
    {card.id === id 
    ? <SingleCardItem card={card} />
    : loading 
    && <Loading />
    }
    </>
  )
}
