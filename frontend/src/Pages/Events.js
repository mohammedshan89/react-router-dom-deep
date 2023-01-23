import React from 'react'
import { useLoaderData,json } from 'react-router-dom'
import EventList from '../components/EventsList'

const EventsPage = () => {
  const data = useLoaderData()
  const events = data.events
  return (
    <div>
      <EventList events={events}/>
    </div>
  )
}

export default EventsPage

export const loader = async()=> {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Error({message: 'Could Not fetch Events'})
    // throw new Response(JSON.stringify({message: 'could not fetch Events'}),{status:500})
    throw json({ message: "could not fetch Events.." }, { status: 500 });
  } else {
    // const resDate = await response.json();
    // return resDate.events;
    return response
  }
}
