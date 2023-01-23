import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom'

import EventItem from '../components/EventItem'
const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event
  return (
    <EventItem event={event} />
  )
}

export default EventDetailPage

export const loader = async({request, params})=> {
  const id = params.id
  const response = await fetch('http://localhost:8080/events/'+id)
  if(!response.ok){
    throw json({ message: "could not fetch Event.." }, { status: 500 });
  }else{
    return response
  }
}

export const action = async ({request, params})=> {
  const id = params.id
  
  const response = await fetch('http://localhost:8080/events/'+id, {
    method:'DELETE'
  })
  if (!response.ok) {
    throw json({ message: "could not Delete Event" }, { status: 500 });
  } else {
    return redirect('/events');
  }
}