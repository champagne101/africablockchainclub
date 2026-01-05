"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Event, events } from "@/data" 




export default function UpcomingEvents() {
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "ongoing" | "past">("all")
  const [showAll, setShowAll] = useState(false)
  

  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true
    return event.type === activeFilter
  })

  // Determine how many events to show initially
  const eventsToShow = showAll ? filteredEvents : filteredEvents.slice(0, 3)

  // Check if there are more events to show
  const hasMoreEvents = filteredEvents.length > 3

  return (
    <div className="w-full">
      <h2 className="mb-4 text-center font-mono text-4xl font-bold text-white md:text-5xl">Community Events</h2>
      <p className="mx-auto mb-8 max-w-3xl text-center text-base text-neutral-300 md:text-lg lg:text-xl">
      Join our community events to learn, build, and connect with fellow blockchain enthusiasts across Africa
    </p>


      <Tabs defaultValue="all" className="mb-12" onValueChange={(value) => {
        setActiveFilter(value as any)
        setShowAll(false) // Reset showAll when changing tabs
      }}>
        <div className="flex justify-center">
          <TabsList className="bg-neutral-700 px-2 py-1 md:px-4 md:py-2">
  <TabsTrigger 
    value="all" 
    className="px-2 py-1 text-xs md:px-3 md:py-2 md:text-sm lg:text-base data-[state=active]:bg-amber-500 data-[state=active]:text-black"
  >
    All Events
  </TabsTrigger>
  <TabsTrigger 
    value="upcoming" 
    className="px-2 py-1 text-xs md:px-3 md:py-2 md:text-sm lg:text-base data-[state=active]:bg-amber-500 data-[state=active]:text-black"
  >
    Upcoming
  </TabsTrigger>
  <TabsTrigger 
    value="ongoing" 
    className="px-2 py-1 text-xs md:px-3 md:py-2 md:text-sm lg:text-base data-[state=active]:bg-amber-500 data-[state=active]:text-black"
  >
    Ongoing
  </TabsTrigger>
  <TabsTrigger 
    value="past" 
    className="px-2 py-1 text-xs md:px-3 md:py-2 md:text-sm lg:text-base data-[state=active]:bg-amber-500 data-[state=active]:text-black"
  >
    Past Events
  </TabsTrigger>
</TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventsToShow.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {hasMoreEvents && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    Show All 
                  </>
                )}
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="upcoming" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventsToShow.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {hasMoreEvents && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    Show More ({filteredEvents.length - 3} more)
                  </>
                )}
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="ongoing" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventsToShow.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {hasMoreEvents && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    Show More ({filteredEvents.length - 3} more)
                  </>
                )}
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventsToShow.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {hasMoreEvents && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    Show More ({filteredEvents.length - 3} more)
                  </>
                )}
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper component for event cards
function EventCard({ event }: { event: Event }) {
  const handleRegisterClick = () => {
    if (event.registrationUrl) {
      window.open(event.registrationUrl, "_blank", "noopener,noreferrer")
    } else {
      // Fallback to internal registration page
      window.location.href = `/events/${event.id}/register`
    }
  }

  const handleViewDetailsClick = () => {
    if (event.detailsUrl) {
      window.location.href = event.detailsUrl
    } else {
      // Fallback to internal event details page
      window.location.href = `/events/${event.id}`
    }
  }

  return (
    <div className="group overflow-hidden rounded-lg bg-neutral-900">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Event type badge */}
        <div className="absolute right-3 top-3">
          {event.type === "upcoming" && (
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">Upcoming</span>
          )}
          {event.type === "ongoing" && (
            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">Ongoing</span>
          )}
          {event.type === "past" && (
            <span className="rounded-full bg-neutral-500 px-3 py-1 text-xs font-medium text-white">Past</span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-mono text-xl font-bold text-white">{event.title}</h3>
        {/* Hide description on mobile, show on md and larger screens */}
        <p className="mb-4 hidden text-neutral-300 md:block md:line-clamp-3">
          {event.description}
        </p>

        <div className="mb-4 space-y-2 text-sm text-neutral-400">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-amber-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-amber-500" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>

        {event.type !== "past" ? (
          <Button className="w-full bg-amber-500 text-black hover:bg-amber-400" onClick={handleRegisterClick}>
            Register
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800"
            onClick={handleViewDetailsClick}
          >
            View Details
          </Button>
        )}
      </div>
    </div>
  )
}