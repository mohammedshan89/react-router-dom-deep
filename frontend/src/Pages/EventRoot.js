import React from 'react'
import { Outlet } from 'react-router-dom'
import EventNavigation from '../components/EventsNavigation'
const EventRoot = () => {
  return (
    <div>
      <EventNavigation/>
      <main>
      <Outlet/>
      </main>
    </div>
  )
}

export default EventRoot
