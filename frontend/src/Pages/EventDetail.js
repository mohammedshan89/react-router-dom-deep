import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailPage = () => {
  const params = useParams()
  return (
    <div>
      <h1>Event Detail Page</h1>
      <p>{params.id}</p>
      <Link to={'..'} relative = 'path'>Back</Link>
    </div>
  )
}

export default EventDetailPage
